export default function FeaturedNews({ article }) {
  if (!article) return null

  return (
    <section className="w-full rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur shadow-xl">
      <div className="grid md:grid-cols-2">

        {/* Imagen */}
        <div className="relative h-64 md:h-full">
          {article.image ? (
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover opacity-80"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-emerald-900/40 to-zinc-950" />
          )}

          {/* overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/70 to-transparent" />
        </div>

        {/* Texto */}
        <div className="p-8 flex flex-col justify-center">
          <p className="text-emerald-400 font-semibold text-sm tracking-wide uppercase">
            Destacado
          </p>

          <h2 className="text-2xl md:text-3xl font-extrabold mt-2 leading-tight">
            {article.title}
          </h2>

          <p className="text-white/70 mt-4 text-sm md:text-base line-clamp-4">
            {article.description || "Sin descripción disponible."}
          </p>

          <div className="mt-6 flex gap-4 items-center">
            <a
              href={article.url}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 transition font-bold text-sm text-black"
            >
              Leer noticia →
            </a>

            <span className="text-white/40 text-xs">
              {article.source?.name || "Fuente"}
            </span>
          </div>
        </div>

      </div>
    </section>
  )
}
