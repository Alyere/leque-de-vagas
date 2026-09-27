"use server";

import { revalidatePath } from "next/cache";
import { arquivarVaga } from "@/lib/api";

export async function arquivar(dados: FormData): Promise<void> {
  const id = String(dados.get("id") ?? "");

  if (!id) {
    return;
  }

  arquivarVaga(id);
  revalidatePath("/vagas");
}