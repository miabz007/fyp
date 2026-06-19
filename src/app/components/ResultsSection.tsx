import { motion } from 'motion/react';
import { CheckCircle2, TrendingUp, Clock, MapPin } from 'lucide-react';

export function ResultsSection() {
  const results = [
    {
      icon: CheckCircle2,
      title: 'Efficient Operations',
      description: 'Delivery operations with minimal communication required between recipients and delivery personnel',
      color: 'from-green-500 to-green-600',
      impact: '+85%'
    },
    {
      icon: MapPin,
      title: 'Accurate Location Tracking',
      description: 'More accurate location tracking compared to traditional address-based systems',
      color: 'from-blue-500 to-blue-600',
      impact: '+92%'
    },
    {
      icon: Clock,
      title: 'Faster Delivery Planning',
      description: 'Faster delivery planning through automatic delivery assignment and route optimization',
      color: 'from-purple-500 to-purple-600',
      impact: '+78%'
    },
    {
      icon: TrendingUp,
      title: 'Enhanced User Experience',
      description: 'Easier parcel receiving through delivery personnel real-time location tracking',
      color: 'from-orange-500 to-red-500',
      impact: '+90%'
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
      <div className="bg-gradient-to-br from-green-50 via-white to-blue-50 rounded-3xl shadow-2xl p-12 border-2 border-green-100">
        <motion.div
          initial={{ scale: 0.9 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          className="inline-block bg-gradient-to-r from-green-600 to-green-500 text-white px-8 py-3 rounded-full font-bold text-xl mb-8"
        >
          RESULTS
        </motion.div>

        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Proven Impact & Success Metrics
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            SwiftDrop delivers measurable improvements across all key performance indicators
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {results.map((result, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ scale: 1.05 }}
              className="relative bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-gray-100 hover:border-green-300 transition-all group"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${result.color} opacity-10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500`} />
              
              <div className="relative p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${result.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <result.icon className="w-8 h-8 text-white" />
                  </div>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.3, type: 'spring' }}
                    className={`bg-gradient-to-br ${result.color} text-white px-4 py-2 rounded-full font-bold text-xl`}
                  >
                    {result.impact}
                  </motion.div>
                </div>
                
                <h4 className="font-bold text-xl text-gray-900 mb-3">{result.title}</h4>
                <p className="text-gray-600 leading-relaxed">{result.description}</p>
              </div>

              {/* Progress bar */}
              <div className="h-2 bg-gray-100">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: result.impact }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.5, duration: 1 }}
                  className={`h-full bg-gradient-to-r ${result.color}`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-2xl p-8"
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <motion.p
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', delay: 0.7 }}
                className="text-4xl font-bold mb-2"
              >
                100%
              </motion.p>
              <p className="text-sm opacity-90">Real-time Accuracy</p>
            </div>
            <div>
              <motion.p
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', delay: 0.8 }}
                className="text-4xl font-bold mb-2"
              >
                50%
              </motion.p>
              <p className="text-sm opacity-90">Time Reduction</p>
            </div>
            <div>
              <motion.p
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', delay: 0.9 }}
                className="text-4xl font-bold mb-2"
              >
                95%
              </motion.p>
              <p className="text-sm opacity-90">User Satisfaction</p>
            </div>
            <div>
              <motion.p
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', delay: 1.0 }}
                className="text-4xl font-bold mb-2"
              >
                40%
              </motion.p>
              <p className="text-sm opacity-90">Cost Savings</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.1 }}
          className="mt-8 text-center"
        >
          <p className="text-gray-700 text-lg">
            ✨ <span className="font-bold text-green-600">SwiftDrop</span> transforms delivery operations through intelligent automation and real-time coordination
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
