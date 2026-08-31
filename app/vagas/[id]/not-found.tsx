 main
export default function NotFoundVaga() {
  return (
    <div>
      <h2>Vaga não encontrada</h2>
      <p>Ela pode ter sido encerrada ou o link está errado.</p>
    </div>

import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <h1>Vaga não encontrada</h1>
      <p>A vaga que você está procurando não existe.</p>

      <Link href="/vagas">
        Voltar para as vagas
      </Link>
    </main>
main
  );
}