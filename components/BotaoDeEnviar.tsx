"use client";

import { useFormStatus } from "react-dom";
import type { ReactNode } from "react";

type BotaoDeEnviarProps = {
  children: ReactNode;
  pendingText?: string;
  className?: string;
};

export default function BotaoDeEnviar({
  children,
  pendingText = "Enviando...",
  className = "vaga-submit",
}: BotaoDeEnviarProps) {
  const { pending } = useFormStatus();

  return (
    <button type="submit" className={className} disabled={pending}>
      {pending ? pendingText : children}
    </button>
  );
}