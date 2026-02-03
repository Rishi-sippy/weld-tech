import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <Image src="/images/welding.jpg" alt="Steel Fabrication Work" fill priority className="object-cover" />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="max-w-3xl backdrop-blur-md bg-black/40 border border-yellow-400/20 p-10 rounded-2xl shadow-2xl">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-yellow-400">
            Madhu Steel & Wooden <br /> Fabrication
          </h1>

          <p className="mt-5 text-lg md:text-xl text-gray-300">
            Steel • Welding • Wooden Fabrication <br />
            <span className="text-yellow-400">Palampur, Himachal Pradesh</span>
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="tel:+919857285982" className="bg-yellow-400 hover:bg-yellow-300 text-black px-8 py-4 font-semibold rounded-lg transition shadow-lg">
              📞 Call Now
            </a>

            <a href="https://wa.me/919857285982" className="border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-8 py-4 font-semibold rounded-lg transition">
              💬 WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
