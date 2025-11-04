import { motion } from 'motion/react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Sparkles, Scissors, Palette, Hand, Flame, Flower2 } from 'lucide-react';

const services = [
  {
    icon: Scissors,
    title: 'Hair Styling & Cut',
    description: 'Expert cuts and styling for all hair types',
    duration: '45-60 mins',
    price: 'From PKR 1,200',
    image: 'https://images.unsplash.com/photo-1660505102581-85cffa4e6550?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGJlYXV0eSUyMHNhbG9ufGVufDF8fHx8MTc2MjA5MjQ4NHww&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    icon: Palette,
    title: 'Hair Color & Highlights',
    description: 'Vibrant colors and natural-looking highlights',
    duration: '90-120 mins',
    price: 'From PKR 3,500',
    image: 'https://images.unsplash.com/photo-1626379501846-0df4067b8bb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwc2Fsb24lMjBjaGFpcnxlbnwxfHx8fDE3NjIwMzMxODZ8MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    icon: Flower2,
    title: 'Facial Treatments',
    description: 'Luxury facial treatments for glowing skin',
    duration: '60-75 mins',
    price: 'From PKR 2,000',
    image: 'https://images.unsplash.com/photo-1531299204812-e6d44d9a185c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWNpYWwlMjBza2luY2FyZSUyMHRyZWF0bWVudHxlbnwxfHx8fDE3NjIwOTI0ODV8MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    icon: Hand,
    title: 'Manicure & Pedicure',
    description: 'Complete nail care and beautification',
    duration: '45-60 mins',
    price: 'From PKR 1,500',
    image: 'https://images.unsplash.com/photo-1634235421135-16ebd88c13c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW5pY3VyZSUyMHBlZGljdXJlJTIwbmFpbHN8ZW58MXx8fHwxNzYyMDUyNjE5fDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    icon: Sparkles,
    title: 'Makeup & Styling',
    description: 'Professional makeup for any occasion',
    duration: '60-90 mins',
    price: 'From PKR 2,500',
    image: 'https://images.unsplash.com/photo-1608979048467-6194dabc6a3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBibG9nJTIwbWFrZXVwfGVufDF8fHx8MTc2MjA5Mjg4MHww&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    icon: Flame,
    title: 'Threading & Waxing',
    description: 'Gentle hair removal services',
    duration: '20-40 mins',
    price: 'From PKR 500',
    image: 'https://images.unsplash.com/photo-1662519951774-e8f89ea1200a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGElMjB0cmVhdG1lbnQlMjByb29tfGVufDF8fHx8MTc2MTk4Mjk0MXww&ixlib=rb-4.1.0&q=80&w=1080'
  }
];

const packages = [
  {
    name: 'Beauty Essential',
    services: ['Haircut', 'Blowdry', 'Basic Facial', 'Threading'],
    price: 'PKR 3,000',
    popular: false
  },
  {
    name: 'Glamour Package',
    services: ['Hair Styling', 'Makeup', 'Manicure', 'Pedicure', 'Facial'],
    price: 'PKR 6,500',
    popular: true
  },
  {
    name: 'Luxury Spa Day',
    services: ['Hair Color', 'Premium Facial', 'Full Body Massage', 'Manicure & Pedicure', 'Makeup'],
    price: 'PKR 12,000',
    popular: false
  }
];

export function LadiesServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1660505102581-85cffa4e6550?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGJlYXV0eSUyMHNhbG9ufGVufDF8fHx8MTc2MjA5MjQ4NHww&ixlib=rb-4.1.0&q=80&w=1080')`
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
              Ladies' Beauty Services
            </h1>
            <p className="text-white/90 text-xl max-w-2xl mx-auto">
              A fresh manicure and pedicure can lift your spirits
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
              Indulge in our comprehensive beauty services designed for the modern woman
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
                  <Card className="overflow-hidden border-0 flex justify-between shadow-lg hover:shadow-2xl transition-all duration-300 h-full group">
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
              Beauty Packages
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Pamper yourself with our specially curated beauty packages
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
                <Card className={`p-8 h-full flex justify-between relative overflow-hidden ${
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
                    } : { borderColor: '#D4AF37', color: '#000' }}
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
