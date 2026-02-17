import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { getWeatherByCity } from "./services/weatherApi";

export default function App() {
  const [weather, setWeather] = useState(null);
  const [category, setCategory] = useState("nation");

  useEffect(() => {
    async function loadWeather() {
      try {
        const data = await getWeatherByCity("Corrientes");
        setWeather(data);
      } catch (error) {
        console.log("Error cargando clima:", error);
      }
    }

    loadWeather();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar
        weather={weather}
        category={category}
        setCategory={setCategory}
      />

      <Home category={category} />
    </div>
  );
}
