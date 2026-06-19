import { motion } from 'motion/react';
import { MapPin, Package, TruckIcon, ChevronDown } from 'lucide-react';

export function Hero() {
  const scrollToNext = () => {
    document.getElementById('introduction')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="w-full max-w-6xl mx-auto text-center"
    >
      {/* Header */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-8"
      >
        <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-lg mb-6">
          <img 
            src="https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=100&h=100&fit=crop" 
            alt="UNISZA Logo" 
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="text-left">
            <p className="text-sm font-bold text-gray-900">FACULTY OF INFORMATICS AND COMPUTING</p>
            <p className="text-xs italic text-gray-600">FINAL YEAR PROJECT SHOWCASE 2026</p>
          </div>
        </div>
      </motion.div>

      {/* Logo and Title */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4, type: 'spring', stiffness: 100 }}
        className="mb-12"
      >
        <div className="flex justify-center items-center gap-4 mb-6">
          <motion.div
            animate={{ 
              rotate: [0, 360],
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="w-20 h-20 bg-red-600 rounded-2xl flex items-center justify-center shadow-2xl"
          >
            <Package className="w-12 h-12 text-white" />
          </motion.div>
        </div>

        <h1 className="text-7xl font-bold mb-4">
          <span className="text-red-600">Swift</span>
          <span className="text-black">Drop</span>
        </h1>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '200px' }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="h-1 bg-gradient-to-r from-red-600 to-red-400 mx-auto mb-6 rounded-full"
        />

        <h2 className="text-2xl md:text-3xl text-gray-800 font-medium max-w-3xl mx-auto leading-tight">
          A Real-Time Location Synchronized Delivery Optimization and Tracking System
        </h2>
      </motion.div>

      {/* Animated Icons */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="flex justify-center gap-8 mb-12"
      >
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="bg-white p-6 rounded-2xl shadow-lg"
        >
          <MapPin className="w-10 h-10 text-red-600 mb-2" />
          <p className="text-sm font-medium text-gray-700">Real-Time Tracking</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1, rotate: -5 }}
          className="bg-white p-6 rounded-2xl shadow-lg"
        >
          <TruckIcon className="w-10 h-10 text-red-600 mb-2" />
          <p className="text-sm font-medium text-gray-700">Route Optimization</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="bg-white p-6 rounded-2xl shadow-lg"
        >
          <Package className="w-10 h-10 text-red-600 mb-2" />
          <p className="text-sm font-medium text-gray-700">Delivery Management</p>
        </motion.div>
      </motion.div>

      {/* Author Info */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1 }}
        className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto mb-12"
      >
        <div className="flex items-center justify-center gap-8">
          <div className="text-left">
            <p className="text-sm text-gray-500 uppercase tracking-wide mb-1">Student</p>
            <p className="font-bold text-lg">MUHAMAD 'IRFAN 'ADLIE BIN ZAINUDIN</p>
            <p className="text-gray-600">077224</p>
            <p className="text-red-600">077224@putra.unisza.edu.my</p>
          </div>
          <div className="w-px h-16 bg-gray-300" />
          <div className="text-left">
            <p className="text-sm text-gray-500 uppercase tracking-wide mb-1">Supervisor</p>
            <p className="font-bold text-lg">DR ONG YEW CHUAN</p>
            <p className="text-red-600">yewchuan@unisza.edu.my</p>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToNext}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="text-gray-400 hover:text-red-600 transition-colors"
      >
        <ChevronDown size={40} />
      </motion.button>
    </motion.div>
  );
}
