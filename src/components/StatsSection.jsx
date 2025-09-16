import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false)

  const stats = [
    {
      number: "50+",
      label: "Proyectos Completados",
      icon: "🚀",
      color: "from-blue-500 to-cyan-500"
    },
    {
      number: "3+",
      label: "Años de Experiencia",
      icon: "💼",
      color: "from-purple-500 to-pink-500"
    },
    {
      number: "100%",
      label: "Clientes Satisfechos",
      icon: "⭐",
      color: "from-green-500 to-emerald-500"
    },
    {
      number: "24/7",
      label: "Soporte Técnico",
      icon: "🛠️",
      color: "from-orange-500 to-red-500"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const numberVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      }
    }
  }

  return (
    <section className="py-16 px-4 bg-gradient-to-r from-slate-800/20 to-purple-800/20">
      <motion.div 
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
          variants={itemVariants}
        >
          Por qué elegir Synaphex
        </motion.h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center group cursor-pointer"
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className={`relative bg-gradient-to-br ${stat.color} p-6 rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl`}>
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`
                  }}></div>
                </div>
                
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <motion.div 
                    className="text-3xl mb-3"
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: 10,
                      filter: "drop-shadow(0 0 20px rgba(255,255,255,0.8))"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {stat.icon}
                  </motion.div>
                  
                  <motion.div
                    className="text-3xl md:text-4xl font-bold text-white mb-2"
                    variants={numberVariants}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {stat.number}
                  </motion.div>
                  
                  <p className="text-white/90 text-sm font-medium">
                    {stat.label}
                  </p>
                </div>
                
                {/* Corner decoration */}
                <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-white/30 rounded-tr-lg"></div>
                <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-white/30 rounded-bl-lg"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default StatsSection
