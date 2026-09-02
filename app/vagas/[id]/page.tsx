import Link from "next/link";
import { notFound } from "next/navigation";
import { vagas } from "@/data/vagas";
import DescricaoDaVaga from "@/components/DescricaoDaVaga";
import BotaoCopiarLink from "@/components/BotaoCopiarLink";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function DetalhesVagaPage({ params }: PageProps) {
  const { id } = await params;
  const vaga = vagas.find((item) => item.id === id);

  if (!vaga) {
    notFound();
  }

  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <nav className="mb-6">
        <Link href="/" className="text-sm text-blue-600 hover:underline">
          ← Voltar para vagas
        </Link>
      </nav>

      <header className="border-b border-neutral-200 pb-6 mb-6">
        <span className="text-xs font-semibold px-2 py-1 rounded bg-neutral-100 text-neutral-700 mr-2">
          {vaga.area}
        </span>
        <span className="text-xs px-2 py-1 rounded bg-neutral-100 text-neutral-600">
          {vaga.senioridade}
        </span>

        <h1 className="text-2xl sm:text-3xl font-bold text-neutral-900 mt-3 mb-2">
          {vaga.titulo}
        </h1>

        <div className="flex flex-wrap items-center gap-2 text-neutral-600 text-sm">
          <span>{vaga.empresa}</span>
          <span>·</span>
          <span>{vaga.local}</span>
          <span>·</span>
          <Link
            href={`/empresas/${vaga.empresaSlug}`}
            className="text-blue-600 hover:underline font-medium"
          >
            Ver página da empresa →
          </Link>
        </div>
      </header>

      <section className="mb-8">
        <h2 className="text-lg font-semibold text-neutral-900 mb-3">
          Descrição da vaga
        </h2>
        <DescricaoDaVaga texto={vaga.descricao} />
      </section>

      <footer className="pt-6 border-t border-neutral-200 flex items-center justify-between">
        <BotaoCopiarLink />
      </footer>
    </main>
  );
}