// FRENTE 1 · o contrato da equipe. Este arquivo sai primeiro, sozinho,
// num commit só. As outras três frentes ficam paradas até ele existir.
export type Vaga = {
  // texto, não número: o que vem da URL é sempre texto
  id: string;
  titulo: string;
  empresa: string;
  // tem que existir em data/empresa.ts, escrito igualzinho
  empresaSlug: string;
  // Front-end · Back-end · Dados · Mobile · QA · Design
  area: string;
  // Estágio · Júnior · Pleno
  senioridade: string;
  // Remoto · Híbrido · Presencial + cidade
  local: string;
  aceitaIniciante: boolean;
  // no mínimo 300 caracteres: o "ver mais" precisa ter o que esconder
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
      "está no ar, pareando com gente mais experiente nas primeiras semanas " +
      "e assumindo telas inteiras depois. O dia a dia é ler o código dos " +
      "outros, abrir pull request pequeno e conversar com quem desenha. Não " +
      "exigimos experiência anterior em empresa: exigimos vontade de " +
      "aprender em público e de pedir ajuda antes de travar dois dias.",
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
      "O time de dados cuida dos painéis que a diretoria abre toda segunda " +
      "de manhã. Você vai escrever SQL, limpar planilha que chegou torta e " +
      "montar visualização que responde uma pergunta de negócio por vez. " +
      "Metade do trabalho é técnico; a outra metade é descobrir o que a " +
      "pessoa que pediu o relatório realmente queria saber. Python é " +
      "bem-vindo e não é obrigatório para se candidatar.",
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
      "O aplicativo da Nuvem Rosa está nas duas lojas e tem gente usando " +
      "todo dia, então a vaga é para quem já publicou app e sabe o que " +
      "acontece quando uma atualização quebra na mão de quem usa. A stack " +
      "é React Native com Expo, testes em Detox e uma esteira de release " +
      "que você vai ajudar a arrumar. Pedimos dois anos de experiência com " +
      "mobile porque hoje não há ninguém sênior no time para revisar.",
  },
  {
    id: "4",
    titulo: "Desenvolvedor(a) Back-end Júnior",
    empresa: "Ponto Vivo",
    empresaSlug: "ponto-vivo",
    area: "Back-end",
    senioridade: "Júnior",
    local: "Remoto",
    aceitaIniciante: true,
    descricao:
      "Atuação no desenvolvimento e manutenção de serviços em Node.js e bancos relacionais. " +
      "Você participará de cerimônias ágeis, aprenderá padrões de arquitetura em microsserviços " +
      "e ajudará na integração de novos endpoints para a equipe de produto e mobile.",
  },
  {
    id: "5",
    titulo: "Engenheiro(a) de Software Pleno",
    empresa: "Nuvem Rosa",
    empresaSlug: "nuvem-rosa",
    area: "Back-end",
    senioridade: "Pleno",
    local: "Híbrido · Olinda",
    aceitaIniciante: false,
    descricao:
      "Foco em estabilidade, monitoramento de logs e criação de APIs de alta concorrência. " +
      "Procuramos alguém com facilidade para propor soluções de banco de dados e conduzir code " +
      "reviews garantindo cobertura de testes e boas práticas de entrega contínua.",
  },
  {
    id: "6",
    titulo: "Estágio em Ciência de Dados",
    empresa: "Aurora Tech",
    empresaSlug: "aurora-tech",
    area: "Dados",
    senioridade: "Estágio",
    local: "Remoto",
    aceitaIniciante: true,
    descricao:
      "Oportunidade para quem deseja desenvolver consultas analíticas em SQL, automatizar " +
      "pipelines de extração e apoiar relatórios gerenciais. Terá mentoria direta com a liderança " +
      "técnica para evoluir na exploração e visualização consistente de métricas.",
  },
  {
    id: "7",
    titulo: "Analista de QA Júnior",
    empresa: "Ponte Digital",
    empresaSlug: "ponte-digital",
    area: "QA",
    senioridade: "Júnior",
    local: "Presencial · Recife",
    aceitaIniciante: true,
    descricao:
      "Apoio no planejamento de planos de testes manuais e introdução à automação de testes de " +
      "interface em aplicações web e mobile. Comunicação clara para mapear cenários de borda e " +
      "validar entregas antes de cada subida oficial para produção.",
  },
  {
    id: "8",
    titulo: "Product Designer Pleno",
    empresa: "Ponto Vivo",
    empresaSlug: "ponto-vivo",
    area: "Design",
    senioridade: "Pleno",
    local: "Remoto",
    aceitaIniciante: false,
    descricao:
      "Construção de fluxos de navegação, wireframes, protótipos navegáveis no Figma e evolução " +
      "do Design System em conjunto com o time de front-end. Condução de pesquisas com usuários " +
      "e refinamento de componentes com foco em acessibilidade e ergonomia.",
  },
  {
    id: "9",
    titulo: "Pessoa Desenvolvedora Front-end Pleno",
    empresa: "Código Norte",
    empresaSlug: "codigo-norte",
    area: "Front-end",
    senioridade: "Pleno",
    local: "Híbrido · Recife",
    aceitaIniciante: false,
    descricao:
      "Construção de aplicações ricas com TypeScript, Next.js e consumo de APIs REST/GraphQL. " +
      "Responsável por manter a consistência visual, otimização de performance no carregamento " +
      "de componentes e boas práticas de tipagem em todo o ecossistema da empresa.",
  },
  {
    id: "10",
    titulo: "Estágio em Desenvolvimento Front-end",
    empresa: "Ponte Digital",
    empresaSlug: "ponte-digital",
    area: "Front-end",
    senioridade: "Estágio",
    local: "Remoto",
    aceitaIniciante: true,
    descricao:
      "Vaga de entrada com foco em aprendizado contínuo com HTML, CSS modular e primeiros " +
      "passos em ecossistema React. Acompanhamento diário com desenvolvedores seniores para " +
      "evoluir na escrita de código limpo e resolução colaborativa de chamados.",
  },
  {
    id: "11",
    titulo: "Pessoa Desenvolvedora Mobile Júnior",
    empresa: "Código Norte",
    empresaSlug: "codigo-norte",
    area: "Mobile",
    senioridade: "Júnior",
    local: "Presencial · Recife",
    aceitaIniciante: true,
    descricao:
      "Apoio no desenvolvimento de telas em React Native, correção de bugs de interface e " +
      "consumo de serviços de autenticação. Ambiente ideal para quem já fez projetos práticos " +
      "e quer vivenciar o ciclo de desenvolvimento e publicação em ambiente corporativo.",
  },
  {
    id: "12",
    titulo: "Analista de QA Pleno",
    empresa: "Aurora Tech",
    empresaSlug: "aurora-tech",
    area: "QA",
    senioridade: "Pleno",
    local: "Remoto",
    aceitaIniciante: false,
    descricao:
      "Criação e execução de testes automatizados de integração, carga e regressão. " +
      "Atuação próxima aos desenvolvedores na pipeline de CI/CD para assegurar que novas " +
      "funcionalidades não introduzam quebras no fluxo crítico dos usuários finais.",
  },
];