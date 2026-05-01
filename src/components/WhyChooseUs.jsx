import { motion } from 'framer-motion';

const reasons = [
  {
    title: "Affordable Pricing",
    description: "Get enterprise-level quality without the enterprise price tag. We believe in value-driven services.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Premium Quality",
    description: "Every pixel is carefully placed. We follow Apple-level UI standards to ensure your brand looks prestigious.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z" />
      </svg>
    )
  },
  {
    title: "Fast Delivery",
    description: "Time is money. We launch your project quickly without compromising on performance or details.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: "Client-Focused",
    description: "Your vision, our expertise. We work closely with you to ensure 100% satisfaction and business growth.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  }
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section-padding bg-gray-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#c8a84e]/10 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="px-4"
          >
            <span className="text-[#c8a84e] font-bold text-xs sm:text-sm uppercase tracking-widest mb-4 block">The Advantage</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-[Outfit] font-bold mb-8 leading-tight">
              Why Choose <span className="text-[#c8a84e]">DevCraft</span> for Your Next Project?
            </h2>
            <p className="text-gray-400 text-base sm:text-lg mb-12 font-light leading-relaxed max-w-md">
              We don't just build websites; we build digital growth engines. Our combination of premium design and technical excellence sets us apart.
            </p>
            
            <div className="flex gap-8">
              <div>
                <h4 className="text-3xl font-bold text-[#c8a84e] mb-1 font-[Outfit]">24h</h4>
                <p className="text-gray-500 text-sm">Response Time</p>
              </div>
              <div className="w-px h-12 bg-gray-800" />
              <div>
                <h4 className="text-3xl font-bold text-[#c8a84e] mb-1 font-[Outfit]">100%</h4>
                <p className="text-gray-500 text-sm">Customer Satisfaction</p>
              </div>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-3xl bg-gray-800/50 border border-gray-700 hover:border-[#c8a84e]/50 transition-all duration-500 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-gray-700 flex items-center justify-center mb-6 group-hover:bg-[#c8a84e] transition-colors duration-500">
                  {reason.icon}
                </div>
                <h3 className="text-xl font-bold font-[Outfit] mb-4 group-hover:text-[#c8a84e] transition-colors">{reason.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
