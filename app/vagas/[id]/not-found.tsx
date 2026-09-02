import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-12">
      <h1 className="text-4xl font-extrabold text-neutral-900 mb-2">404</h1>
      <h2 className="text-xl font-semibold text-neutral-700 mb-4">
        Página não encontrada
      </h2>
      <p className="text-neutral-500 max-w-md mb-6">
        A página ou vaga que você está procurando não existe ou foi removida.
      </p>
      <Link
        href="/"
        className="px-4 py-2 bg-neutral-900 text-white rounded-md hover:bg-neutral-800 transition-colors text-sm font-medium"
      >
        Voltar para a página inicial
      </Link>
    </main>
  );
}