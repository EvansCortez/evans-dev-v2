type ContactPayload = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
};

export const runtime = "nodejs";

function isValidEmail(email: string) {
  return /^\S+@\S+\.\S+$/.test(email);
}

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = clean(payload.name);
  const email = clean(payload.email);
  const message = clean(payload.message);

  if (name.length < 2 || !isValidEmail(email) || message.length < 20) {
    return Response.json(
      { error: "Please provide a valid name, email, and message." },
      { status: 400 }
    );
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL ?? "evans.cortez23@stjohns.edu";
  const fromEmail =
    process.env.CONTACT_FROM_EMAIL ?? "Portfolio Contact <onboarding@resend.dev>";

  if (!resendApiKey) {
    return Response.json(
      { error: "Contact backend is not configured yet." },
      { status: 503 }
    );
  }

  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      reply_to: email,
      subject: `Portfolio inquiry from ${name}`,
      text: `${message}\n\nFrom: ${name}\nEmail: ${email}`,
    }),
  });

  if (!resendResponse.ok) {
    return Response.json(
      { error: "Message could not be sent. Please email me directly." },
      { status: 502 }
    );
  }

  return Response.json({ ok: true });
}
