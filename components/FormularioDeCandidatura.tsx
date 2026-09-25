"use client";

import { useState } from "react";

export default function FormularioDeCandidatura({ tituloDaVaga }: { tituloDaVaga: string }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [rascunho, setRascunho] = useState("");
  const [habilidades, setHabilidades] = useState<string[]>([]);
  const [enviada, setEnviada] = useState(false);

  const emailParece = email.includes("@") && email.includes(".");
  const podeEnviar =
    nome.trim() !== "" &&
    emailParece &&
    habilidades.length > 0;

  function adicionarHabilidade() {
    const nova = rascunho.trim();

    if (!nova || habilidades.includes(nova)) {
      return;
    }

    setHabilidades((habilidadesAtuais) => [...habilidadesAtuais, nova]);
    setRascunho("");
  }

  if (enviada) {
    return (
      <div className="ok" style={{ display: "grid", gap: "16px" }}>
        <h3 style={{ margin: 0, color: "var(--foreground)" }}>Candidatura registrada ✓</h3>
        <p style={{ margin: 0, color: "var(--text-muted)", lineHeight: 1.6 }}>
          {nome}, guardamos a sua candidatura para <strong>{tituloDaVaga}</strong> com {habilidades.length} habilidade(s).
        </p>

        <button
          type="button"
          onClick={() => setEnviada(false)}
          style={{
            width: "fit-content",
            border: "1px solid rgba(255, 46, 138, 0.4)",
            background: "#140b17",
            color: "var(--pink-light)",
            borderRadius: "999px",
            padding: "10px 18px",
            cursor: "pointer",
          }}
        >
          corrigir alguma coisa
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setEnviada(true);
      }}
      style={{ display: "grid", gap: "16px" }}
    >
      <label style={{ display: "grid", gap: "8px", color: "var(--text-muted)" }}>
        Nome
        <input
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          style={{
            background: "rgba(0,0,0,0.4)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "12px",
            padding: "14px 20px",
            color: "#fff",
          }}
        />
      </label>

      <label style={{ display: "grid", gap: "8px", color: "var(--text-muted)" }}>
        E-mail
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            background: "rgba(0,0,0,0.4)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "12px",
            padding: "14px 20px",
            color: "#fff",
          }}
        />
      </label>

      {email !== "" && !emailParece && (
        <p style={{ margin: 0, color: "#ff9bbd" }}>Isso não parece um e-mail.</p>
      )}

      <label style={{ display: "grid", gap: "8px", color: "var(--text-muted)" }}>
        Habilidades
        <input
          value={rascunho}
          onChange={(e) => setRascunho(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              adicionarHabilidade();
            }
          }}
          style={{
            background: "rgba(0,0,0,0.4)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "12px",
            padding: "14px 20px",
            color: "#fff",
          }}
        />
      </label>

      <button
        type="button"
        onClick={adicionarHabilidade}
        style={{
          width: "fit-content",
          border: "1px dashed rgba(255,255,255,0.2)",
          background: "rgba(255,255,255,0.02)",
          color: "var(--text-muted)",
          borderRadius: "12px",
          padding: "12px 16px",
          cursor: "pointer",
        }}
      >
        adicionar
      </button>

      <ul style={{ listStyle: "none", display: "flex", flexWrap: "wrap", gap: "8px", padding: 0, margin: 0 }}>
        {habilidades.map((habilidade) => (
          <li
            key={habilidade}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 12px",
              borderRadius: "999px",
              background: "rgba(139, 47, 214, 0.1)",
              border: "1px solid rgba(139, 47, 214, 0.2)",
              color: "var(--foreground)",
            }}
          >
            {habilidade}
            <button
              type="button"
              aria-label={`remover ${habilidade}`}
              onClick={() => setHabilidades((atual) => atual.filter((item) => item !== habilidade))}
              style={{
                background: "transparent",
                border: "none",
                color: "var(--text-muted)",
                cursor: "pointer",
              }}
            >
              ×
            </button>
          </li>
        ))}
      </ul>

      <button
        type="submit"
        disabled={!podeEnviar}
        style={{
          width: "fit-content",
          background: "#140b17",
          border: "1px solid rgba(255, 46, 138, 0.4)",
          color: "var(--pink-light)",
          borderRadius: "999px",
          padding: "14px 24px",
          fontWeight: 600,
          cursor: podeEnviar ? "pointer" : "not-allowed",
          opacity: podeEnviar ? 1 : 0.5,
        }}
      >
        Enviar candidatura
      </button>
    </form>
  );
}