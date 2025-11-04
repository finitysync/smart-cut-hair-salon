import { motion } from 'motion/react';
import { Card } from '../components/ui/card';
import { Target, Award, Users, Heart, TrendingUp, Zap } from 'lucide-react';

const values = [
  {
    icon: Award,
    title: 'Excellence',
    description: 'We strive for perfection in every service we provide, maintaining the highest standards of quality.'
  },
  {
    icon: Heart,
    title: 'Passion',
    description: 'Our love for beauty and style drives us to continuously innovate and improve.'
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Building lasting relationships with our clients and supporting local talent.'
  },
  {
    icon: TrendingUp,
    title: 'Growth',
    description: 'Committed to expanding and bringing world-class services across Pakistan.'
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'Staying ahead with the latest techniques, trends, and technologies.'
  },
  {
    icon: Target,
    title: 'Vision',
    description: 'To become the most trusted and recognized beauty brand in Pakistan.'
  }
];

const team = [
  {
    name: 'Master Stylists',
    count: '25+',
    description: 'Expert hair stylists with international training'
  },
  {
    name: 'Makeup Artists',
    count: '15+',
    description: 'Professional makeup specialists'
  },
  {
    name: 'Beauticians',
    count: '20+',
    description: 'Certified beauty therapists'
  },
  {
    name: 'Trainers',
    count: '10+',
    description: 'Experienced academy instructors'
  }
];

const milestones = [
  { year: '2017', event: 'Smart Cut Official Founded', desc: 'Started our journey with the first salon in Lahore' },
  { year: '2018', event: 'Expansion Begins', desc: 'Opened 5 new branches across Lahore' },
  { year: '2020', event: 'Academy Launch', desc: 'Established Smart Cut Academy for professional training' },
  { year: '2021', event: 'National Recognition', desc: 'Won multiple awards for excellence in beauty services' },
  { year: '2022', event: 'Pan-Pakistan Presence', desc: 'Expanded to 15+ branches nationwide' },
  { year: '2025', event: 'Industry Leaders', desc: 'Leading the fashion and beauty industry in Pakistan' }
];

export function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-black to-[#1a1a1a] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(212, 175, 55, 0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 
              className="mb-6"
              style={{ 
                fontFamily: 'Playfair Display, serif',
                fontSize: 'clamp(2.5rem, 5vw, 4rem)'
              }}
            >
              About Smart Cut Official
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Pakistan's premier destination for luxury grooming and beauty services, 
              dedicated to transforming lives through style and confidence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 h-full border-0 shadow-xl bg-gradient-to-br from-[#D4AF37]/10 to-white">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#F4E5C3] flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-[#1a1a1a]" />
                </div>
                <h2 className="mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Our Mission
                </h2>
                <p className="text-gray-600 text-lg">
                  To expand Smart Cut throughout Pakistan, dominating the fashion industry while helping 
                  our artists gain global recognition. We are committed to providing world-class grooming 
                  and beauty services that empower individuals to look and feel their absolute best.
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 h-full border-0 shadow-xl bg-gradient-to-br from-black to-[#1a1a1a] text-white">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#F4E5C3] flex items-center justify-center mb-6">
                  <Award className="w-8 h-8 text-[#1a1a1a]" />
                </div>
                <h2 className="mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Our Vision
                </h2>
                <p className="text-white/80 text-lg">
                  To be recognized as Pakistan's most trusted and innovative beauty and grooming brand, 
                  setting new standards of excellence while nurturing local talent and bringing 
                  international trends to our communities.
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
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
              Our Core Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-6 h-full border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#F4E5C3] flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-[#1a1a1a]" />
                    </div>
                    <h3 className="mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                      {value.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{value.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
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
              Our Expert Team
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Certified professionals dedicated to your beauty and grooming needs
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl mb-4" style={{ 
                  color: '#D4AF37',
                  fontFamily: 'Playfair Display, serif'
                }}>
                  {member.count}
                </div>
                <h3 className="mb-2">{member.name}</h3>
                <p className="text-white/60 text-sm">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
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
              Our Journey
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Milestones that shaped Smart Cut Official
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-8 pb-12 border-l-2 last:pb-0"
                style={{ borderColor: '#D4AF37' }}
              >
                <div 
                  className="absolute left-0 top-0 w-4 h-4 rounded-full transform -translate-x-[9px]"
                  style={{ backgroundColor: '#D4AF37' }}
                ></div>
                <div className="text-sm mb-1" style={{ color: '#D4AF37' }}>{milestone.year}</div>
                <h3 className="mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {milestone.event}
                </h3>
                <p className="text-gray-600">{milestone.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
