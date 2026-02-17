export default function NewsCard({ article }) {
  return (
    <article className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur hover:bg-white/10 transition">
      {article.image && (
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-40 object-cover rounded-xl mb-4"
        />
      )}

      <h2 className="text-lg font-bold leading-snug line-clamp-2">
        {article.title}
      </h2>

      <p className="text-white/70 text-sm mt-2 line-clamp-3">
        {article.description || "Sin descripción disponible."}
      </p>

      <a
        href={article.url}
        target="_blank"
        rel="noreferrer"
        className="inline-block mt-4 text-emerald-400 hover:text-emerald-300 text-sm font-semibold"
      >
        Leer más →
      </a>
    </article>
  )
}
