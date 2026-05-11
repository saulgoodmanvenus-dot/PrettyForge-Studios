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

              <div className="flex flex-col gap-3 mt-auto">
                <a 
                  href="tel:+918667219624" 
                  className={`w-full py-3.5 text-center rounded-2xl font-bold text-white transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 ${plan.isPopular ? 'bg-[#c8a84e] hover:bg-[#b8941f]' : 'bg-gray-900 hover:bg-black'}`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                  </svg>
                  Call Now
                </a>
                <a 
                  href={`https://wa.me/918667219624?text=${encodeURIComponent(`Hello Pretty Forge Studios,\n\nI am interested in your ${plan.name} plan starting at ${plan.price}.\n\nPlease provide me with more details and the next steps.\n\nThank you!`)}`} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 text-center rounded-2xl font-bold bg-[#25D366] text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:bg-[#128C7E] flex items-center justify-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c-.003 1.396.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                  </svg>
                  WhatsApp
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
