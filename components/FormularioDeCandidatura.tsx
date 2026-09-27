"use client";

import { useActionState } from "react";
import BotaoDeEnviar from "@/components/BotaoDeEnviar";
import {
  enviarCandidatura,
  type EstadoDaCandidatura,
} from "@/app/vagas/[id]/candidatura";

const ESTADO_INICIAL: EstadoDaCandidatura = {
  ok: false,
  mensagem: "",
  erros: {},
  valores: { nome: "", email: "", habilidades: "" },
};

const estiloCampo = {
  background: "rgba(0,0,0,0.4)",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: "12px",
  padding: "14px 20px",
  color: "#fff",
  font: "inherit",
};

export default function FormularioDeCandidatura({
  tituloDaVaga,
}: {
  tituloDaVaga: string;
}) {
  const [estado, acaoDoForm] = useActionState(
    enviarCandidatura,
    ESTADO_INICIAL,
  );

  if (estado.ok) {
    return (
      <div className="ok" role="status" aria-live="polite" style={{ display: "grid", gap: "16px" }}>
        <h3 style={{ margin: 0, color: "var(--foreground)" }}>
          Candidatura registrada ✓
        </h3>
        <p style={{ margin: 0, color: "var(--text-muted)", lineHeight: 1.6 }}>
          {estado.mensagem}
        </p>
      </div>
    );
  }

  return (
    <form action={acaoDoForm} noValidate style={{ display: "grid", gap: "16px" }}>
      <input type="hidden" name="tituloDaVaga" value={tituloDaVaga} />

      <label style={{ display: "grid", gap: "8px", color: "var(--text-muted)" }}>
        Nome
        <input
          name="nome"
          autoComplete="name"
          defaultValue={estado.valores.nome}
          aria-invalid={Boolean(estado.erros.nome)}
          aria-describedby={estado.erros.nome ? "candidatura-erro-nome" : undefined}
          style={estiloCampo}
        />
        {estado.erros.nome ? (
          <span id="candidatura-erro-nome" className="vaga-erro">
            {estado.erros.nome}
          </span>
        ) : null}
      </label>

      <label style={{ display: "grid", gap: "8px", color: "var(--text-muted)" }}>
        E-mail
        <input
          name="email"
          type="email"
          autoComplete="email"
          defaultValue={estado.valores.email}
          aria-invalid={Boolean(estado.erros.email)}
          aria-describedby={estado.erros.email ? "candidatura-erro-email" : undefined}
          style={estiloCampo}
        />
        {estado.erros.email ? (
          <span id="candidatura-erro-email" className="vaga-erro">
            {estado.erros.email}
          </span>
        ) : null}
      </label>

      <label style={{ display: "grid", gap: "8px", color: "var(--text-muted)" }}>
        Habilidades
        <textarea
          name="habilidades"
          rows={4}
          defaultValue={estado.valores.habilidades}
          aria-invalid={Boolean(estado.erros.habilidades)}
          aria-describedby={
            estado.erros.habilidades
              ? "candidatura-ajuda-habilidades candidatura-erro-habilidades"
              : "candidatura-ajuda-habilidades"
          }
          placeholder={"React\nTypeScript\nAcessibilidade"}
          style={{ ...estiloCampo, resize: "vertical", lineHeight: 1.5 }}
        />
        <span
          id="candidatura-ajuda-habilidades"
          style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}
        >
          Informe uma habilidade por linha.
        </span>
        {estado.erros.habilidades ? (
          <span id="candidatura-erro-habilidades" className="vaga-erro">
            {estado.erros.habilidades}
          </span>
        ) : null}
      </label>

      {estado.erros.geral ? <p className="vaga-erro">{estado.erros.geral}</p> : null}
      <BotaoDeEnviar>Enviar candidatura</BotaoDeEnviar>
    </form>
  );
}