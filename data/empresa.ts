export type Empresa = {
  slug: string;
  nome: string;
  sobre: string;
  site: string;
};

export const empresas: Empresa[] = [
  {
    slug: "aurora-tech",
    nome: "Aurora Tech",
    sobre:
      "Empresa de tecnologia que desenvolve produtos digitais para " +
      "pequenas e médias empresas. O time trabalha com desenvolvimento " +
      "web, dados e automação de processos.",
    site: "https://auroratech.com.br",
  },

  {
    slug: "nuvem-rosa",
    nome: "Nuvem Rosa",
    sobre:
      "Empresa de tecnologia especializada em aplicativos mobile e " +
      "experiências digitais. Atua no desenvolvimento de produtos " +
      "para serviços e plataformas de consumo.",
    site: "https://nuvemrosa.com.br",
  },

  {
    slug: "ponto-vivo",
    nome: "Ponto Vivo",
    sobre:
      "Startup focada em soluções digitais para melhorar a experiência " +
      "de clientes e equipes. O produto combina pesquisa, tecnologia " +
      "e análise de dados.",
    site: "https://pontovivo.com.br",
  },

  {
    slug: "ponte-digital",
    nome: "Ponte Digital",
    sobre:
      "Empresa de software que cria ferramentas para gestão e comunicação " +
      "de equipes. O foco está em produtos simples, acessíveis e fáceis " +
      "de integrar ao dia a dia das empresas.",
    site: "https://pontedigital.com.br",
  },

  {
    slug: "codigo-norte",
    nome: "Código Norte",
    sobre:
      "Empresa de desenvolvimento de software que trabalha com sistemas " +
      "web, APIs e soluções em nuvem para negócios de diferentes setores.",
    site: "https://codigonorte.com.br",
  },
];