import WeatherCard from "./WeatherCard";

export default function Navbar({ weather, category, setCategory }) {
  const categorias = [
    { nombre: "Argentina", valor: "nation" },
    { nombre: "Tecnología", valor: "technology" },
    { nombre: "Economía", valor: "business" },
    { nombre: "Deportes", valor: "sports" },
    { nombre: "Salud", valor: "health" },
    { nombre: "Mundo", valor: "world" },
  ];

  return (
    <header className="bg-emerald-950/40 border-b border-white/10 backdrop-blur-md sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between gap-6">
        {/* LOGO */}
        <h1
          onClick={() => setCategory("nation")}
          className="text-white font-extrabold text-xl cursor-pointer shrink-0"
        >
          Portal <span className="text-emerald-400">ARG</span>
        </h1>

        {/* CATEGORIAS PC */}
        <ul className="hidden md:flex justify-center gap-6 text-white/80 font-medium">
          {categorias.map((cat) => (
            <li
              key={cat.valor}
              onClick={() => setCategory(cat.valor)}
              className={`cursor-pointer hover:text-emerald-400 transition ${
                category === cat.valor ? "text-emerald-400" : ""
              }`}
            >
              {cat.nombre}
            </li>
          ))}
        </ul>

        {/* DERECHA */}
        <div className="flex items-center gap-4">
          {/* CLIMA */}
          {weather && <WeatherCard weather={weather} />}

          {/* BUSCADOR */}
          <input
            type="text"
            placeholder="Buscar noticia..."
            className="bg-black/30 border border-white/10 text-white placeholder:text-white/40 rounded-xl px-4 py-2 w-56 md:w-64 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />
        </div>
      </nav>

      {/* CATEGORIAS MOBILE */}
      <div className="md:hidden px-4 pb-4 flex gap-3 overflow-x-auto text-white/80">
        {categorias.map((cat) => (
          <button
            key={cat.valor}
            onClick={() => setCategory(cat.valor)}
            className={`px-4 py-2 rounded-xl text-sm border border-white/10 backdrop-blur-md transition whitespace-nowrap
              ${
                category === cat.valor
                  ? "bg-emerald-500/20 text-emerald-300 border-emerald-400/30"
                  : "bg-white/5 hover:bg-white/10"
              }
            `}
          >
            {cat.nombre}
          </button>
        ))}
      </div>
    </header>
  );
}
