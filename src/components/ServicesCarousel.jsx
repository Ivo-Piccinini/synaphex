import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ServicesCarousel = () => {
  const [currentService, setCurrentService] = useState(0)

  const services = [
    {
      title: "Desarrollo Web Frontend",
      description: "Creación de interfaces modernas y responsivas con React, Vue.js y tecnologías de vanguardia",
      icon: "🌐",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Desarrollo Backend",
      description: "APIs robustas y escalables con Node.js, Python, y arquitecturas cloud",
      icon: "⚙️",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Aplicaciones Móviles",
      description: "Apps nativas e híbridas para iOS y Android con React Native y Flutter",
      icon: "📱",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Sistemas de Gestión",
      description: "CRMs, ERPs y sistemas personalizados para optimizar tu negocio",
      icon: "💼",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "E-commerce",
      description: "Tiendas online completas con integración de pagos y gestión de inventario",
      icon: "🛒",
      color: "from-indigo-500 to-purple-500"
    }
  ]

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % services.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [services.length])

  const nextService = () => {
    setCurrentService((prev) => (prev + 1) % services.length)
  }

  const prevService = () => {
    setCurrentService((prev) => (prev - 1 + services.length) % services.length)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  }

  return (
    <section className="py-20 px-4">
      <motion.div 
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
          variants={itemVariants}
        >
          Servicios
        </motion.h2>
        
        <div className="relative">
          <AnimatePresence mode="wait" custom={1}>
            <motion.div
              key={currentService}
              custom={1}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="bg-gradient-to-r from-slate-800/50 to-purple-800/50 rounded-3xl p-8 border border-purple-500/30 backdrop-blur-sm"
            >
              <div className="text-center">
                <motion.div 
                  className="text-6xl mb-6"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    ease: "easeOut",
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: 10,
                    filter: "drop-shadow(0 0 20px rgba(59, 130, 246, 0.8))"
                  }}
                >
                  {services[currentService].icon}
                </motion.div>
                
                <motion.h3 
                  className="text-3xl font-bold mb-4 text-cyan-400"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  {services[currentService].title}
                </motion.h3>
                
                <motion.p 
                  className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  {services[currentService].description}
                </motion.p>
              </div>
            </motion.div>
          </AnimatePresence>
          
          {/* Navigation buttons */}
          <motion.button
            onClick={prevService}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-blue-600 hover:bg-blue-500 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
            whileHover={{ scale: 1.1, x: -2 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <span className="text-2xl">‹</span>
          </motion.button>
          
          <motion.button
            onClick={nextService}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-blue-600 hover:bg-blue-500 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
            whileHover={{ scale: 1.1, x: 2 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <span className="text-2xl">›</span>
          </motion.button>
        </div>
        
        {/* Service indicators */}
        <motion.div 
          className="flex justify-center mt-8 space-x-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          {services.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentService(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentService 
                  ? 'bg-cyan-400 shadow-lg shadow-cyan-400/50' 
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.8 }}
              animate={{
                scale: index === currentService ? 1.2 : 1,
                boxShadow: index === currentService 
                  ? "0 0 20px rgba(34, 211, 238, 0.5)" 
                  : "0 0 0px rgba(0,0,0,0)"
              }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default ServicesCarousel
