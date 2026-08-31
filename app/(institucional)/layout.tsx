import type { Metadata } from "next";
import Cabecalho from "@/components/Cabecalho";
import "../globals.css";

// vira <title> e <meta name="description"> sozinho
export const metadata: Metadata = {
  title: "Meu primeiro Next",
  description: "Projeto da aula 01 de Introdução ao Next.js",
};

// app/(institucional)/layout.tsx
export default function InstitucionalLayout({ children }: { children: React.ReactNode }) {
  return <div style={{ maxWidth: 640, margin: "0 auto" }}>{children}</div>;
}