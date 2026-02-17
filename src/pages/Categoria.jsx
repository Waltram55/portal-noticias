import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getNewsByCategory } from "../services/newsApi"

export default function Categoria() {
  const { nombre } = useParams()

  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function loadNews() {
      try {
        setLoading(true)
        const data = await getNewsByCategory(nombre)
        setNews(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    loadNews()
  }, [nombre])

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-extrabold capitalize">
        Categoría: <span className="text-emerald-400">{nombre}</span>
      </h1>

      {loading && (
        <p className="mt-10 text-white/60">Cargando noticias...</p>
      )}

      {error && (
        <p className="mt-10 text-red-400 font-semibold">
          Error: {error}
        </p>
      )}

      {!loading && !error && (
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {news.map((item, index) => (
            <article
              key={index}
              className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur hover:bg-white/10 transition"
            >
              {item.image && (
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-40 object-cover rounded-xl mb-4"
                />
              )}

              <h2 className="text-lg font-bold leading-snug">
                {item.title}
              </h2>

              <p className="text-white/70 text-sm mt-2 line-clamp-3">
                {item.description || "Sin descripción disponible."}
              </p>

              <a
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-4 text-emerald-400 hover:text-emerald-300 text-sm font-semibold"
              >
                Leer más →
              </a>
            </article>
          ))}
        </div>
      )}
    </section>
  )
}
