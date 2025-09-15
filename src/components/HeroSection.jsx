import { motion } from 'framer-motion'
import synaphexLogo from '../assets/synaphex-logo-og.png'

const HeroSection = () => {
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

  const logoVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      }
    }
  }

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
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

      <motion.div 
        className="relative z-10 text-center max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Logo */}
        <motion.div 
          className="mb-8"
          variants={itemVariants}
        >
          <motion.img 
            src={synaphexLogo} 
            alt="Synaphex Logo" 
            className="w-32 h-32 mx-auto mb-6 rounded-full shadow-2xl shadow-blue-500/50"
            variants={logoVariants}
            whileHover={{ 
              scale: 1.1, 
              rotate: 5,
              boxShadow: "0 0 50px rgba(59, 130, 246, 0.8)"
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        {/* Main title */}
        <motion.h1 
          className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
          variants={itemVariants}
          whileHover={{ 
            scale: 1.05,
            backgroundImage: "linear-gradient(45deg, #60a5fa, #a78bfa, #22d3ee)"
          }}
          transition={{ duration: 0.3 }}
        >
          SYNAPHEX
        </motion.h1>

        {/* Description */}
        <motion.p 
          className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
          variants={itemVariants}
        >
          Desarrollador Full Stack especializado en crear experiencias digitales 
          <motion.span 
            className="text-cyan-400 font-semibold"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            {" "}innovadoras{" "}
          </motion.span>
          y 
          <motion.span 
            className="text-purple-400 font-semibold"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            {" "}soluciones tecnológicas{" "}
          </motion.span>
          que transforman ideas en realidad.
        </motion.p>

        {/* Technology tags */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 text-sm text-gray-400"
          variants={itemVariants}
        >
          {['React', 'Node.js', 'Python', 'MongoDB'].map((tech, index) => (
            <motion.span
              key={tech}
              className="px-4 py-2 bg-blue-500/20 rounded-full border border-blue-500/30 hover:bg-blue-500/30 hover:border-blue-400/50 cursor-pointer"
              whileHover={{ 
                scale: 1.1, 
                y: -2,
                boxShadow: "0 4px 15px rgba(59, 130, 246, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          variants={floatingVariants}
          animate="animate"
        >
          <motion.div
            className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center"
            whileHover={{ scale: 1.2 }}
          >
            <motion.div
              className="w-1 h-3 bg-cyan-400 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroSection
