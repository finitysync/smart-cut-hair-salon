import { motion } from 'motion/react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Check, GraduationCap, BookOpen, CalendarDays } from 'lucide-react';
import { courses } from './coursesData';

export function CoursesPage() {
  return (
    <div className="min-h-screen">
      <section className="relative py-32 bg-gradient-to-br from-black to-[#1a1a1a] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                `radial-gradient(circle at 2px 2px, rgba(212, 175, 55, 0.3) 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-[#D4AF37]/20 px-4 py-2 rounded-full mb-6">
              <GraduationCap className="w-5 h-5" style={{ color: '#D4AF37' }} />
              <span style={{ color: '#D4AF37' }}>Smartcut Academy</span>
            </div>
            <h1
              className="mb-4"
              style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
            >
              Professional Courses
            </h1>
            <p className="text-white/80 text-xl max-w-2xl mx-auto">
              Learn from industry experts with hands-on training and career-focused curriculum.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={course.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                  <div className="relative h-48 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url('${course.image}')` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                      {course.title}
                    </h3>
                    <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                      <div className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4" />
                        <span>{course.level}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CalendarDays className="w-4 h-4" />
                        <span>{course.duration}</span>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {course.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2 text-sm text-gray-700">
                          <Check className="w-4 h-4 mt-0.5" style={{ color: '#D4AF37' }} />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex gap-3">
                      <Button asChild className="rounded-full" style={{ background: 'linear-gradient(135deg, #D4AF37 0%, #F4E5C3 100%)', color: '#1a1a1a' }}>
                        <a href="/enroll">Enroll Now</a>
                      </Button>
                      <Button variant="outline" asChild className="rounded-full">
                        <a href="#">View Details</a>
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Work Gallery */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2
              className="mb-4"
              style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              Student Work & Training
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              A glimpse of hands-on sessions and outcomes from our professional courses.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              'https://images.unsplash.com/photo-1593702204946-9fa40d9b5039?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
              'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
              'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
              'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
              'https://images.unsplash.com/photo-1562322140-8baeececf3df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
              'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
            ].map((src, idx) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group relative aspect-square rounded-xl overflow-hidden"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url('${src}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
