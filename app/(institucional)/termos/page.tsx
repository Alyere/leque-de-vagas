"use client"

import Link from "next/link";

export default function TermosPage() {
  const cards = [
    {
      id: "uso",
      icon: "📜",
      title: "Uso da Plataforma",
      description: "Regras gerais aplicáveis a recrutadores e candidatos. Estabelecemos diretrizes para garantir um ambiente profissional, ético e focado em resultados.",
    },
    {
      id: "privacidade",
      icon: "🔒",
      title: "Privacidade e Dados",
      description: "Saiba como protegemos suas informações de acordo com a LGPD. Seus dados de contato só são compartilhados com empresas após o seu consentimento.",
    },
    {
      id: "cancelamento",
      icon: "⚡",
      title: "Cancelamento",
      description: "Políticas de exclusão de conta e remoção de dados do banco de talentos. Você tem controle total e pode sair da plataforma a qualquer momento.",
    },
    {
      id: "suporte",
      icon: "💬",
      title: "Suporte e Dúvidas",
      description: "Como entrar em contato conosco para resolver problemas técnicos, reportar vagas abusivas ou solicitar esclarecimentos sobre termos.",
    }
  ];

  return (
    <div style={{ padding: "40px 0" }}>
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <h1 style={{ fontSize: "3rem", color: "var(--foreground)", marginBottom: "16px", textShadow: "0 0 20px rgba(255, 46, 138, 0.2)" }}>
          Termos e Condições
        </h1>
        <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto", lineHeight: 1.6 }}>
          Transparência é o nosso principal valor. Escolha um dos tópicos abaixo para entender melhor 
          como garantimos a segurança e os direitos de todos na VagasApp.
        </p>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "24px",
        marginBottom: "60px"
      }}>
        {cards.map(card => (
          <div key={card.id} style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: "20px",
            padding: "30px",
            backdropFilter: "blur(12px)",
            transition: "all 0.3s ease",
            position: "relative",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            boxShadow: "0 0 20px rgba(0,0,0,0.5)"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-4px)";
            e.currentTarget.style.borderColor = "rgba(255, 46, 138, 0.3)";
            e.currentTarget.style.boxShadow = "var(--shadow-violet)";
            const glow = e.currentTarget.querySelector('.card-glow') as HTMLElement;
            if (glow) glow.style.opacity = "1";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "none";
            e.currentTarget.style.borderColor = "var(--border)";
            e.currentTarget.style.boxShadow = "0 0 20px rgba(0,0,0,0.5)";
            const glow = e.currentTarget.querySelector('.card-glow') as HTMLElement;
            if (glow) glow.style.opacity = "0";
          }}>
            
            <div className="card-glow" style={{
              position: "absolute",
              top: "-50px", right: "-50px",
              width: "150px", height: "150px",
              background: "radial-gradient(circle, rgba(139, 47, 214, 0.2), transparent 70%)",
              opacity: 0,
              transition: "opacity 0.3s ease",
              pointerEvents: "none",
              borderRadius: "50%"
            }} />

            <div style={{ 
              fontSize: "2rem", 
              marginBottom: "20px",
              background: "rgba(255,255,255,0.05)",
              width: "60px", height: "60px",
              borderRadius: "16px",
              display: "grid", placeItems: "center",
              border: "1px solid rgba(255,255,255,0.1)"
            }}>
              {card.icon}
            </div>
            
            <h2 style={{ fontFamily: "'Clash Display', sans-serif", fontSize: "1.4rem", marginBottom: "12px", color: "var(--foreground)" }}>
              {card.title}
            </h2>
            
            <p style={{ color: "var(--text-muted)", lineHeight: 1.6, marginBottom: "30px", flex: 1 }}>
              {card.description}
            </p>
            
            <Link href={`#${card.id}`} style={{
              display: "inline-flex",
              alignItems: "center",
              color: "var(--pink-light)",
              fontFamily: "'Satoshi', sans-serif",
              fontWeight: 600,
              fontSize: "0.95rem",
              marginTop: "auto",
              gap: "6px"
            }}>
              Ler detalhes completos <span>→</span>
            </Link>
          </div>
        ))}
      </div>

      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "16px",
        flexWrap: "wrap",
        paddingTop: "20px",
        borderTop: "1px solid var(--border)"
      }}>
        {["🔒 Ambiente 100% Seguro", "🛡️ Compatível com LGPD", "⚙️ Servidores Criptografados", "🌐 Acesso Global"].map(badge => (
          <div key={badge} style={{
            background: "rgba(0,0,0,0.4)",
            border: "1px solid rgba(255,255,255,0.05)",
            padding: "8px 16px",
            borderRadius: "999px",
            fontSize: "0.85rem",
            color: "var(--text-muted)",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            boxShadow: "inset 0 0 10px rgba(0,0,0,0.5)"
          }}>
            {badge}
          </div>
        ))}
      </div>
    </div>
  );
}