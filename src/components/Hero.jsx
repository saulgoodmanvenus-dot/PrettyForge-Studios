import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useEffect } from 'react'

export default function Hero() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Smooth out the mouse movement
  const springConfig = { damping: 50, stiffness: 400 }
  const springX = useSpring(mouseX, springConfig)
  const springY = useSpring(mouseY, springConfig)

  // Create different parallax layers
  const layer1X = useTransform(springX, [-1000, 1000], [-80, 80])
  const layer1Y = useTransform(springY, [-1000, 1000], [-80, 80])
  
  const layer2X = useTransform(springX, [-1000, 1000], [120, -120])
  const layer2Y = useTransform(springY, [-1000, 1000], [120, -120])
  
  const layer3X = useTransform(springX, [-1000, 1000], [-180, 180])
  const layer3Y = useTransform(springY, [-1000, 1000], [-180, 180])

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Calculate mouse position relative to center of screen
      const x = e.clientX - window.innerWidth / 2
      const y = e.clientY - window.innerHeight / 2
      mouseX.set(x)
      mouseY.set(y)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle grid pattern */}
        <motion.div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #c8a84e 1px, transparent 0)`,
            backgroundSize: '40px 40px',
            x: layer1X,
            y: layer1Y
          }} 
        />
        
        {/* Gradient orbs */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          style={{ x: layer2X, y: layer2Y }}
          className="absolute top-20 right-20 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#c8a84e]/20 to-transparent blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.08, 0.12, 0.08] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          style={{ x: layer3X, y: layer3Y }}
          className="absolute bottom-20 left-10 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-[#1a1a1a]/10 to-transparent blur-3xl"
        />
        
        {/* Floating geometric shapes */}
        <motion.div
          animate={{ rotate: [0, 180, 360], scale: [1, 1.1, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          style={{ x: layer1X, y: layer1Y }}
          className="absolute top-1/4 right-1/4 w-16 h-16 border-2 border-[#c8a84e]/30 rounded-2xl"
        />
        <motion.div
          animate={{ rotate: [360, 180, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
          style={{ x: layer2X, y: layer2Y }}
          className="absolute bottom-1/3 left-1/4 w-12 h-12 border-2 border-[#c8a84e]/25 rounded-full"
        />
        
        <motion.div
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          style={{ x: layer3X, y: layer3Y }}
          className="absolute top-1/3 left-[15%] w-6 h-6 bg-[#c8a84e]/60 rounded-full blur-[1px]"
        />
        <motion.div
          animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          style={{ x: layer1X, y: layer1Y }}
          className="absolute bottom-1/4 right-[20%] w-5 h-5 bg-[#c8a84e]/70 rounded-full blur-[1px]"
        />
        
        <motion.div
          animate={{ rotate: [0, -180, -360], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          style={{ x: layer2X, y: layer2Y }}
          className="absolute top-[15%] left-[40%] w-20 h-20 border-2 border-[#c8a84e]/20 rounded-full border-dashed"
        />

        <motion.div
          animate={{ rotate: [0, 360], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          style={{ x: layer3X, y: layer3Y }}
          className="absolute bottom-[10%] right-[35%] w-24 h-24 border-2 border-[#1a1a1a]/10 rounded-3xl"
        />
        
        {/* Additional new noticeable elements */}
        <motion.div
          animate={{ y: [-20, 20, -20], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          style={{ x: layer1X, y: layer1Y }}
          className="absolute top-1/2 left-10 w-8 h-8 bg-gradient-to-br from-[#c8a84e] to-transparent rounded-lg rotate-45 blur-[2px]"
        />
        
        <motion.div
          animate={{ x: [-30, 30, -30], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          style={{ x: layer2X, y: layer2Y }}
          className="absolute top-1/4 right-[10%] w-12 h-12 bg-gradient-to-tr from-[#1a1a1a]/20 to-transparent rounded-full blur-[2px]"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-28 md:pt-16 lg:pt-0">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#fefce8] border border-[#c8a84e]/20 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#c8a84e] animate-pulse" />
          <span className="text-sm font-medium text-[#854d0e]">Trusted by 50+ Customers</span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-[Outfit] font-bold leading-[1.2] sm:leading-[1.1] tracking-tight mb-6"
        >
          Premium Websites
          <br />
          <span className="relative">
            Built for Your{' '}
            <span className="gold-shimmer">Success</span>
            <motion.svg
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.2, delay: 1.2 }}
              className="absolute -bottom-2 left-0 w-full hidden sm:block"
              viewBox="0 0 300 12"
              fill="none"
            >
              <motion.path
                d="M2 8 C50 2, 100 2, 150 6 C200 10, 250 4, 298 6"
                stroke="#c8a84e"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, delay: 1.2 }}
              />
            </motion.svg>
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-4 font-light"
        >
          We build stunning, high-performance websites that drive results.
          <br className="hidden sm:block" />
          From sleek portfolios to powerful 3D configurators, and complete web solutions (mobile apps, all platforms).
        </motion.p>

        {/* Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex items-center justify-center gap-3 mb-10 text-sm font-medium text-[#c8a84e]"
        >
          <span>Affordable</span>
          <span className="w-1 h-1 rounded-full bg-[#c8a84e]" />
          <span>Modern</span>
          <span className="w-1 h-1 rounded-full bg-[#c8a84e]" />
          <span>High Performance</span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="group relative px-8 py-4 bg-gradient-to-r from-[#1a1a1a] to-[#333] text-white font-semibold rounded-full text-base shadow-[0_8px_30px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_40px_rgba(200,168,78,0.25)] transition-all duration-500 hover:from-[#c8a84e] hover:to-[#b8941f] overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Get Started
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </a>
          <a
            href="#pricing"
            className="px-8 py-4 bg-white border-2 border-gray-200 text-gray-800 font-semibold rounded-full text-base hover:border-[#c8a84e] hover:text-[#c8a84e] transition-all duration-300 shadow-sm hover:shadow-lg"
          >
            View Pricing
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto"
        >
          {[
            { number: '50+', label: 'Projects' },
            { number: '50+', label: 'Customers' },
            { number: '99%', label: 'Satisfaction' },
          ].map((stat) => (
             <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-[Outfit] font-bold text-[#1a1a1a]">{stat.number}</div>
              <div className="text-xs md:text-sm text-gray-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-300 rounded-full flex items-start justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-[#c8a84e]" />
        </motion.div>
      </motion.div>
    </section>
  )
}
