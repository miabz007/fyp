import { motion } from 'motion/react';
import { MapPinOff, Navigation, HelpCircle, AlertTriangle } from 'lucide-react';

export function ProblemStatement() {
  const problems = [
    {
      icon: MapPinOff,
      title: 'Inaccurate Addressing',
      description: 'Recipient locations are difficult to identify accurately when relying solely on traditional address details'
    },
    {
      icon: Navigation,
      title: 'Inefficient Routing',
      description: 'Determining the most efficient delivery route is challenging, especially when deliveries involve multiple locations'
    },
    {
      icon: HelpCircle,
      title: 'Unknown Destinations',
      description: 'Destination addresses or names are often unknown, making it difficult for recipients to prepare for package collection'
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
      <div className="bg-gradient-to-br from-red-50 to-white rounded-3xl shadow-2xl p-12 border-2 border-red-100">
        <motion.div
          initial={{ scale: 0.9 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          className="inline-block bg-red-600 text-white px-8 py-3 rounded-full font-bold text-xl mb-8"
        >
          PROBLEM STATEMENT
        </motion.div>

        <div className="mb-10">
          <div className="flex items-center gap-4 mb-6">
            <AlertTriangle className="w-12 h-12 text-red-600" />
            <h3 className="text-3xl font-bold text-gray-900">
              Current Delivery Challenges
            </h3>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            The traditional delivery system faces significant obstacles that impact efficiency and user experience:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-red-600"
            >
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <problem.icon className="w-8 h-8 text-red-600" />
              </div>
              <h4 className="font-bold text-xl text-gray-900 mb-3">{problem.title}</h4>
              <p className="text-gray-600 leading-relaxed">{problem.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-10 bg-red-600 text-white p-6 rounded-2xl"
        >
          <p className="text-lg text-center font-medium">
            ⚠️ Success delivery rates are at risk without a unified, location-aware delivery management system
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
