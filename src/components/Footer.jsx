export default function Footer() {
  return (
    <footer className="mt-16 border-t border-emerald-500/20 bg-gradient-to-r from-[#04110d] via-[#061a14] to-[#04110d]">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Logo / Nombre */}
        <div className="text-center md:text-left">
          <h2 className="text-white font-extrabold text-xl tracking-wide">
            Portal <span className="text-emerald-400">ARG</span>
          </h2>
          <p className="text-white/60 text-sm mt-1">
            Noticias Argentinas en tiempo real
          </p>
        </div>

        {/* Links */}
        <div className="flex gap-6 text-sm font-medium">
          <a href="#" className="text-white/70 hover:text-emerald-400 transition">
            Tecnología
          </a>
          <a href="#" className="text-white/70 hover:text-emerald-400 transition">
            Economía
          </a>
          <a href="#" className="text-white/70 hover:text-emerald-400 transition">
            Deportes
          </a>
          <a href="#" className="text-white/70 hover:text-emerald-400 transition">
            Salud
          </a>
        </div>

        {/* Firma */}
        <div className="text-center md:text-right">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Todos los derechos reservados.
          </p>

          <p className="text-sm font-semibold mt-1">
            <span className="text-white/80">Diseñado por </span>
            <span className="text-emerald-400">Waltram DG</span>
          </p>
        </div>
      </div>

      {/* Línea final */}
      <div className="text-center py-3 text-xs text-white/40 border-t border-emerald-500/10">
        Hecho con ❤️ y React + Tailwind
      </div>
    </footer>
  )
}
