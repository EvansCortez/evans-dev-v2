export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Evans Cortez",
    url: "https://evanscortez.dev",
    email: "mailto:evans.cortez23@stjohns.edu",
    sameAs: [
      "https://github.com/EvansCortez",
      "https://linkedin.com/in/evans-cortez",
    ],
    jobTitle: "Machine Learning Engineer and Full-Stack Developer",
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "St. John's University",
    },
    knowsAbout: [
      "Machine Learning",
      "Natural Language Processing",
      "AI Security",
      "Full-Stack Development",
      "Database Design",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
