import { motion } from 'motion/react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { GraduationCap, BookOpen, Award, Users, Clock, Check, Star } from 'lucide-react';

const courses = [
  {
    category: 'Hair Styling',
    courses: [
      {
        title: 'Professional Hair Cutting',
        duration: '3 Months',
        level: 'Beginner to Advanced',
        price: 'PKR 45,000',
        features: ['Basic to Advanced Cuts', 'Styling Techniques', 'Tool Handling', 'Practical Training', 'Certificate'],
        popular: false
      },
      {
        title: 'Hair Coloring Specialist',
        duration: '2 Months',
        level: 'Intermediate',
        price: 'PKR 35,000',
        features: ['Color Theory', 'Highlighting Techniques', 'Balayage', 'Color Correction', 'Certificate'],
        popular: false
      }
    ]
  },
  {
    category: 'Beauty Therapy',
    courses: [
      {
        title: 'Complete Beauty Course',
        duration: '6 Months',
        level: 'Comprehensive',
        price: 'PKR 80,000',
        features: ['Facial Treatments', 'Makeup Artistry', 'Threading & Waxing', 'Manicure & Pedicure', 'City & Guild Diploma'],
        popular: true
      },
      {
        title: 'Makeup Artistry',
        duration: '3 Months',
        level: 'Beginner to Advanced',
        price: 'PKR 50,000',
        features: ['Bridal Makeup', 'HD Makeup', 'Fashion Makeup', 'Airbrush Techniques', 'Certificate'],
        popular: false
      }
    ]
  },
  {
    category: 'Skin Therapy',
    courses: [
      {
        title: 'Advanced Skin Treatments',
        duration: '4 Months',
        level: 'Professional',
        price: 'PKR 60,000',
        features: ['Facial Therapy', 'Skin Analysis', 'Treatment Plans', 'Product Knowledge', 'Diploma'],
        popular: false
      },
      {
        title: 'Dermatology Basics',
        duration: '2 Months',
        level: 'Foundation',
        price: 'PKR 30,000',
        features: ['Skin Types', 'Common Issues', 'Treatment Basics', 'Consultation Skills', 'Certificate'],
        popular: false
      }
    ]
  }
];

const benefits = [
  {
    icon: Award,
    title: 'City & Guild Certified',
    description: 'Internationally recognized diplomas and certificates'
  },
  {
    icon: Users,
    title: 'Expert Instructors',
    description: 'Learn from industry professionals with years of experience'
  },
  {
    icon: BookOpen,
    title: 'Hands-On Training',
    description: 'Practical sessions with real clients in our salon'
  },
  {
    icon: Star,
    title: 'Job Placement',
    description: '95% job placement assistance for graduates'
  },
  {
    icon: Clock,
    title: 'Flexible Timings',
    description: 'Morning and evening batches available'
  },
  {
    icon: GraduationCap,
    title: 'Career Support',
    description: 'Ongoing mentorship and business guidance'
  }
];

const testimonials = [
  {
    name: 'Ayesha Rahman',
    course: 'Complete Beauty Course',
    image: 'https://images.unsplash.com/photo-1660505102581-85cffa4e6550?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGJlYXV0eSUyMHNhbG9ufGVufDF8fHx8MTc2MjA5MjQ4NHww&ixlib=rb-4.1.0&q=80&w=1080',
    quote: 'Smart Cut Academy transformed my career. The training was excellent and I now run my own salon!'
  },
  {
    name: 'Zainab Ali',
    course: 'Makeup Artistry',
    image: 'https://images.unsplash.com/photo-1608979048467-6194dabc6a3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBibG9nJTIwbWFrZXVwfGVufDF8fHx8MTc2MjA5Mjg4MHww&ixlib=rb-4.1.0&q=80&w=1080',
    quote: 'The makeup course gave me the confidence and skills to become a professional bridal makeup artist.'
  },
  {
    name: 'Fatima Khan',
    course: 'Hair Styling',
    image: 'https://images.unsplash.com/photo-1626379501846-0df4067b8bb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwc2Fsb24lMjBjaGFpcnxlbnwxfHx8fDE3NjIwMzMxODZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    quote: 'Best decision I ever made! The instructors are amazing and the certification is recognized everywhere.'
  }
];

