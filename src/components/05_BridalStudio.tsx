import { Button } from './ui/button';
import { motion } from 'motion/react';
import { Crown, Camera, Sparkles } from 'lucide-react';

export function BridalStudio() {
  return (
    <section id="studio" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Bridal Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="relative rounded-3xl overflow-hidden">
            <div 
              className="h-[500px] bg-cover bg-center relative"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1629238135877-dae437cf0fdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlkYWwlMjBtYWtldXAlMjBoYWlyfGVufDF8fHx8MTc2MjA5MjQ4NXww&ixlib=rb-4.1.0&q=80&w=1080')`
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
              
              <div className="relative h-full flex items-center">
                <div className="max-w-2xl px-8 lg:px-16">
                  <div className="flex items-center gap-2 mb-4">
                    <Crown className="w-8 h-8" style={{ color: '#D4AF37' }} />
                    <span className="text-white/80">Premium Package</span>
                  </div>
                  <h2 
                    className="text-white mb-4"
                    style={{ 
                      fontFamily: 'Playfair Display, serif',
                      fontSize: 'clamp(2rem, 4vw, 3rem)'
                    }}
                  >
                    Smartcut Bridal Services
                  </h2>
                  <p className="text-white/90 text-lg mb-8">
                    Make your special day unforgettable with our exclusive bridal and groom packages. 
                    Complete makeover services including hair styling, makeup, skincare, and pre-wedding treatments.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button 
                      asChild
                      size="lg"
                      className="rounded-full px-8"
                      style={{ 
                        background: 'linear-gradient(135deg, #D4AF37 0%, #F4E5C3 100%)',
                        color: '#1a1a1a'
                      }}
                    >
                      <a href="/pricing#bridal">Discover Bridal Services</a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Studio Shoots */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-black/5 px-4 py-2 rounded-full mb-4">
              <Camera className="w-5 h-5" style={{ color: '#D4AF37' }} />
              <span style={{ color: '#D4AF37' }}>Studio Portfolio</span>
            </div>
            <h2 
              className="mb-4"
              style={{ 
                fontFamily: 'Playfair Display, serif',
                fontSize: 'clamp(2rem, 4vw, 3rem)'
              }}
            >
              Studio Shoots
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Witness stunning transformations and professional makeovers from our expert team
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              'https://images.unsplash.com/photo-1629238135877-dae437cf0fdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlkYWwlMjBtYWtldXAlMjBoYWlyfGVufDF8fHx8MTc2MjA5MjQ4NXww&ixlib=rb-4.1.0&q=80&w=1080',
              'https://images.unsplash.com/photo-1660505102581-85cffa4e6550?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGJlYXV0eSUyMHNhbG9ufGVufDF8fHx8MTc2MjA5MjQ4NHww&ixlib=rb-4.1.0&q=80&w=1080',
              'https://images.unsplash.com/photo-1634235421135-16ebd88c13c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW5pY3VyZSUyMHBlZGljdXJlJTIwbmFpbHN8ZW58MXx8fHwxNzYyMDUyNjE5fDA&ixlib=rb-4.1.0&q=80&w=1080',
              'https://images.unsplash.com/photo-1588331299958-aa30ab1928e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW4lMjBiYXJiZXIlMjBncm9vbWluZ3xlbnwxfHx8fDE3NjIwOTI0ODR8MA&ixlib=rb-4.1.0&q=80&w=1080'
            ].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url('${image}')` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="rounded-full px-8 hover:bg-black hover:text-white transition-all duration-300"
            >
              <a href="/studio">View Full Portfolio</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
