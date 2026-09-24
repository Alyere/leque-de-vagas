"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Vaga } from "@/lib/tipos";

type MuralDeVagasProps = {
  vagas: Vaga[];
  ultimaAtualizacao: string;
};

const TODAS = "Todas";

function formatarData(data: string) {
  // "2026-09-24" sem hora é lido como UTC e mostra o dia anterior no Brasil.
  const soData = /^\d{4}-\d{2}-\d{2}$/.test(data);
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(new Date(soData ? `${data}T00:00:00` : data));
}

// "analise" passa a encontrar "Análise", "sao paulo" encontra "São Paulo"
const normalizar = (texto: string) =>
  texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

const estilos = `
.mural {
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  align-items: start;
}
.mural-hero {
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 48px;
  padding: 28px;
  border: 1px solid var(--border);
  border-radius: 24px;
  background: linear-gradient(180deg, #110914 0%, #0a0710 100%);
  box-shadow: var(--shadow-violet);
}
.mural-glow {
  position: absolute;
  bottom: -10%;
  left: -20%;
  width: 80%;
  height: 50%;
  background: radial-gradient(ellipse, rgba(255, 46, 138, 0.2), transparent 70%);
  filter: blur(40px);
  pointer-events: none;
}
@media (min-width: 960px) {
  .mural { grid-template-columns: minmax(300px, 380px) 1fr; }
  .mural-hero { position: sticky; top: 20px; min-height: 75vh; padding: 40px; }
}

.mural-painel {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 24px;
  border: 1px solid var(--border);
  border-radius: 20px;
  background: var(--surface);
}
.mural-busca {
  width: 100%;
  padding: 14px 20px;
  border-radius: 12px;
  border: 1px solid var(--border);
  background: rgba(0, 0, 0, 0.3);
  color: var(--foreground);
  font-family: 'Satoshi', sans-serif;
  font-size: 1rem;
}
.mural-busca::placeholder { color: var(--text-muted); }
.mural-busca:focus-visible,
.mural-chip:focus-visible,
.mural-limpar:focus-visible,
.mural-card a:focus-visible {
  outline: 2px solid var(--pink-light);
  outline-offset: 2px;
}

.mural-chips { display: flex; flex-wrap: wrap; gap: 8px; }
.mural-chip {
  padding: 8px 16px;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: transparent;
  color: var(--text-muted);
  font: inherit;
  font-size: 0.9rem;
  cursor: pointer;
  transition: color 0.2s, border-color 0.2s, background 0.2s;
}
.mural-chip:hover {
  color: var(--foreground);
  border-color: color-mix(in srgb, var(--pink-light) 40%, var(--border));
}
.mural-chip[aria-pressed="true"] {
  color: var(--pink-light);
  border-color: color-mix(in srgb, var(--pink-light) 55%, transparent);
  background: color-mix(in srgb, var(--pink-light) 14%, transparent);
}

.mural-status {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
  padding-top: 16px;
  border-top: 1px solid var(--border);
  font-size: 0.9rem;
  color: var(--text-muted);
}
.mural-atualizado {
  padding: 2px 10px;
  border-radius: 999px;
  color: var(--pink-light);
  background: color-mix(in srgb, var(--pink-light) 12%, transparent);
}
.mural-limpar {
  margin-left: auto;
  padding: 4px 4px;
  border: 0;
  background: none;
  color: var(--pink-light);
  font: inherit;
  text-decoration: underline;
  text-underline-offset: 3px;
  cursor: pointer;
}

.mural-lista { display: grid; grid-template-columns: 1fr; gap: 16px; }
.mural-card {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
  border: 1px solid var(--border);
  border-radius: 16px;
  background: var(--surface);
  transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
}
.mural-card:hover,
.mural-card:focus-within {
  transform: translateX(4px);
  border-color: color-mix(in srgb, var(--pink-light) 40%, var(--border));
  box-shadow: var(--shadow-pink);
}
.mural-topo {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
}
.mural-titulo {
  margin: 0 0 4px;
  font-family: 'Clash Display', sans-serif;
  font-size: 1.4rem;
  line-height: 1.2;
}
/* o link do título cobre o card inteiro, então o card todo é clicável */
.mural-titulo a { color: var(--foreground); text-decoration: none; }
.mural-titulo a::after { content: ""; position: absolute; inset: 0; border-radius: 16px; }
.mural-empresa {
  position: relative;
  z-index: 1;
  color: var(--pink-light);
  font-size: 0.95rem;
}
.mural-seta {
  flex: none;
  width: 40px;
  height: 40px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  color: var(--pink-light);
  border: 1px solid color-mix(in srgb, var(--pink-light) 30%, transparent);
  background: color-mix(in srgb, var(--pink-light) 10%, transparent);
  transition: background 0.2s, color 0.2s;
}
.mural-card:hover .mural-seta,
.mural-card:focus-within .mural-seta {
  background: var(--pink-light);
  color: #000;
}

.mural-tags { display: flex; flex-wrap: wrap; gap: 8px; }
.mural-tag {
  padding: 4px 12px;
  border-radius: 999px;
  font-size: 0.85rem;
  border: 1px solid var(--border);
  background: rgba(0, 0, 0, 0.3);
  color: var(--text-muted);
}
.mural-tag-iniciante {
  border-color: rgba(139, 47, 214, 0.35);
  background: rgba(139, 47, 214, 0.12);
  color: var(--violet-light);
}

.mural-vazio {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 40px 24px;
  text-align: center;
  color: var(--text-muted);
  border: 1px dashed color-mix(in srgb, var(--pink-light) 30%, var(--border));
  border-radius: 16px;
}

@media (prefers-reduced-motion: reduce) {
  .mural-card, .mural-chip, .mural-seta { transition: none; }
  .mural-card:hover, .mural-card:focus-within { transform: none; }
}
`;

