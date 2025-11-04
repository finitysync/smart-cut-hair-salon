import { motion } from 'motion/react';
import { Target, Award, TrendingUp } from 'lucide-react';

export function Mission() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div 
                  className="aspect-[3/4] rounded-2xl bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1681965823525-b684fb97e9fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzYWxvbiUyMGludGVyaW9yfGVufDF8fHx8MTc2MTk5MzgwN3ww&ixlib=rb-4.1.0&q=80&w=1080')`
                  }}
                ></div>
                <div 
                  className="aspect-square rounded-2xl bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1758518727888-ffa196002e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25maWRlbnQlMjBwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjIwNzAyNTZ8MA&ixlib=rb-4.1.0&q=80&w=1080')`
                  }}
                ></div>
              </div>
              <div className="space-y-4 pt-12">
                <div 
                  className="aspect-square rounded-2xl bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1531299204812-e6d44d9a185c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWNpYWwlMjBza2luY2FyZSUyMHRyZWF0bWVudHxlbnwxfHx8fDE3NjIwOTI0ODV8MA&ixlib=rb-4.1.0&q=80&w=1080')`
                  }}
                ></div>
                <div 
                  className="aspect-[3/4] rounded-2xl bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1559185590-d545a0c5a1dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBhY2FkZW15JTIwdHJhaW5pbmd8ZW58MXx8fHwxNzYyMDkyNDg2fDA&ixlib=rb-4.1.0&q=80&w=1080')`
                  }}
                ></div>
              </div>
            </div>
            
            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-2xl p-6 max-w-[200px]"
            >
              <div className="flex items-center gap-2 mb-2">
                <Award className="w-6 h-6" style={{ color: '#D4AF37' }} />
                <span className="font-medium">Excellence</span>
              </div>
              <p className="text-sm text-gray-600">Trusted by 1000+ clients</p>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-2 bg-black/5 rounded-full mb-4">
              <span style={{ color: '#D4AF37' }}>About Smart Cut Official</span>
            </div>
            
            <h2 
              className="mb-6"
              style={{ 
                fontFamily: 'Playfair Display, serif',
                fontSize: 'clamp(2rem, 4vw, 3rem)'
              }}
            >
              Our Mission & Vision
            </h2>

            <p className="text-lg text-gray-600 mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
              Our mission is to expand Smartcut throughout Pakistan to dominate the fashion industry 
              and help our artists gain global recognition.
            </p>

            <div className="space-y-6 mb-8">
              {[
                {
                  icon: Target,
                  title: 'Our Goal',
                  desc: 'To become Pakistan\'s leading salon chain, setting new standards in beauty and grooming excellence.'
                },
                {
                  icon: Award,
                  title: 'Our Commitment',
                  desc: 'Providing world-class services with certified professionals and premium products.'
                },
                {
                  icon: TrendingUp,
                  title: 'Our Growth',
                  desc: 'Expanding across Pakistan while nurturing local talent and bringing international trends.'
                }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#F4E5C3] flex items-center justify-center">
                      <Icon className="w-6 h-6 text-[#1a1a1a]" />
                    </div>
                    <div>
                      <h3 className="mb-1">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
