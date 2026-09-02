import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Layout da página de vagas",
  description: "Projeto da aula 01 de Introdução ao Next.js",
};

export default function VagasLayout({ children }: { children: React.ReactNode }) {
  return <main>{children}</main>;
}