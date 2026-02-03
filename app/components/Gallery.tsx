export default function Gallery() {
  return (
    <section className="py-24 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-yellow-400">Our Work</h2>
        <p className="mt-4 text-gray-400">Workshop & project highlights</p>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="h-48 bg-zinc-800 rounded-xl flex items-center justify-center text-gray-500">
              Image {i}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
