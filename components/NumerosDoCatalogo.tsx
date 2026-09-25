import { listarVagas } from "@/lib/api";

// Se o seu sistema já tem outro nome para o rosa principal
// (ex.: --accent, --pink), troque só aqui.
const ROSA = "var(--primary, #db2777)";
const ROSA_SUAVE = `color-mix(in srgb, ${ROSA} 14%, var(--surface))`;
const ROSA_BORDA = `color-mix(in srgb, ${ROSA} 30%, var(--border))`;

export default async function NumerosDoCatalogo() {
  const vagas = await listarVagas();
  const total = vagas.length;
  const iniciantes = vagas.filter((vaga) => vaga.aceitaIniciante).length;
  const percentual = total > 0 ? Math.round((iniciantes / total) * 100) : 0;

  if (total === 0) {
    return (
      <section
        style={{
          border: `1px dashed ${ROSA_BORDA}`,
          borderRadius: "20px",
          background: ROSA_SUAVE,
          padding: "24px 28px",
          color: "var(--text-muted)",
          fontSize: "1.05rem",
        }}
      >
        Ainda não há vagas no catálogo. Assim que forem cadastradas, os números
        aparecem aqui.
      </section>
    );
  }

  return (
    <section
      aria-label="Resumo do catálogo de vagas"
      style={{
        border: `1px solid ${ROSA_BORDA}`,
        borderRadius: "20px",
        background: `linear-gradient(135deg, ${ROSA_SUAVE}, var(--surface) 70%)`,
        padding: "24px 28px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        minHeight: "120px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "baseline",
          justifyContent: "space-between",
          gap: "8px 24px",
        }}
      >
        <p style={{ margin: 0, display: "flex", alignItems: "baseline", gap: "12px" }}>
          <strong
            style={{
              fontSize: "clamp(2.25rem, 6vw, 3rem)",
              lineHeight: 1,
              color: ROSA,
              fontVariantNumeric: "tabular-nums",
            }}
          >
            {iniciantes}
          </strong>
          <span
            style={{
              color: "var(--foreground)",
              fontSize: "1.15rem",
              maxWidth: "26ch",
              lineHeight: 1.3,
            }}
          >
            {iniciantes === 1
              ? "vaga aceita quem está começando"
              : "vagas aceitam quem está começando"}
          </span>
        </p>

        <p
          style={{
            margin: 0,
            color: "var(--text-muted)",
            fontSize: "1rem",
            fontVariantNumeric: "tabular-nums",
          }}
        >
          {total} {total === 1 ? "vaga no catálogo" : "vagas no catálogo"}
        </p>
      </div>

      <div>
        <div
          role="progressbar"
          aria-label="Porcentagem de vagas que aceitam iniciantes"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={percentual}
          style={{
            height: "10px",
            borderRadius: "999px",
            background: `color-mix(in srgb, ${ROSA} 16%, transparent)`,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: `${percentual}%`,
              height: "100%",
              borderRadius: "999px",
              background: ROSA,
            }}
          />
        </div>
        <p
          style={{
            margin: "8px 0 0",
            color: "var(--text-muted)",
            fontSize: "0.95rem",
          }}
        >
          {percentual}% do catálogo é aberto para iniciantes
        </p>
      </div>
    </section>
  );
}