"use client";

const BLADE_COUNT = 17;
const ANGLE_STEP = 10; // graus entre lâminas
const BASE_HEIGHT = 460;
const HEIGHT_STEP = 20;
const BASE_DELAY = 0.05;
const DELAY_STEP = 0.05;

function generateLaminas() {
  const half = Math.floor(BLADE_COUNT / 2);

  return Array.from({ length: BLADE_COUNT }, (_, i) => {
    const distFromCenter = Math.abs(i - half);
    const angle = (i - half) * ANGLE_STEP;
    const height = BASE_HEIGHT + (half - distFromCenter) * HEIGHT_STEP;
    const delay = BASE_DELAY + (half - distFromCenter) * DELAY_STEP;

    return {
      angle,
      height,
      delay: `${delay.toFixed(2)}s`,
    };
  });
}

const laminas = generateLaminas();

type BladeStyle = React.CSSProperties & { "--angle": string };

function bladeStyle(height: number, angle: number, delay: string): BladeStyle {
  return {
    height: `${height}px`,
    width: "76px",
    marginLeft: "-38px",
    "--angle": `${angle}deg`,
    animationDelay: delay,
  };
}

export default function LequeBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      {/* Glow geral */}
      <div className="absolute left-1/2 top-[18%] h-125 w-175 -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(255,46,138,0.16),transparent_70%)] blur-[80px]" />

      {/* Leque */}
      <div className="absolute left-1/2 top-[8%] h-150 w-150 -translate-x-1/2">
        {laminas.map((lamina, index) => (
          <div
            key={index}
            className="fan-blade absolute bottom-0 left-1/2 origin-bottom"
            style={bladeStyle(lamina.height, lamina.angle, lamina.delay)}
          >
            <div className="h-full w-full rounded-t-[45px] border border-[rgba(255,110,199,0.35)] bg-linear-to-b from-[rgba(255,46,138,0.42)] via-[rgba(184,28,98,0.28)] to-[rgba(139,47,214,0.12)] shadow-[0_0_25px_rgba(255,46,138,0.12)] backdrop-blur-[2px]" />

            {/* Detalhe interno da lâmina */}
            <div className="absolute left-1/2 top-5 h-[90%] w-px -translate-x-1/2 bg-linear-to-b from-[rgba(255,110,199,0.5)] to-transparent" />
          </div>
        ))}

        {/* Base do leque */}
        <div className="absolute -bottom-4.5 left-1/2 h-10.5 w-25 -translate-x-1/2 rounded-full border border-[rgba(255,110,199,0.5)] bg-linear-to-r from-(--pink-dark) via-(--pink) to-(--pink-dark) shadow-[0_0_30px_rgba(255,46,138,0.35)]" />
      </div>

      {/* Glow inferior */}
      <div className="absolute bottom-[5%] left-1/2 h-45 w-125 -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(139,47,214,0.16),transparent_70%)] blur-[60px]" />

      <style jsx>{`
        .fan-blade {
          animation: openFan 1.8s cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        @keyframes openFan {
          0% {
            transform: rotate(0deg) scaleY(0.2);
            opacity: 0;
          }
          30% {
            opacity: 0.5;
          }
          100% {
            transform: rotate(var(--angle)) scaleY(1);
            opacity: 1;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .fan-blade {
            animation: none;
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}