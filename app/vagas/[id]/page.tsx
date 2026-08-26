import { notFound } from "next/navigation";

type Vaga = {
  id: string;
  titulo: string;
};

const vagas: Vaga[] = [
  { id: "1", titulo: "Desenvolvedor Front-end Júnior" },
  { id: "2", titulo: "Desenvolvedor Back-end Júnior" },
  { id: "3", titulo: "Estágio em Desenvolvimento" },
];

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function DetalheVaga({ params }: PageProps) {
  const { id } = await params;

  const vaga = vagas.find((vaga) => vaga.id === id);

  if (!vaga) {
    notFound();
  }

  return (
    <main>
      <h1>{vaga.titulo}</h1>
      <p>ID da vaga: {vaga.id}</p>
    </main>
  );
}