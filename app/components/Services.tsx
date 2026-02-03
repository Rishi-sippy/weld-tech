const services = [
  {
    title: 'Steel Fabrication',
    desc: 'High quality steel work with precision finishing.'
  },
  {
    title: 'Welding Work',
    desc: 'Strong & durable welding for all fabrication needs.'
  },
  {
    title: 'Wooden Fabrication',
    desc: 'Custom wooden work with modern designs.'
  },
  {
    title: 'Gates & Grills',
    desc: 'Stylish and secure gates & grills.'
  },
  {
    title: 'Custom Fabrication',
    desc: 'Tailor-made solutions as per your requirement.'
  }
]

export default function Services() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-yellow-400 text-center">Our Services</h2>
        <p className="mt-4 text-gray-400 text-center">Quality work you can trust</p>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="group bg-zinc-900 border border-yellow-400/10 p-8 rounded-2xl hover:border-yellow-400 hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-xl font-semibold text-yellow-400">{service.title}</h3>
              <p className="mt-4 text-gray-400">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
