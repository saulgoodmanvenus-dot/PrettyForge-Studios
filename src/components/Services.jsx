import { motion } from 'framer-motion'

const services = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    title: 'Website Development',
    description: 'Custom-built, pixel-perfect websites with modern UI, blazing-fast performance, and SEO optimization.',
    tags: ['React', 'Next.js', 'Responsive', 'SEO'],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
      </svg>
    ),
    title: 'E-Commerce Development',
    description: 'Scalable online stores with seamless checkout, payment integration, and conversion-optimized pages.',
    tags: ['Shopify', 'Payments', 'Admin Panel'],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
      </svg>
    ),
    title: '3D Configurator Websites',
    description: 'Interactive 3D product configurators with real-time color, material, and variant switching.',
    tags: ['Three.js', 'WebGL', '3D Models'],
  },
]

export default function Services() {
  return (
    <section id="services" className="section-padding bg-white relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#fefce8] border border-[#c8a84e]/20 text-xs sm:text-sm font-medium text-[#854d0e] mb-4">
            What We Offer
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-[Outfit] font-bold tracking-tight mb-4 px-4">
            Our <span className="text-[#c8a84e]">Services</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base md:text-lg font-light px-6">
            End-to-end web solutions tailored for businesses of every size.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 px-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative bg-white rounded-3xl p-8 border border-gray-100 hover:border-[#c8a84e]/30 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(200,168,78,0.1)] cursor-pointer"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#fefce8]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#c8a84e] to-[#e8d48b] flex items-center justify-center text-white mb-6 shadow-lg group-hover:shadow-[0_8px_25px_rgba(200,168,78,0.3)] group-hover:scale-110 transition-all duration-500">
                  {service.icon}
                </div>
                <h3 className="text-xl font-[Outfit] font-bold mb-3 group-hover:text-[#c8a84e] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{service.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full bg-gray-50 text-gray-500 border border-gray-100 group-hover:bg-[#fefce8] group-hover:text-[#854d0e] group-hover:border-[#c8a84e]/20 transition-all duration-300">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold text-gray-400 group-hover:text-[#c8a84e] transition-colors duration-300">
                  Learn more
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
