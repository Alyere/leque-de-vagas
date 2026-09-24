import Link from "next/link";
import type { Vaga } from "@/lib/tipos";

type CardDeVagaProps = {
  vaga: Vaga;
};

export default function CardDeVaga({ vaga }: CardDeVagaProps) {
  return (
    <article className="flex flex-col justify-between rounded-lg border border-neutral-200 bg-white p-5 shadow-sm transition-shadow hover:shadow">
      <div>
        {/* Área e senioridade */}
        <div className="mb-2 flex items-center justify-between gap-2">
          <span className="rounded bg-neutral-100 px-2 py-1 text-xs font-semibold text-neutral-700">
            {vaga.area}
          </span>

          <span className="rounded bg-neutral-100 px-2 py-1 text-xs text-neutral-600">
            {vaga.senioridade}
          </span>
        </div>

        {/* Título */}
        <h3 className="mb-1 text-lg font-bold text-neutral-900">
          {vaga.titulo}
        </h3>

        {/* Empresa e localização */}
        <p className="mb-3 text-sm font-medium text-neutral-600">
          {vaga.empresa} · {vaga.local}
        </p>

        {/* Aceita iniciantes */}
        {vaga.aceitaIniciante && (
          <span className="mb-3 inline-block rounded border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-xs text-emerald-700">
            Aceita iniciantes
          </span>
        )}
      </div>

      {/* Link */}
      <div className="mt-4 flex items-center justify-between border-t border-neutral-100 pt-3">
        <Link
          href={`/vagas/${vaga.id}`}
          className="text-sm font-semibold text-blue-600 transition-colors hover:text-blue-800"
        >
          Ver detalhes →
        </Link>
      </div>
    </article>
  );
}