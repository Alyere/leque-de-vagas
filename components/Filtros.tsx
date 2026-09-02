type FiltrosProps = {
  busca: string;
  aoMudarBusca: (valor: string) => void;
  area: string;
  aoMudarArea: (valor: string) => void;
  areas: string[];
};

export default function Filtros({
  busca,
  aoMudarBusca,
  area,
  aoMudarArea,
  areas,
}: FiltrosProps) {
  return (
    <div>
      <input
        type="text"
        placeholder="Buscar vaga ou empresa"
        value={busca}
        onChange={(evento) => aoMudarBusca(evento.target.value)}
      />

      <div>
        {areas.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => aoMudarArea(item)}
            className={area === item ? "active" : ""}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}