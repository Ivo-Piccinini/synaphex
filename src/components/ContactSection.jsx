import { motion } from 'framer-motion'

const ContactSection = () => {
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

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const contactMethods = [
    {
      icon: "📧",
      title: "Email",
      info: "contacto@synaphex.com",
      color: "border-blue-500/30",
      hoverColor: "hover:border-blue-400/50",
      textColor: "text-cyan-400"
    },
    {
      icon: "💬",
      title: "WhatsApp",
      info: "+34 123 456 789",
      color: "border-purple-500/30",
      hoverColor: "hover:border-purple-400/50",
      textColor: "text-purple-400"
    },
    {
      icon: "🌐",
      title: "LinkedIn",
      info: "linkedin.com/in/synaphex",
      color: "border-cyan-500/30",
      hoverColor: "hover:border-cyan-400/50",
      textColor: "text-blue-400"
    }
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-slate-800/30 to-purple-800/30">
      <motion.div 
        className="max-w-4xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
          variants={itemVariants}
        >
          Contacto
        </motion.h2>
        
        <motion.p 
          className="text-xl text-gray-300 mb-12 leading-relaxed"
          variants={itemVariants}
        >
          ¿Tienes un proyecto en mente? Trabajemos juntos para hacerlo realidad.
        </motion.p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              className={`bg-slate-800/50 rounded-2xl p-6 border ${method.color} ${method.hoverColor} backdrop-blur-sm cursor-pointer`}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="text-4xl mb-4"
                whileHover={{ 
                  scale: 1.2, 
                  rotate: 10,
                  filter: "drop-shadow(0 0 15px rgba(59, 130, 246, 0.6))"
                }}
                transition={{ duration: 0.3 }}
              >
                {method.icon}
              </motion.div>
              
              <motion.h3 
                className={`text-xl font-semibold mb-2 ${method.textColor}`}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                {method.title}
              </motion.h3>
              
              <motion.p 
                className="text-gray-400"
                whileHover={{ color: "#e5e7eb" }}
                transition={{ duration: 0.2 }}
              >
                {method.info}
              </motion.p>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-12"
          variants={itemVariants}
        >
          <motion.button 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
            whileHover={{ 
              scale: 1.05, 
              y: -2,
              boxShadow: "0 10px 30px rgba(59, 130, 246, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            Iniciar Proyecto
          </motion.button>
        </motion.div>

        {/* Floating elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default ContactSection
