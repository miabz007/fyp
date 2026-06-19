import { motion } from 'motion/react';
import { MessageSquare, Users, MapPinned, TrendingUp } from 'lucide-react';

export function IntroductionSection() {
  const features = [
    {
      icon: MessageSquare,
      title: 'Unified Communication',
      description: 'Single platform for all stakeholders'
    },
    {
      icon: MapPinned,
      title: 'Location Intelligence',
      description: 'TSP algorithm for optimal routing'
    },
    {
      icon: Users,
      title: 'Multi-User Support',
      description: 'Recipients, delivery personnel, and administrators'
    },
    {
      icon: TrendingUp,
      title: 'Efficiency Focused',
      description: 'From route planning to doorstep delivery'
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
          INTRODUCTION
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Revolutionizing Delivery Management
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              SwiftDrop provides a <span className="font-bold text-red-600">unified</span> communication and 
              location platform for recipients, delivery personnel, and administrators. Delivery operations can be 
              managed efficiently from route planning to doorstep delivery without communication gaps.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
              The system leverages advanced location data to identify recipient locations and implements the{' '}
              <span className="font-bold text-red-600">Travelling Salesman Problem (TSP)</span> algorithm to 
              determine the most efficient delivery route.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-red-50 to-white p-6 rounded-2xl border-2 border-red-100 hover:border-red-300 transition-all"
              >
                <feature.icon className="w-10 h-10 text-red-600 mb-3" />
                <h4 className="font-bold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
