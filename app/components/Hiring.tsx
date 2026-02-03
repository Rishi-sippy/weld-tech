export default function Hiring() {
  return (
    <section className="py-24 bg-gradient-to-r from-yellow-400 to-yellow-300 text-black">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div>
          <h2 className="text-4xl font-extrabold">We Are Hiring</h2>
          <p className="mt-4 text-lg">Long-term, safe & stable work opportunity</p>

          <ul className="mt-6 space-y-3 font-medium">
            <li>✔ Welder Expert: ₹12,000 – ₹24,000</li>
            <li>✔ Helper: ₹6,000 – ₹12,000</li>
            <li>✔ Learner: ₹4,000 – ₹7,000</li>
            <li>✔ Stay & Learning Free</li>
          </ul>

          <a href="https://wa.me/919857285982" className="inline-block mt-8 bg-black text-yellow-400 px-8 py-4 rounded-lg font-semibold shadow-lg hover:scale-105 transition">
            Apply on WhatsApp
          </a>
        </div>

        {/* Right */}
        <div className="bg-black/80 p-8 rounded-2xl text-white shadow-2xl">
          <h3 className="text-2xl font-bold text-yellow-400">Why Join Us?</h3>
          <ul className="mt-6 space-y-3 text-gray-300">
            <li>✔ Secure long-term job</li>
            <li>✔ Skill growth opportunity</li>
            <li>✔ Friendly work environment</li>
            <li>✔ On-time payment</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
