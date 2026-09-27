import { Suspense } from "react";
import Link from "next/link";
import NumerosDoCatalogo from "@/components/NumerosDoCatalogo";
import ListagemDeVagas from "@/components/ListagemDeVagas";

const skeletonStyle = {
  minHeight: "120px",
  borderRadius: "20px",
  border: "1px solid var(--border)",
  background: "linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))",
  opacity: 0.8,
};

export default function PaginaDeVagas() {
  return (
    <main style={{ display: "grid", gap: "24px" }}>
      <Link href="/vagas/nova" className="vagas-criar-link">
        <span className="vagas-criar-titulo">Criar vaga</span>
        <span className="vagas-criar-descricao">
          + Adicionar nova vaga ao catálogo
        </span>
      </Link>

      <Suspense fallback={<div style={skeletonStyle} />}>
        <NumerosDoCatalogo />
      </Suspense>

      <Suspense fallback={<div style={{ ...skeletonStyle, minHeight: "540px" }} />}>
        <ListagemDeVagas />
      </Suspense>
    </main>
  );
}

