import { listarVagas } from "@/lib/api";

export default async function NumerosDoCatalogo() {
  const vagas = await listarVagas();
  const iniciantes = vagas.filter((vaga) => vaga.aceitaIniciante).length;

  return (
    <section
      style={{
        border: "1px solid var(--border)",
        borderRadius: "20px",
        background: "var(--surface)",
        padding: "24px 28px",
        display: "flex",
        gap: "12px",
        flexWrap: "wrap",
        alignItems: "center",
        minHeight: "120px",
      }}
    >
      <strong style={{ fontSize: "2rem", color: "var(--foreground)" }}>
        {vagas.length}
      </strong>
      <span style={{ color: "var(--text-muted)", fontSize: "1.1rem" }}>
        vagas · {iniciantes} aceitam quem está começando
      </span>
    </section>
  );
}
