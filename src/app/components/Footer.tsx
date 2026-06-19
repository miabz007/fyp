import { motion } from 'motion/react';
import { Mail, Award, Calendar, Github, Linkedin } from 'lucide-react';

export function Footer() {
  const badges = [
    'https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=100&h=50&fit=crop',
    'https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=100&h=50&fit=crop',
    'https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=100&h=50&fit=crop'
  ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="w-full max-w-6xl mx-auto px-6 py-12 mt-20"
    >
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl shadow-2xl p-12 text-white">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Project Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-white">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <div className="font-bold text-xl">
                  <span className="text-red-500">Swift</span>
                  <span className="text-white">Drop</span>
                </div>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              A Real-Time Location Synchronized Delivery Optimization and Tracking System developed as a Final Year Project.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Mail className="w-5 h-5 text-red-500" />
              Contact
            </h4>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-gray-400">Student</p>
                <p className="font-medium">MUHAMAD 'IRFAN 'ADLIE BIN ZAINUDIN</p>
                <a href="mailto:077224@putra.unisza.edu.my" className="text-red-400 hover:text-red-300">
                  077224@putra.unisza.edu.my
                </a>
              </div>
              <div>
                <p className="text-gray-400">Supervisor</p>
                <p className="font-medium">DR ONG YEW CHUAN</p>
                <a href="mailto:yewchuan@unisza.edu.my" className="text-red-400 hover:text-red-300">
                  yewchuan@unisza.edu.my
                </a>
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div>
            <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-red-500" />
              Project Details
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-gray-400" />
                <span className="text-gray-300">FYP Showcase 2026</span>
              </div>
              <div>
                <p className="text-gray-400 mb-1">Institution</p>
                <p className="font-medium">Faculty of Informatics and Computing</p>
                <p className="text-gray-300">Universiti Sultan Zainal Abidin</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <span className="text-sm text-gray-400">Supported by:</span>
            {badges.map((badge, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="bg-white rounded-lg p-2 h-10 flex items-center"
              >
                <img src={badge} alt={`Badge ${index + 1}`} className="h-full w-auto object-contain opacity-70" />
              </motion.div>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="#"
              className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
            >
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="#"
              className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
          </div>
        </div>

        <div className="text-center mt-8 pt-8 border-t border-gray-700">
          <p className="text-sm text-gray-400">
            © 2026 SwiftDrop. All rights reserved. | Final Year Project Showcase
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
