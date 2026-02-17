// categories válidas:
// world, nation, business, technology, sports, health, science, entertainment

export async function getNewsByCategory(category = "nation") {
  const res = await fetch(`/api/news?topic=${category}`);

  if (!res.ok) {
    throw new Error("Error cargando noticias");
  }

  const data = await res.json();

  return data.articles || [];
}
