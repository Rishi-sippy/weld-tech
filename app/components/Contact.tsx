export default function Contact() {
  return (
    <section className="py-24 bg-black border-t border-yellow-400/20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-yellow-400">Contact Us</h2>

        <p className="mt-6 text-gray-300 text-lg">📍 Palampur, Himachal Pradesh</p>
        <p className="mt-2 text-gray-300 text-lg">📞 +91 98572 85982</p>

        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <a href="tel:+919857285982" className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold hover:scale-105 transition">
            Call Now
          </a>

          <a href="https://wa.me/919857285982" className="border border-yellow-400 text-yellow-400 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 hover:text-black transition">
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
