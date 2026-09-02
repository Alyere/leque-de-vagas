import Link from "next/link";
import { Vaga } from "@/data/vagas";

type CardDeVagaProps = {
  vaga: Vaga;
};

export default function CardDeVaga({ vaga }: CardDeVagaProps) {
  return (
    <article className="border border-neutral-200 p-5 rounded-lg bg-white shadow-sm hover:shadow transition-shadow flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between gap-2 mb-2">
          <span className="text-xs font-semibold px-2 py-1 rounded bg-neutral-100 text-neutral-700">
            {vaga.area}
          </span>
          <span className="text-xs px-2 py-1 rounded bg-neutral-100 text-neutral-600">
            {vaga.senioridade}
          </span>
        </div>

        <h3 className="text-lg font-bold text-neutral-900 mb-1">
          {vaga.titulo}
        </h3>

        <p className="text-sm font-medium text-neutral-600 mb-3">
          {vaga.empresa} · {vaga.local}
        </p>

        {vaga.aceitaIniciante && (
          <span className="inline-block text-xs bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded mb-3">
            Aceita iniciantes
          </span>
        )}
      </div>

      <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between">
        <Link
          href={`/vagas/${vaga.id}`}
          className="text-sm font-semibold text-blue-600 hover:text-blue-800"
        >
          Ver detalhes →
        </Link>
      </div>
    </article>
  );
}