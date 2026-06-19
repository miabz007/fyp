import { motion } from 'motion/react';
import { Target, Gauge, MapPin } from 'lucide-react';

export function ObjectiveSection() {
  const objectives = [
    {
      icon: Target,
      title: 'Unified Platform',
      description: 'To integrate recipient location information into a single platform for easier communication among users',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Gauge,
      title: 'Optimal Routes',
      description: 'To generate optimal delivery routes using the Travelling Salesman Problem (TSP) algorithm for efficient delivery operations',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: MapPin,
      title: 'Real-Time Tracking',
      description: 'To implement real-time delivery personnel tracking to provide recipients with delivery status information',
      color: 'from-red-600 to-pink-600'
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
          OBJECTIVE
        </motion.div>

        <div className="mb-10 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Our Mission
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            SwiftDrop aims to transform the delivery ecosystem through intelligent technology and seamless integration
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {objectives.map((objective, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${objective.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity`} />
              
              <div className="relative bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border-2 border-gray-100 group-hover:border-red-300 transition-all h-full">
                <div className={`w-16 h-16 bg-gradient-to-br ${objective.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                  <objective.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-4xl font-bold text-red-600">{index + 1}</span>
                    <div className="h-px flex-1 bg-gradient-to-r from-red-600 to-transparent" />
                  </div>
                  <h4 className="font-bold text-xl text-gray-900">{objective.title}</h4>
                </div>
                
                <p className="text-gray-600 leading-relaxed">{objective.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
