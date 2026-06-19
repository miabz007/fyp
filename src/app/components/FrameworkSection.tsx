import { motion } from 'motion/react';
import { Smartphone, Cloud, Database, Cpu } from 'lucide-react';

export function FrameworkSection() {
  const technologies = [
    {
      category: 'Mobile App',
      icon: Smartphone,
      color: 'from-green-500 to-green-600',
      items: [
        { name: 'Flutter', description: 'Cross-platform framework' },
        { name: 'Dart', description: 'Programming language' }
      ]
    },
    {
      category: 'Backend',
      icon: Cloud,
      color: 'from-orange-500 to-orange-600',
      items: [
        { name: 'Firebase', description: 'Authentication & Real-time DB' },
        { name: 'Google API', description: 'Maps & Geocoding' }
      ]
    },
    {
      category: 'Algorithm',
      icon: Cpu,
      color: 'from-purple-500 to-purple-600',
      items: [
        { name: 'TSP Algorithm', description: 'Route optimization' },
        { name: 'Round-Robin', description: 'Load balancing' }
      ]
    },
    {
      category: 'Auto Assign',
      icon: Database,
      color: 'from-blue-500 to-blue-600',
      items: [
        { name: 'Cloud Functions', description: 'Serverless computing' },
        { name: 'Firestore', description: 'NoSQL database' }
      ]
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
      <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-2xl p-12 border-2 border-gray-100">
        <motion.div
          initial={{ scale: 0.9 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          className="inline-block bg-red-600 text-white px-8 py-3 rounded-full font-bold text-xl mb-8"
        >
          FRAMEWORK
        </motion.div>

        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Technology Stack
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Built with modern, scalable technologies to ensure high performance and reliability
          </p>
        </div>

        {/* Architecture Diagram */}
        <div className="relative mb-12">
          <svg className="w-full h-64" viewBox="0 0 800 300">
            {/* Connection lines */}
            <motion.path
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
              d="M 200 150 L 300 150"
              stroke="#ef4444"
              strokeWidth="2"
              fill="none"
            />
            <motion.path
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.2 }}
              d="M 300 150 L 400 150"
              stroke="#ef4444"
              strokeWidth="2"
              fill="none"
            />
            <motion.path
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.4 }}
              d="M 500 150 L 600 150"
              stroke="#ef4444"
              strokeWidth="2"
              fill="none"
            />

            {/* Bidirectional arrows */}
            <polygon points="295,145 305,150 295,155" fill="#ef4444" />
            <polygon points="305,145 295,150 305,155" fill="#ef4444" />
            
            <polygon points="495,145 505,150 495,155" fill="#ef4444" />
            <polygon points="505,145 495,150 505,155" fill="#ef4444" />
          </svg>

          <div className="absolute inset-0 flex items-center justify-around px-8">
            {['Users', 'Mobile Interface', 'TSP Algorithm', 'Firebase Backend', 'Auto Assign'].map((label, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, type: 'spring' }}
                className="bg-white px-4 py-2 rounded-lg shadow-lg border-2 border-red-600 font-semibold text-sm text-gray-900"
              >
                {label}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Technology Cards */}
        <div className="grid md:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-gray-100 hover:border-red-300 transition-all"
            >
              <div className={`bg-gradient-to-br ${tech.color} p-6 text-white`}>
                <tech.icon className="w-10 h-10 mb-2" />
                <h4 className="font-bold text-lg">{tech.category}</h4>
              </div>
              
              <div className="p-6">
                {tech.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="mb-4 last:mb-0">
                    <p className="font-bold text-gray-900 mb-1">{item.name}</p>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-8 bg-gradient-to-r from-red-600 to-orange-600 text-white p-6 rounded-2xl"
        >
          <p className="text-center font-medium">
            🚀 Cloud-native architecture ensures scalability, reliability, and real-time performance
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
