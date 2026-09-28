import { z } from "zod";

export const EsquemaDaVaga = z.object({
  titulo: z
    .string({ error: "Informe um título válido." })
    .trim()
    .min(5, "O título precisa ter pelo menos 5 caracteres."),
  empresaSlug: z
    .string({ error: "Selecione uma empresa válida." })
    .min(1, "Selecione uma empresa."),
  area: z
    .string({ error: "Informe uma área válida." })
    .trim()
    .min(1, "Informe a área da vaga."),
  senioridade: z
    .string({ error: "Informe uma senioridade válida." })
    .trim()
    .min(1, "Informe a senioridade da vaga."),
  local: z
    .string({ error: "Informe um local válido." })
    .trim()
    .min(1, "Informe o local da vaga."),
  aceitaIniciante: z
    .literal("on", { error: "Opção de iniciante inválida." })
    .optional()
    .transform((valor) => valor === "on"),
  descricao: z
    .string({ error: "Informe uma descrição válida." })
    .trim()
    .min(20, "A descrição precisa ter pelo menos 20 caracteres."),
});

export const EsquemaDaEmpresa = z.object({
  nome: z
    .string({ error: "Informe um nome válido para a empresa." })
    .trim()
    .min(2, "O nome precisa ter pelo menos 2 caracteres.")
    .max(80, "O nome não pode passar de 80 caracteres."),
  sobre: z
    .string({ error: "Informe uma descrição válida para a empresa." })
    .trim()
    .min(20, "A apresentação precisa ter pelo menos 20 caracteres.")
    .max(500, "A apresentação não pode passar de 500 caracteres."),
  site: z
    .string({ error: "Informe um endereço de site válido." })
    .trim()
    .min(1, "Informe o site da empresa.")
    .url("Informe uma URL válida, incluindo https://."),
});

export const EsquemaDaCandidatura = z.object({
  nome: z
    .string({ error: "Informe seu nome." })
    .trim()
    .min(1, "Informe seu nome."),
  email: z
    .string({ error: "Informe seu e-mail." })
    .trim()
    .min(1, "Informe seu e-mail.")
    .refine(
      (email) => email.includes("@") && email.includes("."),
      "Isso não parece um e-mail.",
    ),
  habilidades: z
    .string({ error: "Informe pelo menos uma habilidade." })
    .transform((valor) => valor.split(/\r?\n/).map((item) => item.trim()).filter(Boolean))
    .refine(
      (habilidades) => habilidades.length > 0,
      "Adicione pelo menos uma habilidade.",
    )
    .refine(
      (habilidades) => new Set(habilidades).size === habilidades.length,
      "Remova as habilidades repetidas.",
    ),
});