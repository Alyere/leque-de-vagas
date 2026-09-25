import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buscarEmpresa, listarVagas, listarEmpresas } from "@/lib/api";
import AbasDaEmpresa from "@/components/AbasDaEmpresa";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const empresas = await listarEmpresas();
  return empresas.map((empresa) => ({
    slug: empresa.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const empresa = await buscarEmpresa(slug);

  if (!empresa) {
    return {
      title: "Empresa não encontrada · Leque de Vagas",
      description: "A empresa que você procura não foi encontrada no Leque de Vagas.",
    };
  }

  return {
    title: `${empresa.nome} · Leque de Vagas`,
    description: empresa.sobre,
  };
}

export default async function PaginaDaEmpresa({
  params,
}: PageProps) {
  const { slug } = await params;

  const [empresa, todasVagas] = await Promise.all([
    buscarEmpresa(slug),
    listarVagas(),
  ]);

  if (!empresa) {
    notFound();
  }

  const vagasDaEmpresa = todasVagas.filter((vaga) => vaga.empresaSlug === slug);

  if (vagasDaEmpresa.length === 0) {
    notFound();
  }

  return (
    <main>
      <h1>{empresa.nome}</h1>

      <AbasDaEmpresa
        sobre={empresa.sobre}
        vagas={vagasDaEmpresa}
      />
    </main>
  );
}