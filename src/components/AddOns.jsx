import { motion } from 'framer-motion';

const addOns = [
  { name: "Extra Pages", price: "₹500/page", icon: "📄" },
  { name: "Extra Products", price: "₹50–₹100", icon: "📦" },
  { name: "Logo Design", price: "₹1,000", icon: "🎨" },
  { name: "Premium SEO", price: "₹2,000–₹5,000", icon: "📈" },
  { name: "OTP Login", price: "₹1,500+", icon: "🔐" },
  { name: "Maintenance", price: "₹999/month", icon: "🛠️" },
];

export default function AddOns() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#c8a84e] font-bold text-sm uppercase tracking-widest mb-2 block">Level Up Your Site</span>
          <h2 className="text-3xl md:text-5xl font-[Outfit] font-bold mb-4">Powerful <span className="text-[#c8a84e]">Add-Ons</span></h2>
          <p className="text-gray-500 max-w-xl mx-auto">Enhance your website with professional features tailored to your specific needs.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {addOns.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-all flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-2xl">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold font-[Outfit]">{item.name}</h3>
                  <p className="text-sm text-gray-400">Starting at</p>
                </div>
              </div>
              <div className="text-[#c8a84e] font-bold text-lg">
                {item.price}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
