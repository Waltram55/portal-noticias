import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-5xl font-extrabold">404</h1>
      <p className="mt-4 text-white/70">
        Esta página no existe.
      </p>

      <Link
        to="/"
        className="mt-6 px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 transition font-semibold"
      >
        Volver al inicio
      </Link>
    </section>
  )
}
