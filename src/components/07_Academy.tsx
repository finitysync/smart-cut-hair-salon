import { Button } from './ui/button';
import { Card } from './ui/card';
import { motion } from 'motion/react';
import { GraduationCap, BookOpen, Award, Users } from 'lucide-react';

export function Academy() {
  const courses = [
    { title: 'Hair Styling & Cutting', duration: '6 Months', level: 'Professional' },
    { title: 'Beauty Therapy', duration: '4 Months', level: 'Certified' },
    { title: 'Skin Treatments', duration: '3 Months', level: 'Advanced' },
    { title: 'Bridal Makeup', duration: '2 Months', level: 'Specialized' }
  ];

  return (
    <section id="academy" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-black/5 px-4 py-2 rounded-full mb-4">
              <GraduationCap className="w-5 h-5" style={{ color: '#D4AF37' }} />
              <span style={{ color: '#D4AF37' }}>Professional Training</span>
            </div>

            <h2 
              className="mb-4"
              style={{ 
                fontFamily: 'Playfair Display, serif',
                fontSize: 'clamp(2rem, 4vw, 3rem)'
              }}
            >
              Smartcut Academy
            </h2>

            <p className="text-lg text-gray-600 mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
              Providing City & Guild diplomas in hair, beauty, and skin therapies. Join our academy 
              and learn from industry experts with hands-on training and internationally recognized certifications.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { icon: Award, label: 'City & Guild Certified' },
                { icon: Users, label: 'Expert Instructors' },
                { icon: BookOpen, label: 'Practical Training' },
                { icon: GraduationCap, label: 'Career Support' }
              ].map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm"
                  >
                    <Icon className="w-5 h-5" style={{ color: '#D4AF37' }} />
                    <span className="text-sm">{feature.label}</span>
                  </motion.div>
                );
              })}
            </div>

            {/* Courses List */}
            <div className="space-y-3 mb-8">
              {courses.map((course, index) => (
                <motion.div
                  key={course.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-100 hover:border-[#D4AF37]/30 transition-colors"
                >
                  <div>
                    <h4 className="mb-1">{course.title}</h4>
                    <p className="text-sm text-gray-500">{course.level} Level</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm" style={{ color: '#D4AF37' }}>{course.duration}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex gap-4">
              <Button 
                asChild
                size="lg"
                className="rounded-full px-8"
                style={{ 
                  background: 'linear-gradient(135deg, #D4AF37 0%, #F4E5C3 100%)',
                  color: '#1a1a1a'
                }}
              >
                <a href="/courses">Explore Courses</a>
              </Button>
            </div>
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div 
                className="aspect-[4/5] bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1559185590-d545a0c5a1dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBhY2FkZW15JTIwdHJhaW5pbmd8ZW58MXx8fHwxNzYyMDkyNDg2fDA&ixlib=rb-4.1.0&q=80&w=1080')`
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>

              {/* Stats Overlay */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-6">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl mb-1" style={{ color: '#D4AF37', fontFamily: 'Playfair Display, serif' }}>500+</div>
                    <div className="text-xs text-gray-600">Graduates</div>
                  </div>
                  <div>
                    <div className="text-2xl mb-1" style={{ color: '#D4AF37', fontFamily: 'Playfair Display, serif' }}>15+</div>
                    <div className="text-xs text-gray-600">Courses</div>
                  </div>
                  <div>
                    <div className="text-2xl mb-1" style={{ color: '#D4AF37', fontFamily: 'Playfair Display, serif' }}>95%</div>
                    <div className="text-xs text-gray-600">Job Success</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