export default function MuralDeVagas({ vagas, ultimaAtualizacao }: MuralDeVagasProps) {
  const [busca, setBusca] = useState("");
  const [area, setArea] = useState(TODAS);

  const areas = useMemo(
    () => [TODAS, ...new Set(vagas.map((vaga) => vaga.area))],
    [vagas]
  );

  const visiveis = useMemo(() => {
    const termo = normalizar(busca.trim());
    return vagas.filter((vaga) => {
      const correspondeBusca =
        normalizar(vaga.titulo).includes(termo) ||
        normalizar(vaga.empresa).includes(termo);
      const correspondeArea = area === TODAS || vaga.area === area;
      return correspondeBusca && correspondeArea;
    });
  }, [vagas, busca, area]);

  const filtrando = busca.trim() !== "" || area !== TODAS;

  function limparFiltros() {
    setBusca("");
    setArea(TODAS);
  }

  return (
    <div className="mural">
      <style>{estilos}</style>

      <aside className="mural-hero">
        <div className="mural-glow" aria-hidden="true" />

        <div style={{ position: "relative", display: "flex", alignItems: "center", gap: "12px" }}>
          <div
            aria-hidden="true"
            style={{
              width: "32px",
              height: "32px",
              display: "grid",
              placeItems: "center",
              borderRadius: "8px",
              background: "var(--pink-light)",
              color: "#000",
              fontWeight: 700,
              fontSize: "1.2rem",
            }}
          >
            L
          </div>
          <span style={{ fontSize: "1.4rem", fontWeight: 700, fontFamily: "'Clash Display', sans-serif" }}>
            Leque de Vagas
          </span>
        </div>

        <div style={{ position: "relative", zIndex: 1 }}>
          <h1
            style={{
              margin: "0 0 16px",
              fontFamily: "'Clash Display', sans-serif",
              fontSize: "clamp(2rem, 4vw, 2.6rem)",
              lineHeight: 1.15,
              color: "var(--foreground)",
            }}
          >
            Sua próxima
            <br />
            grande jornada.
          </h1>
          <p
            style={{
              margin: 0,
              maxWidth: "36ch",
              color: "var(--text-muted)",
              fontSize: "1.05rem",
              lineHeight: 1.6,
            }}
          >
            Descubra as oportunidades que combinam com o seu perfil e expanda seus
            horizontes profissionais.
          </p>
        </div>
      </aside>

      <section style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
        <div className="mural-painel">
          <input
            type="search"
            className="mural-busca"
            placeholder="Buscar por cargo ou empresa..."
            aria-label="Buscar vagas por cargo ou empresa"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
          />

          <div className="mural-chips" role="group" aria-label="Filtrar por área">
            {areas.map((a) => (
              <button
                key={a}
                type="button"
                className="mural-chip"
                aria-pressed={area === a}
                onClick={() => setArea(a)}
              >
                {a}
              </button>
            ))}
          </div>

          <div className="mural-status">
            <span aria-live="polite">
              {visiveis.length} {visiveis.length === 1 ? "vaga encontrada" : "vagas encontradas"}
            </span>
            <span className="mural-atualizado">
              Atualizado em {formatarData(ultimaAtualizacao)}
            </span>
            {filtrando && (
              <button type="button" className="mural-limpar" onClick={limparFiltros}>
                Limpar filtros
              </button>
            )}
          </div>
        </div>

        <div className="mural-lista">
          {visiveis.length === 0 && (
            <div className="mural-vazio">
              <p style={{ margin: 0 }}>Nenhuma vaga encontrada para essa busca.</p>
              {filtrando && (
                <button type="button" className="mural-chip" onClick={limparFiltros}>
                  Limpar filtros
                </button>
              )}
            </div>
          )}

          {visiveis.map((vaga) => (
            <article key={vaga.id} className="mural-card">
              <div className="mural-topo">
                <div>
                  <h2 className="mural-titulo">
                    <Link href={`/vagas/${vaga.id}`}>{vaga.titulo}</Link>
                  </h2>
                  <Link href={`/empresas/${vaga.empresaSlug}`} className="mural-empresa">
                    {vaga.empresa}
                  </Link>
                </div>
                <span className="mural-seta" aria-hidden="true">
                  ↗
                </span>
              </div>

              <div className="mural-tags">
                <span className="mural-tag">{vaga.area}</span>
                {vaga.aceitaIniciante && (
                  <span className="mural-tag mural-tag-iniciante">Aceita iniciante</span>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}