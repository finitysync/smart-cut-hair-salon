import { motion } from 'motion/react';
import { Trophy, MapPin, Users, Calendar } from 'lucide-react';

export function Statistics() {
  const stats = [
    {
      icon: Calendar,
      value: '5+',
      label: 'Years of Experience',
      desc: 'Industry excellence'
    },
    {
      icon: MapPin,
      value: '15+',
      label: 'Branches',
      desc: 'Across Pakistan'
    },
    {
      icon: Users,
      value: '1000+',
      label: 'Happy Clients',
      desc: 'Satisfied customers'
    },
    {
      icon: Trophy,
      value: '100+',
      label: 'Awards',
      desc: 'Industry recognition'
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden" style={{ backgroundColor: '#1a1a1a' }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(212, 175, 55, 0.5) 1px, transparent 0)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 
            className="text-white mb-4"
            style={{ 
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(2rem, 4vw, 3rem)'
            }}
          >
            Our Achievements
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Numbers that speak for our commitment to excellence and customer satisfaction
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#F4E5C3] mb-4">
                  <Icon className="w-8 h-8 text-[#1a1a1a]" />
                </div>
                <motion.div
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                >
                  <div 
                    className="text-5xl mb-2"
                    style={{ 
                      color: '#D4AF37',
                      fontFamily: 'Playfair Display, serif'
                    }}
                  >
                    {stat.value}
                  </div>
                  <h3 className="text-white mb-1">{stat.label}</h3>
                  <p className="text-white/60 text-sm">{stat.desc}</p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
