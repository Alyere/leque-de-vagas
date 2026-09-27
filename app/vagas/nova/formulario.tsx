"use client";

import { useActionState } from "react";
import BotaoDeEnviar from "@/components/BotaoDeEnviar";
import type { Empresa } from "@/lib/tipos";
import { criarVaga, type EstadoDaVaga } from "./acoes";

const INICIAL: EstadoDaVaga = { ok: false, erros: {}, valores: {} };

type FormularioNovaVagaProps = {
  empresas: Empresa[];
};

export default function FormularioNovaVaga({ empresas }: FormularioNovaVagaProps) {
  const [estado, acaoDoForm] = useActionState(criarVaga, INICIAL);

  return (
    <form action={acaoDoForm} className="vaga-form" noValidate>
      <div className="vaga-field">
        <label htmlFor="titulo">Título</label>
        <input
          id="titulo"
          name="titulo"
          defaultValue={String(estado.valores.titulo ?? "")}
          placeholder="Ex.: Product Designer"
        />
        {estado.erros?.titulo ? <p className="vaga-erro">{estado.erros.titulo}</p> : null}
      </div>

      <div className="vaga-field">
        <label htmlFor="empresaSlug">Empresa</label>
        <select
          id="empresaSlug"
          name="empresaSlug"
          defaultValue={String(estado.valores.empresaSlug ?? "")}
        >
          <option value="">Selecione uma empresa</option>
          {empresas.map((empresa) => (
            <option key={empresa.slug} value={empresa.slug}>
              {empresa.nome}
            </option>
          ))}
        </select>
        {estado.erros?.empresaSlug ? <p className="vaga-erro">{estado.erros.empresaSlug}</p> : null}
      </div>

      <div className="vaga-field">
        <label htmlFor="area">Área</label>
        <input
          id="area"
          name="area"
          defaultValue={String(estado.valores.area ?? "")}
          placeholder="Ex.: Produto"
        />
        {estado.erros?.area ? <p className="vaga-erro">{estado.erros.area}</p> : null}
      </div>

      <div className="vaga-field">
        <label htmlFor="senioridade">Senioridade</label>
        <input
          id="senioridade"
          name="senioridade"
          defaultValue={String(estado.valores.senioridade ?? "")}
          placeholder="Ex.: Pleno"
        />
        {estado.erros?.senioridade ? <p className="vaga-erro">{estado.erros.senioridade}</p> : null}
      </div>

      <div className="vaga-field">
        <label htmlFor="local">Local</label>
        <input
          id="local"
          name="local"
          defaultValue={String(estado.valores.local ?? "")}
          placeholder="Ex.: São Paulo, SP"
        />
        {estado.erros?.local ? <p className="vaga-erro">{estado.erros.local}</p> : null}
      </div>

      <div className="vaga-field checkbox-field">
        <label htmlFor="aceitaIniciante">
          <input
            id="aceitaIniciante"
            name="aceitaIniciante"
            type="checkbox"
            defaultChecked={Boolean(estado.valores.aceitaIniciante)}
          />
          Aceita iniciante
        </label>
      </div>

      <div className="vaga-field">
        <label htmlFor="descricao">Descrição</label>
        <textarea
          id="descricao"
          name="descricao"
          rows={6}
          defaultValue={String(estado.valores.descricao ?? "")}
          placeholder="Descreva as responsabilidades e os requisitos da vaga."
        />
        {estado.erros?.descricao ? <p className="vaga-erro">{estado.erros.descricao}</p> : null}
      </div>

      {estado.erros?.geral ? <p className="vaga-erro">{estado.erros.geral}</p> : null}
      <BotaoDeEnviar>Publicar</BotaoDeEnviar>
    </form>
  );
}