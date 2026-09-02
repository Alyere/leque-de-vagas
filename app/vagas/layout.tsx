import type { Metadata } from "next";
import { empresas } from "@/data/empresa";
import { vagas } from "@/data/vagas";
import Cabecalho from "@/components/Cabecalho";
import AbasDaEmpresa from "@/components/AbasDaEmpresa";
import "@/app/globals.css"

export const metadata: Metadata = {
  title: "Layout da página de vagas",
  description: "Projeto da aula 01 de Introdução ao Next.js",
};

export default function VagasLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main>{children}</main>
    </>
  );
}