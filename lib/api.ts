import type { Vaga, Empresa } from "@/lib/tipos";

const API_URL = "http://localhost:3001";

const CACHE = { next: { revalidate: 60, tags: ["vagas"] } };

export async function listarVagas(): Promise<Vaga[]> {
  const resposta = await fetch(`${API_URL}/vagas`, CACHE);
  if (!resposta.ok) throw new Error(`Erro ao listar vagas ${resposta.status}`);
  return resposta.json();
}

export async function buscarVaga(id: string): Promise<Vaga | undefined> {
  const vagas = await listarVagas();
  return vagas.find((vaga) => vaga.id === id);
}

export async function listarEmpresas(): Promise<Empresa[]> {
  const resposta = await fetch(`${API_URL}/empresas`, {
    next: { revalidate: 3600, tags: ["empresas"] },   // empresa muda muito menos que vaga
  });
  if (!resposta.ok) throw new Error(`Erro ao listar empresas ${resposta.status}`);
  return resposta.json();
}

export async function buscarEmpresa(slug: string): Promise<Empresa | undefined> {
  const empresas = await listarEmpresas();
  return empresas.find((empresa) => empresa.slug === slug);
}