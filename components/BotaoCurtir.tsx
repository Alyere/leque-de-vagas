"use client";

export default function BotaoCurtir() {
    let curtido = false;

    return (
        <button
            type="button"
            onClick={() => {
                curtido = !curtido;
            }
            }
        >
            {curtido ? "Descurtir" : "Curtir"}
        </button>
    );
}