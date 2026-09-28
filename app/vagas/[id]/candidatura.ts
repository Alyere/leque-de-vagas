"use server";

import { EsquemaDaCandidatura } from "@/lib/esquemas";

export type ValoresDaCandidatura = {
  nome: string;
  email: string;
  habilidades: string;
};

export type EstadoDaCandidatura = {
  ok: boolean;
  mensagem: string;
  erros: Record<string, string>;
  valores: ValoresDaCandidatura;
};

export async function enviarCandidatura(
  estadoAnterior: EstadoDaCandidatura,
  dados: FormData,
): Promise<EstadoDaCandidatura> {
  const valores: ValoresDaCandidatura = {
    nome: String(dados.get("nome") ?? ""),
    email: String(dados.get("email") ?? ""),
    habilidades: String(dados.get("habilidades") ?? ""),
  };
  const analise = EsquemaDaCandidatura.safeParse(valores);

  if (!analise.success) {
    const erros = Object.fromEntries(
      analise.error.issues.map((erro) => [String(erro.path[0]), erro.message]),
    ) as Record<string, string>;

    return { ok: false, mensagem: "", erros, valores };
  }

  const tituloDaVaga = String(dados.get("tituloDaVaga") ?? "esta vaga");

  return {
    ok: true,
    mensagem: `${analise.data.nome}, guardamos a sua candidatura para ${tituloDaVaga} com ${analise.data.habilidades.length} habilidade(s).`,
    erros: {},
    valores: {
      nome: analise.data.nome,
      email: analise.data.email,
      habilidades: analise.data.habilidades.join("\n"),
    },
  };
}