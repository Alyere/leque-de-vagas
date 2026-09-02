import Link from "next/link";
import { empresas } from "@/data/empresa";

export default function ListagemEmpresas() {
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