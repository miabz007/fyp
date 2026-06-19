import { motion } from 'motion/react';
import { Smartphone, MapPin, Navigation, Package } from 'lucide-react';
import { useState } from 'react';

export function InterfaceShowcase() {
  const [activeScreen, setActiveScreen] = useState(0);

  const screens = [
    {
      title: 'My Location',
      description: 'Users can view and update their delivery location in real-time',
      color: 'from-red-500 to-red-600',
      icon: MapPin
    },
    {
      title: 'Active Delivery',
      description: 'Track current deliveries with live status updates and route information',
      color: 'from-orange-500 to-red-500',
      icon: Package
    },
    {
      title: 'Route Map',
      description: 'Interactive map showing optimized delivery routes and multiple destinations',
      color: 'from-purple-500 to-pink-500',
      icon: Navigation
    },
    {
      title: 'Delivery Details',
      description: 'Comprehensive information about deliveries including recipient data',
      color: 'from-blue-500 to-purple-500',
      icon: Smartphone
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-6xl"
    >
      <div className="bg-white rounded-3xl shadow-2xl p-12">
        <motion.div
          initial={{ scale: 0.9 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          className="inline-block bg-red-600 text-white px-8 py-3 rounded-full font-bold text-xl mb-8"
        >
          INTERFACE
        </motion.div>

        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Intuitive Mobile Experience
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Clean, user-friendly interface designed for recipients, delivery personnel, and administrators
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Screen Selector */}
          <div className="space-y-4">
            {screens.map((screen, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveScreen(index)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full text-left p-6 rounded-2xl transition-all ${
                  activeScreen === index
                    ? 'bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-600 shadow-lg'
                    : 'bg-gray-50 border-2 border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    activeScreen === index
                      ? `bg-gradient-to-br ${screen.color}`
                      : 'bg-gray-200'
                  }`}>
                    <screen.icon className={`w-6 h-6 ${
                      activeScreen === index ? 'text-white' : 'text-gray-600'
                    }`} />
                  </div>
                  <div className="flex-1">
                    <h4 className={`font-bold text-lg mb-1 ${
                      activeScreen === index ? 'text-gray-900' : 'text-gray-700'
                    }`}>
                      {screen.title}
                    </h4>
                    <p className={`text-sm ${
                      activeScreen === index ? 'text-gray-700' : 'text-gray-500'
                    }`}>
                      {screen.description}
                    </p>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Phone Mockup */}
          <motion.div
            key={activeScreen}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative bg-gray-900 rounded-[3rem] p-4 shadow-2xl mx-auto max-w-sm">
              {/* Phone notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-gray-900 rounded-b-3xl z-10" />
              
              {/* Screen */}
              <div className={`relative bg-gradient-to-br ${screens[activeScreen].color} rounded-[2.5rem] aspect-[9/19] overflow-hidden`}>
                {/* Status bar */}
                <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-8 pt-4 pb-2 text-white text-xs">
                  <span>9:41</span>
                  <div className="flex items-center gap-1">
                    <div className="w-4 h-3 border border-white rounded-sm" />
                    <div className="w-1 h-3 bg-white rounded-sm" />
                  </div>
                </div>

                {/* Content */}
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="text-center text-white">
                    {(() => { const Icon = screens[activeScreen].icon; return <Icon className="w-24 h-24 mx-auto mb-4 opacity-80" />; })()}
                    <h4 className="text-2xl font-bold mb-2">{screens[activeScreen].title}</h4>
                    <p className="text-sm opacity-90">{screens[activeScreen].description}</p>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2">
                  {screens.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full ${
                        index === activeScreen ? 'bg-white' : 'bg-white/30'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {[
            { label: 'Real-time Updates', value: '100%' },
            { label: 'User Satisfaction', value: '95%' },
            { label: 'Response Time', value: '<1s' },
            { label: 'Uptime', value: '99.9%' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border-2 border-gray-200 text-center"
            >
              <p className="text-3xl font-bold text-red-600 mb-1">{stat.value}</p>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
