import Link from "next/link";
import { notFound } from "next/navigation";
import { buscarVaga, listarVagas } from "@/lib/api";

export async function generateStaticParams() {
  const vagas = await listarVagas();
  return vagas.map((vaga) => ({
    id: vaga.id,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const vaga = await buscarVaga(id);

  if (!vaga) return { title: "Vaga não encontrada · Leque de Vagas" };

  return {
    title: `${vaga.titulo} · ${vaga.empresa}`,
    description: vaga.descricao.slice(0, 150),
  };
}

import DescricaoDaVaga from "@/components/DescricaoDaVaga";
import BotaoCopiarLink from "@/components/BotaoCopiarLink";
import FormularioDeCandidatura from "@/components/FormularioDeCandidatura";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function DetalhesVagaPage({ params }: PageProps) {
  const { id } = await params;
  const vaga = await buscarVaga(id);
  const FormularioDeCandidaturaCompat = FormularioDeCandidatura as any;

  if (!vaga) {
    notFound();
  }

  return (
    <main>
      <nav style={{ marginBottom: "20px" }}>
        <Link href="/vagas" className="nav-link" style={{ padding: "0 0 0 5px", background: "transparent", border: "none", boxShadow: "none" }}>
          ← Voltar para vagas
        </Link>
      </nav>

      <div className="aba-conteudo" style={{ maxWidth: "800px", margin: "0 auto" }}>
        <header style={{ borderBottom: "1px solid var(--border)", paddingBottom: "24px", marginBottom: "24px" }}>
          <div style={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
            <span style={{ fontSize: "0.85rem", padding: "6px 10px", background: "rgba(255, 20, 147, 0.1)", borderRadius: "6px", color: "var(--pink-light)", fontWeight: 600 }}>
              {vaga.area}
            </span>
            <span style={{ fontSize: "0.85rem", padding: "6px 10px", background: "rgba(255, 20, 147, 0.1)", borderRadius: "6px", color: "var(--pink-light)", fontWeight: 600 }}>
              {vaga.senioridade}
            </span>
            {vaga.aceitaIniciante && (
              <span style={{ fontSize: "0.85rem", padding: "6px 10px", background: "rgba(0, 255, 128, 0.1)", borderRadius: "6px", color: "var(--green-light)", fontWeight: 600 }}>
                Aceita iniciantes
              </span>
            )}
          </div>

          <h1 style={{ marginBottom: "12px", color: "#fff", textShadow: "0 0 10px rgba(255, 20, 147, 0.25)", fontSize: "2rem" }}>
            {vaga.titulo}
          </h1>

          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px", color: "var(--text-muted)", fontSize: "1rem" }}>
            <span>{vaga.empresa}</span>
            <span>·</span>
            <span>{vaga.local}</span>
            <span>·</span>
            <Link
              href={`/empresas/${vaga.empresaSlug}`}
              style={{ color: "var(--pink-light)", fontWeight: 600 }}
            >
              Ver página da empresa →
            </Link>
          </div>
        </header>

        <section style={{ marginBottom: "30px" }}>
          <h2 style={{ marginBottom: "16px", color: "#fff" }}>
            Descrição da vaga
          </h2>
          <DescricaoDaVaga texto={vaga.descricao} />
        </section>

        <section
          style={{
            marginBottom: "30px",
            paddingTop: "24px",
            borderTop: "1px solid var(--border)",
          }}
        >
          <h2 style={{ marginBottom: "20px", color: "#fff" }}>
            Candidatar-se
          </h2>
          
          <div
            style={{
              background: "rgba(255, 255, 255, 0.03)",
              border: "1px solid var(--border)",
              borderRadius: "12px",
              padding: "24px",
            }}
          >
            <FormularioDeCandidatura tituloDaVaga={vaga.titulo} />
          </div>
        </section>

        <footer style={{ paddingTop: "24px", borderTop: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <BotaoCopiarLink />
        </footer>
      </div>
    </main>
  );
}