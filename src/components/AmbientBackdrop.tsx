export default function AmbientBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-[0.04] light:opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(148,163,184,0.6) 0px, rgba(148,163,184,0.6) 1px, transparent 1px, transparent 48px), repeating-linear-gradient(90deg, rgba(148,163,184,0.6) 0px, rgba(148,163,184,0.6) 1px, transparent 1px, transparent 48px)",
        }}
      />
      <div className="ambient-blob-a absolute -left-40 top-[-10%] h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle,rgba(45,212,191,0.14),transparent_70%)] will-change-transform" />
      <div className="ambient-blob-b absolute right-[-15%] top-[20%] h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle,rgba(251,191,36,0.1),transparent_70%)] will-change-transform" />
      <div className="ambient-blob-c absolute bottom-[-15%] left-[20%] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(45,212,191,0.1),transparent_70%)] will-change-transform" />
    </div>
  );
}
