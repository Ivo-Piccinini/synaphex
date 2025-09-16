import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectCoverflow, Parallax } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'
import CarouselProgress from './CarouselProgress'

const ServicesCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const swiperRef = useRef(null)

  const services = [
    {
      title: "Desarrollo Web Frontend",
      description: "Creación de interfaces modernas y responsivas con React, Vue.js y tecnologías de vanguardia",
      icon: "🌐",
      gradient: "from-blue-500 via-cyan-500 to-blue-600",
      technologies: ["React", "Vue.js", "TypeScript", "Tailwind CSS"]
    },
    {
      title: "Desarrollo Backend",
      description: "APIs robustas y escalables con Node.js, Python, y arquitecturas cloud",
      icon: "⚙️",
      gradient: "from-purple-500 via-pink-500 to-purple-600",
      technologies: ["Node.js", "Python", "Express", "MongoDB"]
    },
    {
      title: "Aplicaciones Móviles",
      description: "Apps nativas e híbridas para iOS y Android con React Native y Flutter",
      icon: "📱",
      gradient: "from-green-500 via-emerald-500 to-green-600",
      technologies: ["React Native", "Flutter", "iOS", "Android"]
    },
    {
      title: "Sistemas de Gestión",
      description: "CRMs, ERPs y sistemas personalizados para optimizar tu negocio",
      icon: "💼",
      gradient: "from-orange-500 via-red-500 to-orange-600",
      technologies: ["CRM", "ERP", "Sistemas Web", "Bases de Datos"]
    },
    {
      title: "E-commerce",
      description: "Tiendas online completas con integración de pagos y gestión de inventario",
      icon: "🛒",
      gradient: "from-indigo-500 via-purple-500 to-indigo-600",
      technologies: ["WooCommerce", "Shopify", "Stripe", "PayPal"]
    }
  ]

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

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-purple-900/10 to-cyan-900/10"></div>
      
      <motion.div 
        className="max-w-7xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 
          className="text-4xl md:text-6xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-gradient"
          variants={itemVariants}
        >
          Servicios
        </motion.h2>
        
        <motion.p 
          className="text-xl text-gray-400 text-center mb-16 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          Soluciones tecnológicas innovadoras para impulsar tu negocio al siguiente nivel
        </motion.p>
        
        <motion.div 
          className="relative"
          variants={itemVariants}
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow, Parallax]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            parallax={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            onSwiper={(swiper) => {
              swiperRef.current = swiper
            }}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            pagination={{
              el: '.swiper-pagination-custom',
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
            className="services-swiper"
          >
            {services.map((service, index) => (
              <SwiperSlide key={index} className="swiper-slide-custom">
                <motion.div
                  className="relative group cursor-pointer"
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Card */}
                  <div className={`relative bg-gradient-to-br ${service.gradient} p-8 rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-500 group-hover:scale-105`}>
                    {/* Background pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                      }}></div>
                    </div>
                    
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Content */}
                    <div className="relative z-10 text-center">
                      {/* Icon */}
                      <motion.div 
                        className="text-6xl mb-6 filter drop-shadow-lg"
                        whileHover={{ 
                          scale: 1.2, 
                          rotate: 10,
                          filter: "drop-shadow(0 0 30px rgba(255,255,255,0.8))"
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {service.icon}
                      </motion.div>
                      
                      {/* Title */}
                      <h3 className="text-2xl font-bold mb-4 text-white">
                        {service.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-white/90 leading-relaxed mb-6 text-sm">
                        {service.description}
                      </p>
                      
                      {/* Technologies */}
                      <div className="flex flex-wrap justify-center gap-2">
                        {service.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs text-white/90 border border-white/30"
                            whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.3)" }}
                            transition={{ duration: 0.2 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Corner decoration */}
                    <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white/30 rounded-tr-lg"></div>
                    <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-white/30 rounded-bl-lg"></div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Custom Navigation Buttons */}
          <div className="swiper-button-prev-custom absolute left-4 top-1/2 transform -translate-y-1/2 z-20 w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-110">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </div>
          
          <div className="swiper-button-next-custom absolute right-4 top-1/2 transform -translate-y-1/2 z-20 w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-110">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
          
          {/* Custom Pagination */}
          <div className="swiper-pagination-custom flex justify-center mt-8 space-x-2"></div>
          
          {/* Progress Indicator */}
          <CarouselProgress 
            currentIndex={activeIndex} 
            totalSlides={services.length} 
            autoplayDelay={4000}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default ServicesCarousel
