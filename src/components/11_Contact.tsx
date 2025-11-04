import { Button } from './ui/button';
import { Card } from './ui/card';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      value: '0322-7999771',
      link: 'tel:03227999771'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'info@smartcutofficial.co',
      link: 'mailto:info@smartcutofficial.co'
    },
    {
      icon: MapPin,
      title: 'Address',
      value: '15-Q Model Town Link Road, Lahore',
      link: 'https://maps.google.com'
    },
    {
      icon: Clock,
      title: 'Hours',
      value: 'Mon - Sun: 10:00 AM - 10:00 PM',
      link: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 
            className="mb-4"
            style={{ 
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(2rem, 4vw, 3rem)'
            }}
          >
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
            What are you waiting for?
          </p>
          <p className="text-2xl mb-8" style={{ fontFamily: 'Playfair Display, serif', color: '#D4AF37' }}>
            Make your online booking now.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="p-6 h-full hover:shadow-xl transition-all duration-300 border-0 bg-white">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#F4E5C3] flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-[#1a1a1a]" />
                    </div>
                    <h3 className="mb-2 text-sm text-gray-500">{info.title}</h3>
                    {info.link ? (
                      <a 
                        href={info.link}
                        className="hover:opacity-70 transition-opacity"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p>{info.value}</p>
                    )}
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 lg:p-12 border-0 shadow-2xl bg-gradient-to-br from-black to-[#1a1a1a] text-white relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, rgba(212, 175, 55, 0.3) 1px, transparent 0)`,
                  backgroundSize: '30px 30px'
                }}></div>
              </div>

              <div className="relative z-10">
                <h3 
                  className="mb-4 text-white"
                  style={{ 
                    fontFamily: 'Playfair Display, serif',
                    fontSize: 'clamp(1.5rem, 3vw, 2rem)'
                  }}
                >
                  Ready to Transform Your Look?
                </h3>
                <p className="text-white/80 mb-8">
                  Book your appointment now and experience the finest grooming and beauty services 
                  in Pakistan. Our expert team is ready to bring out your best self.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#D4AF37' }}></div>
                    <span>Professional & Certified Staff</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#D4AF37' }}></div>
                    <span>Premium Products & Equipment</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#D4AF37' }}></div>
                    <span>Luxury Salon Environment</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#D4AF37' }}></div>
                    <span>Personalized Service</span>
                  </div>
                </div>

                <Button 
                  asChild
                  size="lg"
                  className="w-full rounded-full py-6"
                  style={{ 
                    background: 'linear-gradient(135deg, #D4AF37 0%, #F4E5C3 100%)',
                    color: '#1a1a1a',
                    fontSize: '1.125rem'
                  }}
                >
                  <a href="/booking">Book Now</a>
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
