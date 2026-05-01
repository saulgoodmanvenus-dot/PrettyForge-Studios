import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-8">
              <img src="/Logo.png" alt="Pretty Forge Logo" className="h-12 w-auto object-contain" />
              <div className="flex flex-col justify-center">
                <span className="text-2xl font-bold font-[Outfit] tracking-tight leading-none text-white">
                  Pretty Forge
                </span>
                <span className="text-[0.75rem] text-[#c8a84e] font-bold tracking-[0.2em] uppercase mt-1">
                  Design Studios
                </span>
              </div>
            </a>
            <p className="text-gray-400 font-light leading-relaxed mb-8">
              Crafting premium digital experiences that empower businesses to scale and succeed in the modern era.
            </p>
            <div className="flex gap-4">
              {/* Simple Social Icons */}
              {['FB', 'TW', 'IG', 'LI'].map((social) => (
                <a key={social} href="#" className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center text-xs font-bold text-gray-500 hover:border-[#c8a84e] hover:text-[#c8a84e] transition-all">
                  {social}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold font-[Outfit] mb-8">Services</h4>
            <ul className="space-y-4 text-gray-400 font-light">
              <li><a href="#" className="hover:text-[#c8a84e] transition-colors">Web Development</a></li>
              <li><a href="#" className="hover:text-[#c8a84e] transition-colors">E-Commerce</a></li>
              <li><a href="#" className="hover:text-[#c8a84e] transition-colors">3D Configurators</a></li>
              <li><a href="#" className="hover:text-[#c8a84e] transition-colors">SEO Optimization</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold font-[Outfit] mb-8">Quick Links</h4>
            <ul className="space-y-4 text-gray-400 font-light">
              <li><a href="#services" className="hover:text-[#c8a84e] transition-colors">Services</a></li>
              <li><a href="#pricing" className="hover:text-[#c8a84e] transition-colors">Pricing</a></li>
              <li><a href="#why-us" className="hover:text-[#c8a84e] transition-colors">Why Choose Us</a></li>
              <li><a href="#contact" className="hover:text-[#c8a84e] transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold font-[Outfit] mb-8">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-6 font-light">Subscribe to get the latest insights and offers.</p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-gray-800 border border-gray-700 rounded-2xl py-4 px-6 outline-none focus:border-[#c8a84e] transition-all text-sm"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-[#c8a84e] text-white px-4 rounded-xl text-sm font-bold hover:bg-[#b8941f] transition-all">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="pt-10 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm font-light">
            Fast Delivery • Affordable Prices • 100% Satisfaction
          </p>
          <p className="text-gray-500 text-sm font-light">
            © {currentYear} Pretty Forge Design Studios. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
