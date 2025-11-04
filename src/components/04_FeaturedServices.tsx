import { Button } from './ui/button';
import { motion } from 'motion/react';

export function FeaturedServices() {
  return (
    <section id="mens" className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Men's Services */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-block px-4 py-2 bg-black/5 rounded-full mb-4">
                <span style={{ color: '#D4AF37' }}>For Gentlemen</span>
              </div>
              <h2 
                className="mb-4"
                style={{ 
                  fontFamily: 'Playfair Display, serif',
                  fontSize: 'clamp(2rem, 4vw, 3rem)'
                }}
              >
                Men's Services
              </h2>
              <p className="text-xl mb-6 text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                Real grace comes from proper grooming.
              </p>
              <p className="text-gray-600 mb-8">
                Experience premium grooming services tailored for the modern gentleman. From classic haircuts 
                to contemporary styling, beard sculpting, and executive grooming packages designed to elevate 
                your confidence.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  'Classic & Contemporary Haircuts',
                  'Beard Trimming & Styling',
                  'Hair Color & Highlights',
                  'Executive Grooming Packages',
                  'Head & Neck Massage'
                ].map((service, index) => (
                  <motion.div
                    key={service}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#D4AF37' }}></div>
                    <span>{service}</span>
                  </motion.div>
                ))}
              </div>
              <Button 
                asChild
                size="lg"
                className="rounded-full px-8"
                style={{ 
                  background: 'linear-gradient(135deg, #D4AF37 0%, #F4E5C3 100%)',
                  color: '#1a1a1a'
                }}
              >
                <a href="/services/mens">Explore Men's Services</a>
              </Button>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div 
                  className="aspect-[4/5] bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1588331299958-aa30ab1928e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW4lMjBiYXJiZXIlMjBncm9vbWluZ3xlbnwxfHx8fDE3NjIwOTI0ODR8MA&ixlib=rb-4.1.0&q=80&w=1080')`
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Ladies' Services */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          id="ladies"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div 
                  className="aspect-[4/5] bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1660505102581-85cffa4e6550?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGJlYXV0eSUyMHNhbG9ufGVufDF8fHx8MTc2MjA5MjQ4NHww&ixlib=rb-4.1.0&q=80&w=1080')`
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
              </div>
            </motion.div>
            <div>
              <div className="inline-block px-4 py-2 bg-black/5 rounded-full mb-4">
                <span style={{ color: '#D4AF37' }}>For Ladies</span>
              </div>
              <h2 
                className="mb-4"
                style={{ 
                  fontFamily: 'Playfair Display, serif',
                  fontSize: 'clamp(2rem, 4vw, 3rem)'
                }}
              >
                Ladies' Services
              </h2>
              <p className="text-xl mb-6 text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                A fresh manicure and pedicure can lift your spirits.
              </p>
              <p className="text-gray-600 mb-8">
                Indulge in our comprehensive beauty services designed for the modern woman. From stunning 
                hairstyles to radiant facials, luxurious manicures, and complete makeover packages that 
                celebrate your natural beauty.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  'Hair Styling & Color',
                  'Facial & Skincare Treatments',
                  'Manicure & Pedicure',
                  'Makeup & Makeover',
                  'Threading & Waxing'
                ].map((service, index) => (
                  <motion.div
                    key={service}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#D4AF37' }}></div>
                    <span>{service}</span>
                  </motion.div>
                ))}
              </div>
              <Button 
                asChild
                size="lg"
                className="rounded-full px-8"
                style={{ 
                  background: 'linear-gradient(135deg, #D4AF37 0%, #F4E5C3 100%)',
                  color: '#1a1a1a'
                }}
              >
                <a href="/services/ladies">Explore Ladies' Services</a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
