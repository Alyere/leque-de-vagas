import { notFound } from "next/navigation";
import { buscarEmpresa } from "@/lib/api";
import FormularioEditarEmpresa from "./formulario";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function EditarEmpresaPage({ params }: PageProps) {
  const { slug } = await params;
  const empresa = await buscarEmpresa(slug);

  if (!empresa) {
    notFound();
  }

  return (
    <main>
      <h1 className="vaga-page-title">Editar perfil da empresa</h1>
      <FormularioEditarEmpresa empresa={empresa} />
    </main>
  );
}