import FormularioNovaVaga from "./formulario";
import { listarEmpresas } from "@/lib/api";

export default async function NovaVaga() {
  const empresas = await listarEmpresas();

  return (
    <>
      <h1 className="vaga-page-title">Nova Vaga</h1>
      <FormularioNovaVaga empresas={empresas} />
    </>
  );
}