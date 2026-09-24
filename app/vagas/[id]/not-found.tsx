import Link from "next/link";

export default function NotFound() {
  return (
    <main style={{
      minHeight: "60vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      padding: "48px 20px",
      gap: "16px",
    }}>
      <h1 style={{ fontSize: "4rem", margin: 0, color: "var(--foreground)" }}>404</h1>
      <h2 style={{ fontSize: "1.5rem", margin: 0, color: "var(--pink-light)" }}>
        Vaga não encontrada
      </h2>
      <p style={{ maxWidth: "520px", margin: 0, color: "var(--text-muted)", lineHeight: 1.6 }}>
        Esta oportunidade não existe mais, foi removida ou o endereço digitado está errado.
      </p>
      <Link
        href="/vagas"
        style={{
          marginTop: "8px",
          background: "#140b17",
          border: "1px solid rgba(255, 46, 138, 0.4)",
          color: "var(--pink-light)",
          borderRadius: "999px",
          padding: "12px 22px",
          textDecoration: "none",
          fontWeight: 600,
        }}
      >
        Ver todas as vagas
      </Link>
    </main>
  );
}
