export type Vaga = {
  id: string;
  titulo: string;
  empresa: string;
  empresaSlug: string;
  area: string;
  senioridade: string;
  local: string;
  aceitaIniciante: boolean;
  descricao: string;
};

export const vagas: Vaga[] = [
  {
    id: "1",
    titulo: "Pessoa Desenvolvedora Front-end Júnior",
    empresa: "Aurora Tech",
    empresaSlug: "aurora-tech",
    area: "Front-end",
    senioridade: "Júnior",
    local: "Remoto",
    aceitaIniciante: true,
    descricao:
      "Você vai trabalhar com React e Next.js num time de produto que já " +
      "está no ar, pareando com pessoas mais experientes nas primeiras semanas " +
      "e assumindo telas inteiras depois. O dia a dia envolve ler código, " +
      "abrir pull requests pequenos e conversar com quem desenha o produto.",
  },

  {
    id: "2",
    titulo: "Analista de Dados Júnior",
    empresa: "Aurora Tech",
    empresaSlug: "aurora-tech",
    area: "Dados",
    senioridade: "Júnior",
    local: "Híbrido · Recife",
    aceitaIniciante: true,
    descricao:
      "Você vai trabalhar com SQL, organização de dados e construção de " +
      "relatórios para diferentes áreas da empresa. Também vai ajudar a " +
      "transformar perguntas de negócio em análises e visualizações úteis. " +
      "Conhecimento de Python é bem-vindo, mas não é obrigatório.",
  },

  {
    id: "3",
    titulo: "Pessoa Desenvolvedora Mobile Pleno",
    empresa: "Nuvem Rosa",
    empresaSlug: "nuvem-rosa",
    area: "Mobile",
    senioridade: "Pleno",
    local: "Presencial · Olinda",
    aceitaIniciante: false,
    descricao:
      "Você vai trabalhar na evolução do aplicativo da Nuvem Rosa para " +
      "Android e iOS. A equipe utiliza React Native com Expo, testes " +
      "automatizados e uma esteira de publicação. Procuramos alguém que " +
      "já tenha experiência com desenvolvimento e publicação de aplicativos.",
  },

  {
    id: "4",
    titulo: "Pessoa Desenvolvedora Back-end Júnior",
    empresa: "Nuvem Rosa",
    empresaSlug: "nuvem-rosa",
    area: "Back-end",
    senioridade: "Júnior",
    local: "Remoto",
    aceitaIniciante: true,
    descricao:
      "Você vai ajudar a desenvolver e manter as APIs que alimentam o " +
      "aplicativo e os sistemas internos da empresa. A stack utiliza " +
      "Node.js, TypeScript e PostgreSQL. A rotina envolve criação de " +
      "endpoints, testes e investigação de problemas.",
  },

  {
    id: "5",
    titulo: "Pessoa Analista de UX Júnior",
    empresa: "Ponto Vivo",
    empresaSlug: "ponto-vivo",
    area: "UX/UI",
    senioridade: "Júnior",
    local: "Híbrido · João Pessoa",
    aceitaIniciante: true,
    descricao:
      "Você vai participar de pesquisas com usuários, organizar descobertas " +
      "e ajudar a transformar problemas reais em soluções de interface. " +
      "Também vai trabalhar junto com designers e desenvolvedores durante " +
      "a criação e evolução dos produtos.",
  },

  {
    id: "6",
    titulo: "Engenheira de Software Pleno",
    empresa: "Aurora Tech",
    empresaSlug: "aurora-tech",
    area: "Back-end",
    senioridade: "Pleno",
    local: "Remoto",
    aceitaIniciante: false,
    descricao:
      "Você vai participar do desenvolvimento de funcionalidades do início " +
      "ao fim, desde a discussão do problema até a implementação e o " +
      "acompanhamento após o deploy. A equipe trabalha principalmente com " +
      "TypeScript, Node.js, PostgreSQL e serviços em nuvem.",
  },
  {
    id: "",
    titulo: "Engenheiro de Software Pleno",
    empresa: "Ponte Digital",
    empresaSlug: "ponte-digital",
    area: "Back-end",
    senioridade: "Pleno",
    local: "Remoto",
    aceitaIniciante: false,
    descricao:
      "Você vai participar do desenvolvimento de funcionalidades do início " +
      "ao fim, desde a discussão do problema até a implementação e o " +
      "acompanhamento após o deploy. A equipe trabalha principalmente com " +
      "TypeScript, Node.js, PostgreSQL e serviços em nuvem.",
  },
];