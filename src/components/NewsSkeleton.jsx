export default function NewsSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="p-5 rounded-2xl bg-white/5 border border-white/10 animate-pulse"
        >
          <div className="w-full h-40 bg-white/10 rounded-xl mb-4"></div>
          <div className="h-4 bg-white/10 rounded w-3/4 mb-3"></div>
          <div className="h-3 bg-white/10 rounded w-full mb-2"></div>
          <div className="h-3 bg-white/10 rounded w-5/6"></div>
        </div>
      ))}
    </div>
  )
}