export function AcademyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1559185590-d545a0c5a1dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBhY2FkZW15JTIwdHJhaW5pbmd8ZW58MXx8fHwxNzYyMDkyNDg2fDA&ixlib=rb-4.1.0&q=80&w=1080')`
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
            <div className="inline-flex items-center gap-2 bg-[#D4AF37]/20 px-4 py-2 rounded-full mb-6">
              <GraduationCap className="w-5 h-5" style={{ color: '#D4AF37' }} />
              <span className="text-white">City & Guild Certified Academy</span>
            </div>
            <h1 
              className="text-white mb-4"
              style={{ 
                fontFamily: 'Playfair Display, serif',
                fontSize: 'clamp(2.5rem, 5vw, 4.5rem)'
              }}
            >
              Smart Cut Academy
            </h1>
            <p className="text-white/90 text-xl max-w-2xl mx-auto mb-8">
              Launch your beauty career with professional training in hair, beauty, and skin therapies
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
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
              Why Choose Our Academy
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all h-full">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#F4E5C3] flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-[#1a1a1a]" />
                    </div>
                    <h3 className="mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm">{benefit.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 
              className="mb-4"
              style={{ 
                fontFamily: 'Playfair Display, serif',
                fontSize: 'clamp(2rem, 4vw, 3rem)'
              }}
            >
              Our Courses
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Professional training programs designed to launch your beauty career
            </p>
          </motion.div>

          <Tabs defaultValue={courses[0].category.toLowerCase().replace(/\s+/g, '-')} className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
              {courses.map((cat) => (
                <TabsTrigger key={cat.category} value={cat.category.toLowerCase().replace(/\s+/g, '-')}>
                  {cat.category}
                </TabsTrigger>
              ))}
            </TabsList>

            {courses.map((category) => (
              <TabsContent key={category.category} value={category.category.toLowerCase().replace(/\s+/g, '-')}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                  {category.courses.map((course, index) => (
                    <motion.div
                      key={course.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card className={`p-8 h-full relative ${
                        course.popular ? 'ring-2 ring-[#D4AF37]' : 'border-0'
                      } shadow-lg`}>
                        {course.popular && (
                          <div 
                            className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 py-1 rounded-full text-sm"
                            style={{ backgroundColor: '#D4AF37', color: '#1a1a1a' }}
                          >
                            Most Popular
                          </div>
                        )}
                        <h3 className="mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                          {course.title}
                        </h3>
                        <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {course.duration}
                          </div>
                          <div className="flex items-center gap-1">
                            <Award className="w-4 h-4" />
                            {course.level}
                          </div>
                        </div>
                        <div className="text-3xl mb-6" style={{ 
                          color: '#D4AF37',
                          fontFamily: 'Playfair Display, serif'
                        }}>
                          {course.price}
                        </div>
                        <ul className="space-y-3 mb-6">
                          {course.features.map((feature) => (
                            <li key={feature} className="flex items-center gap-2">
                              <Check className="w-4 h-4 flex-shrink-0" style={{ color: '#D4AF37' }} />
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Button 
                          asChild
                          className="w-full rounded-full"
                          style={course.popular ? { 
                            background: 'linear-gradient(135deg, #D4AF37 0%, #F4E5C3 100%)',
                            color: '#1a1a1a'
                          } : {}}
                          variant={course.popular ? 'default' : 'outline'}
                        >
                          <a href="/enroll">Enroll Now</a>
                        </Button>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Testimonials */}
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
              Success Stories
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Hear from our graduates who are now successful professionals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 bg-white/5 border-white/10 text-white h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div 
                      className="w-16 h-16 rounded-full bg-cover bg-center"
                      style={{ backgroundImage: `url('${testimonial.image}')` }}
                    ></div>
                    <div>
                      <h3 className="text-white">{testimonial.name}</h3>
                      <p className="text-sm text-white/60">{testimonial.course}</p>
                    </div>
                  </div>
                  <p className="text-white/80 italic">"{testimonial.quote}"</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 
              className="mb-4"
              style={{ 
                fontFamily: 'Playfair Display, serif',
                fontSize: 'clamp(2rem, 4vw, 3rem)'
              }}
            >
              Start Your Beauty Career Today
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Join hundreds of successful graduates and transform your passion into a profession
            </p>
            <div className="flex gap-4 justify-center">
              <Button 
                asChild
                size="lg"
                className="rounded-full px-8"
                style={{ 
                  background: 'linear-gradient(135deg, #D4AF37 0%, #F4E5C3 100%)',
                  color: '#1a1a1a'
                }}
              >
                <a href="/enroll">Apply Now</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
