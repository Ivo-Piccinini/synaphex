import { motion } from 'framer-motion'
import HeroSection from './components/HeroSection'
import ServicesCarousel from './components/ServicesCarousel'
import StatsSection from './components/StatsSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import FloatingParticles from './components/FloatingParticles'

function App() {
  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Global floating particles */}
      <FloatingParticles count={15} color="bg-blue-400/30" />
      
      {/* Main content sections */}
      <HeroSection />
      <ServicesCarousel />
      <StatsSection />
      <ContactSection />
      <Footer />
    </motion.div>
  )
}

export default App
