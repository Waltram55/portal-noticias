export default function WeatherCard({ weather }) {
  if (!weather) return null;

  return (
    <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md shadow-md">
      <img
        src={weather.icon}
        alt={weather.description}
        className="w-7 h-7"
      />

      <div className="leading-tight">
        <p className="text-sm font-semibold text-white">
          {weather.temp}°C
        </p>
        <p className="text-xs text-white/70 capitalize">
          {weather.description}
        </p>
      </div>
    </div>
  );
}
