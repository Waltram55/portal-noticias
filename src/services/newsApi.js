const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

// GNews topics válidos:
// world, nation, business, technology, sports, health, science, entertainment

export async function getNewsByCategory(category = "nation") {
  const url = `https://gnews.io/api/v4/top-headlines?country=ar&lang=es&topic=${category}&max=12&token=${API_KEY}`;

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Error cargando noticias");
  }

  const data = await res.json();

  return data.articles;
}
