"use server";

import { guardarEmpresa, buscarEmpresa } from "@/lib/api";
import { EsquemaDaEmpresa } from "@/lib/esquemas";
import { revalidatePath } from "next/cache";

export type ValoresDaEmpresa = {
  nome: string;
  sobre: string;
  site: string;
};

export type EstadoDaEmpresa = {
  ok: boolean;
  mensagem: string;
  erros: Record<string, string>;
  valores: ValoresDaEmpresa;
};

export async function salvarEmpresa(
  estadoAnterior: EstadoDaEmpresa,
  dados: FormData,
): Promise<EstadoDaEmpresa> {
  const valores = {
    nome: String(dados.get("nome") ?? ""),
    sobre: String(dados.get("sobre") ?? ""),
    site: String(dados.get("site") ?? ""),
  };
  const slug = String(dados.get("slug") ?? "");

  try {
    const analise = EsquemaDaEmpresa.safeParse(valores);

    if (!analise.success) {
      const erros = Object.fromEntries(
        analise.error.issues.map((erro) => [String(erro.path[0]), erro.message]),
      ) as Record<string, string>;

      return { ok: false, mensagem: "", erros, valores };
    }

    const empresaAtual = await buscarEmpresa(slug);

    if (!empresaAtual) {
      return {
        ok: false,
        mensagem: "",
        erros: { geral: "Não foi possível localizar esta empresa." },
        valores,
      };
    }

    guardarEmpresa({
      ...empresaAtual,
      ...analise.data,
      slug: empresaAtual.slug,
    });

    // O índice e o perfil são rotas distintas; revalidar só uma deixa a outra desatualizada.
    revalidatePath("/empresas");
    revalidatePath(`/empresas/${empresaAtual.slug}`);

    return {
      ok: true,
      mensagem: "Perfil atualizado.",
      erros: {},
      valores: analise.data,
    };
  } catch (erro) {
    console.error("[acao] erro ao salvar empresa:", erro);

    return {
      ok: false,
      mensagem: "",
      erros: { geral: "Não foi possível salvar o perfil. Tente novamente." },
      valores,
    };
  }
}