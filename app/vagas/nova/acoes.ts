"use server";

import { guardarVaga, listarEmpresas } from "@/lib/api";
import { EsquemaDaVaga } from "@/lib/esquemas";
import type { Vaga } from "@/lib/tipos";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export type EstadoDaVaga = {
  ok: boolean;
  erros: Record<string, string>;
  valores: Record<string, string | number | boolean>;
};

export async function criarVaga(
  estadoAnterior: EstadoDaVaga,
  dados: FormData,
): Promise<EstadoDaVaga> {
  let vagaId: string;

  try {
    const valores = Object.fromEntries(dados);
    const analise = EsquemaDaVaga.safeParse(valores);

    if (!analise.success) {
      const erros = Object.fromEntries(
        analise.error.issues.map((erro) => [String(erro.path[0]), erro.message]),
      ) as Record<string, string>;

      return {
        ok: false,
        erros,
        valores: valores as Record<string, string | number | boolean>,
      };
    }

    const empresas = await listarEmpresas();
    const empresa = empresas.find(({ slug }) => slug === analise.data.empresaSlug);

    if (!empresa) {
      return {
        ok: false,
        erros: { empresaSlug: "Selecione uma empresa existente." },
        valores: valores as Record<string, string | number | boolean>,
      };
    }

    const vaga: Vaga = {
      id: crypto.randomUUID(),
      titulo: analise.data.titulo,
      empresa: empresa.nome,
      empresaSlug: analise.data.empresaSlug,
      area: analise.data.area,
      senioridade: analise.data.senioridade,
      local: analise.data.local,
      aceitaIniciante: analise.data.aceitaIniciante,
      descricao: analise.data.descricao,
    };
    vagaId = vaga.id;
    console.log(`[acao] vaga criada: ${vaga.titulo} (${vaga.id})`);
    guardarVaga(vaga);
    revalidatePath("/vagas");
  } catch (erro) {
    console.error("[acao] erro ao criar vaga:", erro);

    return {
      ok: false,
      erros: { geral: "Não foi possível criar a vaga. Tente novamente." },
      valores: Object.fromEntries(dados) as Record<string, string | number | boolean>,
    };
  }

  redirect(`/vagas/${vagaId}`);
}

