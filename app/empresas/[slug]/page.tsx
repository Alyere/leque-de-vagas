import { notFound } from "next/navigation";
import { empresas } from "@/data/empresa";
import { vagas } from "@/data/vagas";
import AbasDaEmpresa from "@/components/AbasDaEmpresa";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function PaginaDaEmpresa({
  params,
}: PageProps) {
  const { slug } = await params;

  const empresa = empresas.find(
    (empresa) => empresa.slug === slug
  );
  

  if (!empresa) {
    notFound();
  }
  

  const vagasDaEmpresa = vagas.filter((vaga) => vaga.empresaSlug === slug);

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