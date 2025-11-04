import { Button } from './ui/button';
import { Card } from './ui/card';
import { motion } from 'motion/react';
import { Scissors, Sparkles, Palette, Briefcase, Droplet, Flower2, Waves, Hand, Heart } from 'lucide-react';

const services = [
  {
    title: 'Groom Services',
    description: 'Complete grooming packages for the modern gentleman',
    icon: Scissors,
    image: 'https://images.unsplash.com/photo-1588331299958-aa30ab1928e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW4lMjBiYXJiZXIlMjBncm9vbWluZ3xlbnwxfHx8fDE3NjIwOTI0ODR8MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    title: 'Beard Sculpting',
    description: 'Expert beard trimming and shaping services',
    icon: Sparkles,
    image: 'https://images.unsplash.com/photo-1603899968034-1a56ca48d172?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFyZCUyMGdyb29taW5nJTIwdHJpbXxlbnwxfHx8fDE3NjIwNjU1NTF8MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    title: 'Fashion Color',
    description: 'Trendy hair coloring and highlights',
    icon: Palette,
    image: 'https://images.unsplash.com/photo-1660505102581-85cffa4e6550?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGJlYXV0eSUyMHNhbG9ufGVufDF8fHx8MTc2MjA5MjQ4NHww&ixlib=rb-4.1.0&q=80&w=1080'
  },

  
 
  
];

export function ServicesOverview() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 
            className="mb-4"
            style={{ 
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(2rem, 4vw, 3rem)'
            }}
          >
            Smartcut Services
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
            Smartcut is the promise—the emotional connection that defines your confidence and style.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url('${service.image}')` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    </div>
                    <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {service.description}
                    </p>
                    <Button 
                      asChild
                      variant="outline"
                      className="w-full rounded-full group-hover:bg-gradient-to-r group-hover:from-[#D4AF37] group-hover:to-[#F4E5C3] group-hover:text-[#1a1a1a] group-hover:border-transparent transition-all duration-300"
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
  );
}
