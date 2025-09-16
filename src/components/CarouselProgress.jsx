import { motion } from 'framer-motion'

const CarouselProgress = ({ currentIndex, totalSlides, autoplayDelay = 4000 }) => {
  const progress = ((currentIndex + 1) / totalSlides) * 100

  return (
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30">
      <div className="flex items-center space-x-2">
        {/* Progress bar */}
        <div className="w-32 h-1 bg-gray-700 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
        </div>
        
        {/* Slide counter */}
        <motion.span
          className="text-xs text-gray-400 font-mono"
          key={currentIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {currentIndex + 1}/{totalSlides}
        </motion.span>
      </div>
    </div>
  )
}

export default CarouselProgress
