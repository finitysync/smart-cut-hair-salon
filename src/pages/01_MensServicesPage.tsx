import { motion } from 'motion/react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Scissors, Sparkles, Palette, Wind, Droplets, Flame } from 'lucide-react';

const services = [
  {
    icon: Scissors,
    title: 'Classic Haircut',
    description: 'Timeless cuts tailored to your face shape and lifestyle',
    duration: '30-45 mins',
    price: 'From PKR 800',
    image: 'https://images.unsplash.com/photo-1588331299958-aa30ab1928e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW4lMjBiYXJiZXIlMjBncm9vbWluZ3xlbnwxfHx8fDE3NjIwOTI0ODR8MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    icon: Sparkles,
    title: 'Beard Grooming & Sculpting',
    description: 'Expert beard trimming, shaping, and maintenance',
    duration: '20-30 mins',
    price: 'From PKR 500',
    image: 'https://images.unsplash.com/photo-1603899968034-1a56ca48d172?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFyZCUyMGdyb29taW5nJTIwdHJpbXxlbnwxfHx8fDE3NjIwNjU1NTF8MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    icon: Palette,
    title: 'Hair Color & Highlights',
    description: 'Contemporary coloring techniques for a modern look',
    duration: '60-90 mins',
    price: 'From PKR 2,500',
    image: 'https://images.unsplash.com/photo-1759134198561-e2041049419c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJiZXJzaG9wJTIwaW50ZXJpb3IlMjBtb2Rlcm58ZW58MXx8fHwxNzYyMDMxMTE1fDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    icon: Wind,
    title: 'Hair Styling',
    description: 'Professional styling for any occasion',
    duration: '15-25 mins',
    price: 'From PKR 600',
    image: 'https://images.unsplash.com/photo-1761931403667-a6753db21f32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoYWlyY3V0JTIwc3R5bGluZ3xlbnwxfHx8fDE3NjIwOTI0ODR8MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    icon: Droplets,
    title: 'Men\'s Facial',
    description: 'Deep cleansing and rejuvenating facial treatment',
    duration: '45-60 mins',
    price: 'From PKR 1,500',
    image: 'https://images.unsplash.com/photo-1531299204812-e6d44d9a185c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWNpYWwlMjBza2luY2FyZSUyMHRyZWF0bWVudHxlbnwxfHx8fDE3NjIwOTI0ODV8MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    icon: Flame,
    title: 'Hot Towel Shave',
    description: 'Traditional luxury shaving experience',
    duration: '30 mins',
    price: 'From PKR 700',
    image: 'https://images.unsplash.com/photo-1758518727888-ffa196002e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25maWRlbnQlMjBwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjIwNzAyNTZ8MA&ixlib=rb-4.1.0&q=80&w=1080'
  }
];

const packages = [
  {
    name: 'Executive Grooming',
    services: ['Haircut', 'Beard Trim', 'Facial', 'Head Massage'],
    price: 'PKR 3,500',
    popular: true
  },
  {
    name: 'Quick Refresh',
    services: ['Haircut', 'Beard Trim', 'Styling'],
    price: 'PKR 1,800',
    popular: false
  },
  {
    name: 'Complete Makeover',
    services: ['Haircut', 'Color', 'Beard Sculpting', 'Facial', 'Styling'],
    price: 'PKR 5,500',
    popular: false
  }
];

export function MensServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1588331299958-aa30ab1928e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW4lMjBiYXJiZXIlMjBncm9vbWluZ3xlbnwxfHx8fDE3NjIwOTI0ODR8MA&ixlib=rb-4.1.0&q=80&w=1080')`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 
              className="text-white mb-4"
              style={{ 
                fontFamily: 'Playfair Display, serif',
                fontSize: 'clamp(2.5rem, 5vw, 4rem)'
              }}
            >
              Men's Grooming Services
            </h1>
            <p className="text-white/90 text-xl max-w-2xl mx-auto">
              Real grace comes from proper grooming
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 
              className="mb-4"
              style={{ 
                fontFamily: 'Playfair Display, serif',
                fontSize: 'clamp(2rem, 4vw, 3rem)'
              }}
            >
              Our Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our comprehensive range of grooming services designed for the modern gentleman
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 h-full group">
                    <div className="relative h-48 overflow-hidden">
                      <div 
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                        style={{ backgroundImage: `url('${service.image}')` }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                      </div>
                      <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                      <div className="flex items-center justify-between text-sm mb-4">
                        <span className="text-gray-500">{service.duration}</span>
                        <span style={{ color: '#D4AF37' }}>{service.price}</span>
                      </div>
                      <Button 
                        asChild
                        className="w-full rounded-full"
                        style={{ 
                          background: 'linear-gradient(135deg, #D4AF37 0%, #F4E5C3 100%)',
                          color: '#1a1a1a'
                        }}
                      >
                        <a href="/booking">Book Now</a>
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 
              className="mb-4"
              style={{ 
                fontFamily: 'Playfair Display, serif',
                fontSize: 'clamp(2rem, 4vw, 3rem)'
              }}
            >
              Premium Packages
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Save more with our specially curated grooming packages
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className={`p-8 h-full relative overflow-hidden ${
                  pkg.popular ? 'border-2' : 'border-0'
                }`}
                style={{ 
                  borderColor: pkg.popular ? '#D4AF37' : 'transparent',
                  background: pkg.popular 
                    ? 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)' 
                    : '#1a1a1a'
                }}
                >
                  {pkg.popular && (
                    <div 
                      className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs"
                      style={{ backgroundColor: '#D4AF37', color: '#1a1a1a' }}
                    >
                      Popular
                    </div>
                  )}
                  <h3 className="text-white mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {pkg.name}
                  </h3>
                  <div className="text-3xl mb-6" style={{ color: '#D4AF37', fontFamily: 'Playfair Display, serif' }}>
                    {pkg.price}
                  </div>
                  <ul className="space-y-3 mb-8">
                    {pkg.services.map((service) => (
                      <li key={service} className="flex items-center gap-2 text-white/80">
                        <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#D4AF37' }}></div>
                        {service}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    asChild
                    className="w-full rounded-full"
                    variant={pkg.popular ? "default" : "outline"}
                    style={pkg.popular ? { 
                      background: 'linear-gradient(135deg, #D4AF37 0%, #F4E5C3 100%)',
                      color: '#1a1a1a'
                    } : { borderColor: '#D4AF37', color: '#D4AF37' }}
                  >
                    <a href="/booking">Select Package</a>
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
