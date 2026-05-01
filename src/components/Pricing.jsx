import { motion } from 'framer-motion';

const pricingPlans = [
  {
    name: "Basic Website",
    price: "₹3,999",
    tagline: "Perfect for personal brands & small businesses",
    features: [
      "Up to 5 Pages",
      "Mobile Responsive",
      "Modern UI",
      "Basic Animations",
      "Contact Form",
      "WhatsApp Integration",
      "Basic SEO",
      "Free Domain (1 Year)",
      "Free Hosting",
      "7 Days Support"
    ],
    color: "bg-green-50 text-green-600",
    border: "border-green-100",
    button: "bg-green-600 hover:bg-green-700"
  },
  {
    name: "E-Commerce Website",
    price: "₹7,999",
    tagline: "Launch your online store with ease",
    isPopular: true,
    plans: [
      { label: "Starter (10 Products)", price: "₹7,999" },
      { label: "Growth (50 Products)", price: "₹11,999" },
      { label: "Advanced (100+ Products)", price: "₹16,999" }
    ],
    features: [
      "Product listing",
      "Cart + Checkout",
      "UPI / Payment integration",
      "Admin panel",
      "Mobile responsive",
      "Coupon system",
      "Free Domain + Hosting",
      "10 Days Support"
    ],
    color: "bg-blue-50 text-blue-600",
    border: "border-blue-100",
    button: "bg-blue-600 hover:bg-blue-700"
  },
  {
    name: "3D Configurator",
    price: "₹19,999",
    tagline: "Immersive 3D experiences for products",
    plans: [
      { label: "Basic (1 Product)", price: "₹19,999" },
      { label: "Standard (1–3 Products)", price: "₹29,999" },
      { label: "Advanced (Multiple)", price: "₹49,999+" }
    ],
    features: [
      "Interactive 3D product",
      "Color/material change",
      "Premium UI",
      "Smooth animations",
      "Optional e-commerce",
      "Free Domain + Hosting",
      "15 Days Support"
    ],
    color: "bg-purple-50 text-purple-600",
    border: "border-purple-100",
    button: "bg-purple-600 hover:bg-purple-700"
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="section-padding bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-[Outfit] font-bold mb-4 px-4">Transparent <span className="text-[#c8a84e]">Pricing</span></h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base px-6">Premium digital solutions at prices that make sense. No hidden costs, just high-performance results.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start px-4 sm:px-6">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-8 rounded-3xl bg-white border ${plan.isPopular ? 'border-[#c8a84e] shadow-xl' : 'border-gray-100 shadow-sm'} flex flex-col h-full`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#c8a84e] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-bold font-[Outfit] mb-2">{plan.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{plan.tagline}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.name !== "Basic Website" && <span className="text-gray-400 text-sm">Starting</span>}
                </div>
              </div>

              {plan.plans && (
                <div className="space-y-2 mb-8 bg-gray-50 p-4 rounded-2xl">
                  {plan.plans.map((p) => (
                    <div key={p.label} className="flex justify-between text-sm">
                      <span className="text-gray-600">{p.label}</span>
                      <span className="font-semibold">{p.price}</span>
                    </div>
                  ))}
                </div>
              )}

              <div className="flex-grow">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-gray-600">
                      <svg className="w-5 h-5 text-[#c8a84e] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <button className={`w-full py-4 rounded-2xl font-bold text-white transition-all duration-300 shadow-lg hover:shadow-xl ${plan.isPopular ? 'bg-[#c8a84e] hover:bg-[#b8941f]' : 'bg-gray-900 hover:bg-black'}`}>
                Choose Plan
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
