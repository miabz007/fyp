import { motion } from 'motion/react';
import { Route, Map, Users, Zap } from 'lucide-react';

export function AlgorithmSection() {
  const algorithms = [
    {
      title: 'TSP - Nearest Neighbour',
      subtitle: 'Heuristic Algorithm',
      description: 'Iteratively selects the closest unvisited delivery destination based on geographical distance calculated using latitude and longitude coordinates - O(n² log n)',
      icon: Route,
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Round-Robin Load Balancing',
      subtitle: 'Combined with Zone-Based Partitioning',
      description: 'Group delivery destinations according to their geographical zones. Round-Robin Scheduling algorithm is used to distribute delivery batches among available drivers within the same zone',
      icon: Users,
      color: 'from-purple-500 to-purple-600'
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
          ALGORITHM
        </motion.div>

        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Intelligent Route Optimization
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            SwiftDrop leverages advanced algorithms to ensure the most efficient delivery routes and balanced workload distribution
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {algorithms.map((algorithm, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-white rounded-2xl border-2 border-gray-200 hover:border-red-300 transition-all group"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${algorithm.color} opacity-10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500`} />
              
              <div className="relative p-8">
                <div className={`w-16 h-16 bg-gradient-to-br ${algorithm.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg`}>
                  <algorithm.icon className="w-8 h-8 text-white" />
                </div>
                
                <h4 className="font-bold text-2xl text-gray-900 mb-2">{algorithm.title}</h4>
                <p className="text-sm text-red-600 font-semibold mb-4">{algorithm.subtitle}</p>
                <p className="text-gray-600 leading-relaxed">{algorithm.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Visual representation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 rounded-2xl p-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-around gap-8">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mb-4 mx-auto shadow-xl">
                <Map className="w-12 h-12 text-white" />
              </div>
              <h5 className="font-bold text-lg text-gray-900 mb-2">Geographic Analysis</h5>
              <p className="text-sm text-gray-600">Lat/Long coordinates for precision</p>
            </div>

            <motion.div
              animate={{ x: [0, 20, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="hidden md:block"
            >
              <Zap className="w-12 h-12 text-red-600" />
            </motion.div>

            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mb-4 mx-auto shadow-xl">
                <Route className="w-12 h-12 text-white" />
              </div>
              <h5 className="font-bold text-lg text-gray-900 mb-2">Optimized Routes</h5>
              <p className="text-sm text-gray-600">Minimal distance & time</p>
            </div>

            <motion.div
              animate={{ x: [0, 20, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              className="hidden md:block"
            >
              <Zap className="w-12 h-12 text-red-600" />
            </motion.div>

            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-4 mx-auto shadow-xl">
                <Users className="w-12 h-12 text-white" />
              </div>
              <h5 className="font-bold text-lg text-gray-900 mb-2">Load Distribution</h5>
              <p className="text-sm text-gray-600">Balanced workload across drivers</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
