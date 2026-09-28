import type { Vaga, Empresa } from "@/lib/tipos";

const API_URL =
  "https://raw.githubusercontent.com/Gabriel-Amorim-dev/leque-de-vagas/main/dados";

const GITHUB_API =
  "https://api.github.com/repos/Gabriel-Amorim-dev/leque-de-vagas";

// A memória do PROCESSO. Some quando o servidor reinicia; a aula 06 troca
// esta linha por um banco de verdade.
const criadas: Vaga[] = [];
const arquivadas = new Set<string>();
const empresasEditadas = new Map<string, Empresa>();

// 60 segundos porque vagas entram e saem o tempo todo
const CACHE = {
  next: {
    revalidate: 60,
    tags: ["vagas"],
  },
};

export async function buscarVagasPublicadas(): Promise<Vaga[]> {
  const resposta = await fetch(`${API_URL}/vagas.json`, CACHE);

  if (!resposta.ok) {
    throw new Error(`Erro ao listar vagas ${resposta.status}`);
  }

  const dados = await resposta.json();

  // Tratamento temporário para resiliência de cache (CDN do GitHub / Next.js)
  // Caso o cache retorne o formato antigo com chave "vagas", ele extrai o array.
  return Array.isArray(dados) ? dados : dados.vagas;
}

export async function listarVagas(): Promise<Vaga[]> {
  // O nome continua igual para não quebrar as páginas que já o utilizam.
  const buscadas = await buscarVagasPublicadas();

  return [...criadas, ...buscadas].filter((vaga) => !arquivadas.has(vaga.id));
}

export function arquivarVaga(id: string): void {
  arquivadas.add(id);
}

export function guardarVaga(vaga: Vaga) {
  criadas.unshift(vaga); // A mais nova aparece primeiro.
}

export async function buscarVaga(
  id: string
): Promise<Vaga | undefined> {
  const vagas = await listarVagas();

  return vagas.find((vaga) => vaga.id === id);
}

export async function listarEmpresas(): Promise<Empresa[]> {
  const resposta = await fetch(`${API_URL}/empresas.json`, {
    next: {
      revalidate: 3600, // 3600 segundos pois as informações da empresa mudam com pouca frequência
      tags: ["empresas"],
    },
  });

  if (!resposta.ok) {
    throw new Error(`Erro ao listar empresas ${resposta.status}`);
  }

  const dados = await resposta.json();

  // Tratamento temporário para resiliência de cache (CDN do GitHub / Next.js)
  // Caso o cache retorne o formato antigo com chave "empresas", ele extrai o array.
  const arrayEmpresas = Array.isArray(dados) ? dados : dados.empresas;

  if (!Array.isArray(arrayEmpresas)) {
    throw new Error(
      "Formato inválido de empresas.json: esperado um array de empresas."
    );
  }

  return arrayEmpresas.map(
    (empresa: Empresa) => empresasEditadas.get(empresa.slug) ?? empresa,
  );
}

export function guardarEmpresa(empresa: Empresa): void {
  empresasEditadas.set(empresa.slug, empresa);
}

export async function buscarEmpresa(
  slug: string
): Promise<Empresa | undefined> {
  const empresas = await listarEmpresas();

  return empresas.find((empresa) => empresa.slug === slug);
}

/**
 * Retorna a data do último commit que alterou o arquivo vagas.json
 */
export async function buscarUltimaAtualizacaoVagas(): Promise<string> {
  const resposta = await fetch(
    `${GITHUB_API}/commits?path=dados/vagas.json&per_page=1`,
    {
      headers: {
        Accept: "application/vnd.github+json",
      },
      next: {
        revalidate: 60,
        tags: ["vagas"],
      },
    }
  );

  if (!resposta.ok) {
    throw new Error(
      `Erro ao buscar atualização das vagas: ${resposta.status}`
    );
  }

  const commits = await resposta.json();

  if (!commits.length) {
    throw new Error("Nenhum commit encontrado para vagas.json");
  }

  return commits[0].commit.committer.date;
}