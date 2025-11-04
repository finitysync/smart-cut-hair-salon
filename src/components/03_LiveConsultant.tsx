import { Button } from './ui/button';
import { motion } from 'motion/react';
import { Video, Users, MessageCircle } from 'lucide-react';

export function LiveConsultant() {
  return (
    <section className="py-20 bg-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(212, 175, 55, 0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-[#D4AF37]/20 px-4 py-2 rounded-full mb-6">
              <Video className="w-5 h-5" style={{ color: '#D4AF37' }} />
              <span style={{ color: '#D4AF37' }}>Live Sessions Available</span>
            </div>

            <h2 
              className="mb-6"
              style={{ 
                fontFamily: 'Playfair Display, serif',
                fontSize: 'clamp(2rem, 4vw, 3rem)'
              }}
            >
              Smartcut Live Consultant Services
            </h2>

            <p className="text-xl mb-8 text-gray-300" style={{ fontFamily: 'Inter, sans-serif' }}>
              Interactive ONE 2 ONE sessions with our expert stylists and beauticians. 
              Get personalized advice and consultations from the comfort of your home.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {[
                { icon: Video, title: 'Video Consultation', desc: 'Face-to-face expert advice' },
                { icon: Users, title: 'Personal Stylist', desc: 'Dedicated beauty expert' },
                { icon: MessageCircle, title: 'Real-time Chat', desc: 'Instant style guidance' }
              ].map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-300"
                  >
                    <Icon className="w-10 h-10 mb-3 mx-auto" style={{ color: '#D4AF37' }} />
                    <h3 className="mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-400">{feature.desc}</p>
                  </motion.div>
                );
              })}
            </div>

            <Button 
              asChild
              size="lg"
              className="rounded-full px-8 py-6 transition-all duration-300 hover:scale-105"
              style={{ 
                background: 'linear-gradient(135deg, #D4AF37 0%, #F4E5C3 100%)',
                color: '#1a1a1a',
                fontSize: '1.125rem'
              }}
            >
              <a href="/booking">Book Consultation</a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
