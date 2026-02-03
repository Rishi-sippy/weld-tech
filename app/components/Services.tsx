const services = ['Steel Fabrication', 'Welding Work', 'Wooden Fabrication', 'Gates & Grills', 'Custom Fabrication']

export default function Services() {
  return (
    <section className="py-16 px-6 text-center">
      <h2 className="text-3xl font-bold text-yellow-400">Our Services</h2>

      <div className="mt-10 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {services.map((service) => (
          <div key={service} className="border border-gray-700 p-6 hover:border-yellow-400 transition">
            <h3 className="text-xl font-semibold">{service}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}
