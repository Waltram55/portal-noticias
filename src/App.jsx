import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { getWeatherByCity } from "./services/weatherApi";
import Footer from "./components/Footer";
import { useSearch } from "./context/SearchContext";

export default function App() {
  const [weather, setWeather] = useState(null);
  const [category, setCategory] = useState("nation");
  const { search } = useSearch();

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
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navbar
        weather={weather}
        category={category}
        setCategory={setCategory}
      />

      <main className="flex-1">
        <Home category={category} search={search} />
      </main>

      <Footer />
    </div>
  );
}
