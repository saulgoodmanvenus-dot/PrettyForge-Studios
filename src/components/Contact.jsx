import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-white relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#c8a84e]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gray-50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-[Outfit] font-bold mb-8 leading-tight">
              Let's Build Something <span className="text-[#c8a84e]">Exceptional</span> Together
            </h2>
            <p className="text-gray-500 text-lg mb-12 font-light leading-relaxed max-w-md">
              Have a project in mind? We'd love to hear about it. Reach out and let's turn your vision into a digital masterpiece.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center text-[#c8a84e] shadow-sm">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-400 font-medium uppercase tracking-wider mb-1">Call Us</p>
                  <p className="text-xl font-bold font-[Outfit]">+91 8667219624</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center text-[#c8a84e] shadow-sm">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-400 font-medium uppercase tracking-wider mb-1">Email Us</p>
                  <p className="text-xl font-bold font-[Outfit]">harsh.shk.sl@gmail.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-6 sm:p-8 md:p-12 rounded-[2rem] border border-gray-100 shadow-2xl shadow-gray-200/50"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Full Name</label>
                  <input type="text" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-transparent focus:border-[#c8a84e] focus:bg-white outline-none transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Email Address</label>
                  <input type="email" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-transparent focus:border-[#c8a84e] focus:bg-white outline-none transition-all" placeholder="john@example.com" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Project Type</label>
                <select className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-transparent focus:border-[#c8a84e] focus:bg-white outline-none transition-all">
                  <option>Website Development</option>
                  <option>E-Commerce Solution</option>
                  <option>3D Configurator</option>
                  <option>Other Service</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Your Message</label>
                <textarea rows="4" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-transparent focus:border-[#c8a84e] focus:bg-white outline-none transition-all resize-none" placeholder="Tell us about your project..."></textarea>
              </div>

              <button className="w-full py-5 rounded-2xl bg-gray-900 text-white font-bold text-lg hover:bg-[#c8a84e] transition-all duration-300 shadow-xl shadow-gray-200 hover:shadow-[#c8a84e]/20">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
