import { motion } from 'motion/react';
import { FileText, Cog, Rocket, RotateCcw, CheckCircle2 } from 'lucide-react';

export function MethodologySection() {
  const phases = [
    { icon: FileText, label: 'Plan', description: 'Requirements gathering and analysis' },
    { icon: Cog, label: 'Collaborate', description: 'Team coordination and design' },
    { icon: Rocket, label: 'Release', description: 'Development and deployment' },
    { icon: RotateCcw, label: 'Daily Review', description: 'Continuous feedback and iteration' },
    { icon: CheckCircle2, label: 'Deliver', description: 'Final testing and handover' }
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
          METHODOLOGY
        </motion.div>

        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Agile Development Process
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We follow an iterative Agile methodology to ensure rapid development, continuous improvement, and stakeholder satisfaction
          </p>
        </div>

        {/* Circular Flow Diagram */}
        <div className="relative max-w-2xl mx-auto mb-12">
          <svg className="w-full h-auto" viewBox="0 0 400 400">
            {/* Circular arrows */}
            <motion.circle
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
              cx="200"
              cy="200"
              r="140"
              fill="none"
              stroke="#ef4444"
              strokeWidth="3"
              strokeDasharray="10 5"
            />
            
            {/* Center circle */}
            <circle cx="200" cy="200" r="60" fill="#ef4444" />
            <text x="200" y="195" textAnchor="middle" className="text-white font-bold text-sm" fill="white">AGILE</text>
            <text x="200" y="215" textAnchor="middle" className="text-white text-xs" fill="white">PROCESS</text>
          </svg>

          {/* Phases positioned around the circle */}
          <div className="absolute inset-0">
            {phases.map((phase, index) => {
              const angle = (index * 72 - 90) * (Math.PI / 180);
              const x = 50 + Math.cos(angle) * 35;
              const y = 50 + Math.sin(angle) * 35;
              
              return (
                <motion.div
                  key={index}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  style={{
                    position: 'absolute',
                    left: `${x}%`,
                    top: `${y}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                  className="flex flex-col items-center"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-full p-4 shadow-lg border-2 border-red-600 mb-2"
                  >
                    <phase.icon className="w-6 h-6 text-red-600" />
                  </motion.div>
                  <div className="text-center">
                    <p className="font-bold text-sm text-gray-900">{phase.label}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Phase Details */}
        <div className="grid md:grid-cols-5 gap-4 mt-16">
          {phases.map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:border-red-300 transition-all"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-red-600 font-bold text-sm">{index + 1}</span>
                </div>
                <h4 className="font-bold text-gray-900">{phase.label}</h4>
              </div>
              <p className="text-xs text-gray-600">{phase.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-8 bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-2xl border-l-4 border-red-600"
        >
          <p className="text-gray-700 text-center">
            <span className="font-bold text-red-600">Continuous Feedback Loop:</span> Each iteration incorporates user feedback to refine features and improve system performance
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
