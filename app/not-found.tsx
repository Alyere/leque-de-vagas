import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <div className="not-found-card">
        <h1>404 — Página não encontrada</h1>
        <p>O que você procurava não existe neste site.</p>
        <Link href="/">Voltar para o Início</Link>
      </div>
    </main>
  );
}