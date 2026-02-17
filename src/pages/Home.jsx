import { useEffect, useState } from "react";
import { getNewsByCategory } from "../services/newsApi";
import FeaturedNews from "../components/FeaturedNews";
import NewsCard from "../components/NewsCard";
import NewsSkeleton from "../components/NewsSkeleton";

export default function Home({ category }) {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadNews() {
      try {
        setLoading(true);
        setError(null);

        const data = await getNewsByCategory(category);
        setNews(data);
      } catch (err) {
        setError("No se pudieron cargar las noticias.");
      } finally {
        setLoading(false);
      }
    }

    loadNews();
  }, [category]);

  const destacado = news[0];
  const restantes = news.slice(1);

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-4xl md:text-5xl font-extrabold">
        Últimas <span className="text-emerald-400">Noticias</span>
      </h1>

      <p className="mt-4 text-white/70 max-w-2xl">
        Noticias Argentinas en tiempo real con diseño dark moderno y estilo pro.
      </p>

      {loading && <NewsSkeleton />}

      {error && (
        <p className="mt-10 text-red-400 font-semibold">{error}</p>
      )}

      {!loading && !error && news.length > 0 && (
        <>
          <div className="mt-10">
            <FeaturedNews article={destacado} />
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {restantes.map((item, index) => (
              <NewsCard key={index} article={item} />
            ))}
          </div>
        </>
      )}

      {!loading && !error && news.length === 0 && (
        <p className="mt-10 text-white/70">
          No se encontraron noticias para esta categoría.
        </p>
      )}
    </section>
  );
}
