import LequeBackground from "@/components/LequeBackground";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <LequeBackground />
      <div style={{ zIndex: 1, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "40px", padding: "20px 0" }}>
        {/* Hero Card */}
        <section style={{
          background: "linear-gradient(135deg, rgba(255, 46, 138, 0.15) 0%, rgba(139, 47, 214, 0.05) 100%)",
          border: "1px solid var(--border)",
          borderRadius: "24px",
          padding: "50px 40px",
          display: "flex",
          zIndex: 1,
          flexDirection: "column",
          justifyContent: "center",
          boxShadow: "var(--shadow-violet)",
          position: "relative",
          overflow: "hidden",
          isolation: "isolate"
        }}>
       

        {/* Glow overlay */}
        <div style={{
          position: "absolute",
          top: "-20%", left: "-20%",
          width: "60%", height: "60%",
          background: "radial-gradient(circle, rgba(255, 46, 138, 0.2), transparent 70%)",
          filter: "blur(40px)",
          pointerEvents: "none",
          zIndex: 0
        }} />
        

        <div style={{ position: "relative", zIndex: 1 }}>
          <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)", marginBottom: "20px", color: "var(--pink-light)", lineHeight: 1.1 }}>
            Acelere o seu<br />próximo passo.
          </h1>
          <p style={{ fontSize: "1.15rem", color: "var(--text-muted)", marginBottom: "35px", lineHeight: 1.6, maxWidth: "90%" }}>
            Conectamos talentos excepcionais às empresas mais inovadoras. 
            Navegue pelas melhores oportunidades de tecnologia e dê um upgrade na sua carreira hoje mesmo.
          </p>
          
          <Link href="/vagas" style={{
            alignSelf: "flex-start",
            background: "#140b17",
            border: "1px solid rgba(255, 46, 138, 0.4)",
            color: "var(--pink-light)",
            padding: "16px 32px",
            borderRadius: "999px",
            fontFamily: "'Satoshi', sans-serif",
            fontWeight: 600,
            fontSize: "1.05rem",
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            transition: "all 0.3s ease",
            boxShadow: "0 0 15px rgba(255, 46, 138, 0.15)"
          }} className="cta-button">
            Ver todas as vagas <span>→</span>
          </Link>
        </div>
      </section>

      {/* FAQ Accordion Area */}
      <section style={{ display: "flex", flexDirection: "column", gap: "16px", justifyContent: "center", zIndex: 1, padding: "20px 0" }}>
        <h2 style={{ fontSize: "1.8rem", marginBottom: "16px", color: "var(--foreground)" }}>Dúvidas Frequentes</h2>
        
        <details className="faq-item" style={faqStyle}>
          <summary style={faqSummaryStyle}>A plataforma é gratuita para candidatos?</summary>
          <div style={faqContentStyle}>
            Sim! Nosso compromisso é ajudar você a encontrar o emprego dos sonhos. 
            Candidatos têm acesso 100% gratuito a todas as vagas e funcionalidades de perfil.
          </div>
        </details>
        
        <details className="faq-item" style={faqStyle}>
          <summary style={faqSummaryStyle}>Como as empresas me encontram?</summary>
          <div style={faqContentStyle}>
            Seu perfil entra em nosso banco de talentos (pool) assim que você se candidata à primeira vaga. 
            Recrutadores podem buscar por habilidades e enviar convites diretos.
          </div>
        </details>

        <details className="faq-item" style={faqStyle}>
          <summary style={faqSummaryStyle}>Posso me candidatar para vagas remotas?</summary>
          <div style={faqContentStyle}>
            Com certeza. Mais de 60% das vagas listadas em nossa plataforma são remotas ou adotam modelo híbrido flexível. 
            Utilize os filtros no Mural de Vagas para refinar sua busca.
          </div>
        </details>
      </section>
      
    </div>
    </main>
  );
}

const faqStyle = {
  background: "var(--surface)",
  border: "1px solid var(--border)",
  borderRadius: "16px",
  padding: "4px",
  transition: "all 0.3s ease"
};

const faqSummaryStyle = {
  padding: "20px",
  fontSize: "1.1rem",
  fontWeight: 500,
  color: "var(--foreground)",
  cursor: "pointer",
  listStyle: "none",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
};

const faqContentStyle = {
  padding: "0 20px 20px 20px",
  color: "var(--text-muted)",
  lineHeight: 1.6
};