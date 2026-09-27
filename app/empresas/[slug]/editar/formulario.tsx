"use client";

import { useActionState } from "react";
import BotaoDeEnviar from "@/components/BotaoDeEnviar";
import type { Empresa } from "@/lib/tipos";
import { salvarEmpresa, type EstadoDaEmpresa } from "./acoes";

type FormularioEditarEmpresaProps = {
  empresa: Empresa;
};

export default function FormularioEditarEmpresa({
  empresa,
}: FormularioEditarEmpresaProps) {
  const estadoInicial: EstadoDaEmpresa = {
    ok: false,
    mensagem: "",
    erros: {},
    valores: {
      nome: empresa.nome,
      sobre: empresa.sobre,
      site: empresa.site,
    },
  };
  const [estado, acaoDoForm] = useActionState(salvarEmpresa, estadoInicial);

  return (
    <form action={acaoDoForm} className="vaga-form" noValidate>
      <input type="hidden" name="slug" defaultValue={empresa.slug} />

      <div className="vaga-field">
        <label htmlFor="nome">Nome</label>
        <input
          id="nome"
          name="nome"
          defaultValue={estado.valores.nome}
          autoComplete="organization"
        />
        {estado.erros.nome ? <p className="vaga-erro">{estado.erros.nome}</p> : null}
      </div>

      <div className="vaga-field">
        <label htmlFor="sobre">Sobre</label>
        <textarea
          id="sobre"
          name="sobre"
          rows={6}
          defaultValue={estado.valores.sobre}
        />
        {estado.erros.sobre ? <p className="vaga-erro">{estado.erros.sobre}</p> : null}
      </div>

      <div className="vaga-field">
        <label htmlFor="site">Site</label>
        <input
          id="site"
          name="site"
          type="url"
          defaultValue={estado.valores.site}
          placeholder="https://empresa.com"
          autoComplete="url"
        />
        {estado.erros.site ? <p className="vaga-erro">{estado.erros.site}</p> : null}
      </div>

      {estado.erros.geral ? <p className="vaga-erro">{estado.erros.geral}</p> : null}
      {estado.ok ? (
        <p className="empresa-sucesso" role="status" aria-live="polite">
          {estado.mensagem}
        </p>
      ) : null}
      <BotaoDeEnviar>Salvar perfil</BotaoDeEnviar>
    </form>
  );
}