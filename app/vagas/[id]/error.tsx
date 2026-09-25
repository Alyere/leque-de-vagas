"use client";

export default function ErrorBoundary({ error, reset,}: { error: Error; reset: () => void;}) 
  {
  return (
    <main
      style={{
        minHeight: "60vh",
        display: "grid",
        placeItems: "center",
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "560px",
          textAlign: "center",
          border: "1px solid var(--border)",
          borderRadius: "20px",
          background: "rgba(255,255,255,0.02)",
          padding: "32px",
        }}
      >
        <h2 style={{ margin: "0 0 12px", fontSize: "2rem", color: "var(--foreground)" }}>
          Não deu para carregar essa vaga agora
        </h2>
        <p style={{ margin: "0 0 20px", color: "var(--text-muted)", lineHeight: 1.7 }}>
          A conexão pode ter falhado ou o serviço de dados temporariamente não respondeu. Tente de novo em instantes.
        </p>
        <button
          type="button"
          onClick={() => reset()}
          style={{
            border: "1px solid rgba(255, 46, 138, 0.4)",
            background: "#140b17",
            color: "var(--pink-light)",
            borderRadius: "999px",
            padding: "12px 22px",
            cursor: "pointer",
            fontWeight: 600,
          }}
        >
          Tentar de novo
        </button>
      </div>
    </main>
  );
}
