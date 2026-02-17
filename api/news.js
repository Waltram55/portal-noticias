export default async function handler(req, res) {
  const { topic = "nation" } = req.query;

  const token = process.env.GNEWS_API_KEY;

  if (!token) {
    return res.status(500).json({ error: "Falta GNEWS_API_KEY en Vercel" });
  }

  const url = `https://gnews.io/api/v4/top-headlines?country=ar&lang=es&topic=${topic}&max=12&token=${token}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: "Error consultando GNews" });
  }
}
