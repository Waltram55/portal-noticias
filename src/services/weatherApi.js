const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export async function getWeatherByCity(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},AR&appid=${API_KEY}&units=metric&lang=es`;

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Error clima");
  }

  const data = await res.json();

  return {
    temp: Math.round(data.main.temp),
    description: data.weather[0].description,
    icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`,
  };
}
