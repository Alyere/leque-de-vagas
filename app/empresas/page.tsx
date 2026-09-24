import type { Metadata } from "next";
import Link from "next/link";
import { listarEmpresas } from "@/lib/api";

export const metadata: Metadata = {
  title: "Empresas · Leque de Vagas",
  description: "Conheça as empresas que publicam oportunidades no Leque de Vagas.",
};

export default async function ListagemEmpresas() {
  const empresas = await listarEmpresas();
  return (
    <main>
      <h1>Empresas</h1>

      <div className="empresas-lista">
        {empresas.map((empresa) => (
          <article className="empresa-card" key={empresa.slug}>
            <h2>{empresa.nome}</h2>

            <p>{empresa.sobre}</p>

            <Link href={`/empresas/${empresa.slug}`}>
              Ver vagas
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}