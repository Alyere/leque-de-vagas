"use client";

import { useState } from "react";
import { Vaga } from "@/lib/tipos";
import Link from "next/link";

type MuralDeVagasProps = {
  vagas: Vaga[],
  ultimaAtualizacao: string;
};

function formatarData(data: string) {
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(new Date(data));
}

export default function MuralDeVagas({ vagas, ultimaAtualizacao }: MuralDeVagasProps) {
  const [busca, setBusca] = useState("");
  const [area, setArea] = useState("Todas");

  const areas = ["Todas", ...new Set(vagas.map((vaga) => vaga.area))];

  const visiveis = vagas.filter((vaga) => {
    const correspondeBusca =
      vaga.titulo.toLowerCase().includes(busca.toLowerCase()) ||
      vaga.empresa.toLowerCase().includes(busca.toLowerCase());
    const correspondeArea = area === "Todas" || vaga.area === area;
    return correspondeBusca && correspondeArea;
  });

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
      gap: "30px",
      alignItems: "start"
    }}>
      
      {/* LEFT COLUMN: Sticky Hero Card */}
      <aside style={{
        background: "linear-gradient(180deg, #110914 0%, #0a0710 100%)",
        border: "1px solid var(--border)",
        borderRadius: "24px",
        padding: "40px",
        position: "sticky",
        top: "20px",
        minHeight: "75vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxShadow: "var(--shadow-violet)",
        overflow: "hidden"
      }}>
        {/* Glow Blob */}
        <div style={{
          position: "absolute",
          bottom: "-10%", left: "-20%",
          width: "80%", height: "50%",
          background: "radial-gradient(ellipse, rgba(255, 46, 138, 0.2), transparent 70%)",
          filter: "blur(40px)",
          pointerEvents: "none"
        }} />

        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "40px" }}>
            <div style={{ width: "32px", height: "32px", background: "var(--pink-light)", borderRadius: "8px", display: "grid", placeItems: "center", color: "#000", fontWeight: "bold", fontSize: "1.2rem" }}>
              V
            </div>
            <span style={{ fontSize: "1.4rem", fontWeight: 700, fontFamily: "'Clash Display', sans-serif" }}>Leque de Vagas</span>
          </div>
        </div>

        <div style={{ position: "relative", zIndex: 1 }}>
          <h1 style={{ fontSize: "2.2rem", marginBottom: "16px", color: "var(--foreground)", lineHeight: 1.2 }}>
            Sua próxima<br />grande jornada.
          </h1>
          <p style={{ color: "var(--text-muted)", fontSize: "1.05rem", lineHeight: 1.6, marginBottom: "30px" }}>
            Descubra as oportunidades que combinam com o seu perfil e expanda seus horizontes profissionais.
          </p>
          
          <div style={{ display: "flex", gap: "12px" }}>
            {/* Minimal social icons representation */}
            {['In', 'GH', 'Tw'].map(network => (
              <div key={network} style={{
                width: "40px", height: "40px",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.05)",
                display: "grid", placeItems: "center",
                color: "var(--text-muted)",
                fontSize: "0.9rem",
                border: "1px solid var(--border)"
              }}>
                {network}
              </div>
            ))}
          </div>
        </div>
      </aside>

      {/* RIGHT COLUMN: Content / Nav / Jobs */}
      <section style={{ display: "flex", flexDirection: "column", gap: "30px", padding: "10px 0" }}>
        
        {/* Header / Filter Nav Area */}
        <div style={{
          background: "var(--surface)",
          border: "1px solid var(--border)",
          borderRadius: "20px",
          padding: "24px",
          display: "flex",
          flexDirection: "column",
          gap: "20px"
        }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "space-between", alignItems: "center" }}>
            <input 
              type="text" 
              placeholder="Buscar por cargo ou empresa..." 
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              style={{
                flex: "1 1 250px",
                padding: "14px 20px",
                borderRadius: "12px",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                background: "rgba(0,0,0,0.3)",
                color: "#fff",
                fontFamily: "'Satoshi', sans-serif"
              }}
            />
            
            <select 
              value={area} 
              onChange={(e) => setArea(e.target.value)}
              style={{
                padding: "14px 20px",
                borderRadius: "12px",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                background: "rgba(0,0,0,0.3)",
                color: "#fff",
                fontFamily: "'Satoshi', sans-serif",
                cursor: "pointer"
              }}
            >
              {areas.map(a => <option key={a} value={a} style={{ background: "#0a0710" }}>{a}</option>)}
            </select>
          </div>

          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", borderTop: "1px solid var(--border)", paddingTop: "16px" }}>
            <span style={{ fontSize: "0.9rem", color: "var(--text-muted)", display: "flex", alignItems: "center" }}>
              {visiveis.length} vagas encontradas
            </span>
            <span
  style={{ fontSize: "0.9rem", color: "var(--pink-light)", background: "rgba(255,46,138,0.1)", padding: "2px 10px", borderRadius: "999px",}}>
  Atualizado em {formatarData(ultimaAtualizacao)}
</span>
          </div>
        </div>

        {/* Jobs Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "16px" }}>
          {visiveis.length === 0 && (
            <p style={{ color: "var(--text-muted)", textAlign: "center", padding: "40px" }}>Nenhuma vaga encontrada.</p>
          )}

          {visiveis.map((vaga) => (
            <article key={vaga.id} style={{
              padding: "24px",
              border: "1px solid var(--border)",
              borderRadius: "16px",
              background: "var(--surface)",
              backdropFilter: "blur(10px)",
              transition: "transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              position: "relative",
              overflow: "hidden"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateX(4px)";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
              e.currentTarget.style.boxShadow = "var(--shadow-pink)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.boxShadow = "none";
            }}>
              
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div>
                  <h2 style={{ fontFamily: "'Clash Display', sans-serif", fontSize: "1.4rem", marginBottom: "4px" }}>
                    <Link href={`/vagas/${vaga.id}`} style={{ color: "var(--foreground)" }}>{vaga.titulo}</Link>
                  </h2>
                  <Link href={`/empresas/${vaga.empresaSlug}`} style={{ color: "var(--pink-light)", fontSize: "0.95rem" }}>
                    {vaga.empresa}
                  </Link>
                </div>
                
                {/* Apply button link */}
                <Link href={`/vagas/${vaga.id}`} style={{
                  width: "40px", height: "40px",
                  borderRadius: "50%",
                  background: "rgba(255, 46, 138, 0.1)",
                  display: "grid", placeItems: "center",
                  color: "var(--pink-light)",
                  border: "1px solid rgba(255, 46, 138, 0.3)",
                  transition: "all 0.2s ease"
                }}>
                  ↗
                </Link>
              </div>

              {/* Chips / Badges row */}
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                <span style={{
                  padding: "4px 12px",
                  borderRadius: "999px",
                  border: "1px solid rgba(255,255,255,0.1)",
                  background: "rgba(0,0,0,0.3)",
                  fontSize: "0.85rem",
                  color: "var(--text-muted)"
                }}>
                  {vaga.area}
                </span>
                {vaga.aceitaIniciante && (
                  <span style={{
                    padding: "4px 12px",
                    borderRadius: "999px",
                    border: "1px solid rgba(139, 47, 214, 0.3)",
                    background: "rgba(139, 47, 214, 0.1)",
                    fontSize: "0.85rem",
                    color: "var(--violet-light)"
                  }}>
                    Aceita Iniciante
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>

      </section>
    </div>
  );
}