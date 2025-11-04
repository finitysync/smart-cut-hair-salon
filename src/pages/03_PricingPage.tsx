import { motion } from 'motion/react';
import { Card } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Check } from 'lucide-react';

const mensPricing = [
  { category: 'Hair Services', items: [
    { name: 'Classic Haircut', price: 'PKR 800 - 1,200' },
    { name: 'Premium Haircut', price: 'PKR 1,500 - 2,000' },
    { name: 'Hair Styling', price: 'PKR 600 - 1,000' },
    { name: 'Hair Color (Full)', price: 'PKR 2,500 - 4,000' },
    { name: 'Highlights', price: 'PKR 3,000 - 5,000' }
  ]},
  { category: 'Beard & Shave', items: [
    { name: 'Beard Trim', price: 'PKR 400 - 600' },
    { name: 'Beard Sculpting', price: 'PKR 800 - 1,200' },
    { name: 'Clean Shave', price: 'PKR 500 - 700' },
    { name: 'Hot Towel Shave', price: 'PKR 700 - 1,000' }
  ]},
  { category: 'Skincare', items: [
    { name: 'Basic Facial', price: 'PKR 1,200 - 1,800' },
    { name: 'Hydra Facial', price: 'PKR 2,500 - 3,500' },
    { name: 'Charcoal Facial', price: 'PKR 1,500 - 2,000' },
    { name: 'Head Massage', price: 'PKR 800 - 1,200' }
  ]}
];

const ladiesPricing = [
  { category: 'Hair Services', items: [
    { name: 'Haircut & Blowdry', price: 'PKR 1,200 - 2,000' },
    { name: 'Hair Styling', price: 'PKR 1,500 - 2,500' },
    { name: 'Hair Color (Full)', price: 'PKR 3,500 - 6,000' },
    { name: 'Highlights/Balayage', price: 'PKR 4,000 - 8,000' },
    { name: 'Hair Treatment', price: 'PKR 2,000 - 3,500' }
  ]},
  { category: 'Facial & Skin', items: [
    { name: 'Basic Facial', price: 'PKR 1,500 - 2,500' },
    { name: 'Hydra Facial', price: 'PKR 3,000 - 4,500' },
    { name: 'Dermacos Facial', price: 'PKR 2,500 - 3,500' },
    { name: 'Gold Facial', price: 'PKR 4,000 - 6,000' },
    { name: 'Skin Polishing', price: 'PKR 3,500 - 5,000' }
  ]},
  { category: 'Nails & Beauty', items: [
    { name: 'Manicure', price: 'PKR 1,000 - 1,500' },
    { name: 'Pedicure', price: 'PKR 1,200 - 1,800' },
    { name: 'Gel Nails', price: 'PKR 2,500 - 4,000' },
    { name: 'Threading (Full Face)', price: 'PKR 500 - 800' },
    { name: 'Waxing (Full Body)', price: 'PKR 3,000 - 4,500' }
  ]},
  { category: 'Makeup', items: [
    { name: 'Party Makeup', price: 'PKR 2,500 - 4,000' },
    { name: 'Engagement Makeup', price: 'PKR 5,000 - 8,000' },
    { name: 'Bridal Makeup', price: 'PKR 15,000 - 30,000' },
    { name: 'HD Makeup', price: 'PKR 8,000 - 12,000' }
  ]}
];

const bridalPackages = [
  {
    name: 'Bridal Basic',
    price: 'PKR 25,000',
    features: [
      'Bridal Makeup',
      'Hair Styling',
      'Manicure & Pedicure',
      'Threading',
      'Basic Facial (1 session)'
    ]
  },
  {
    name: 'Bridal Premium',
    price: 'PKR 45,000',
    features: [
      'Bridal Makeup (2 functions)',
      'Hair Styling (2 functions)',
      'Manicure & Pedicure',
      'Threading & Waxing',
      'Premium Facial (2 sessions)',
      'Skin Polishing',
      'Trial Makeup'
    ],
    popular: true
  },
  {
    name: 'Bridal Luxury',
    price: 'PKR 75,000',
    features: [
      'Bridal Makeup (3 functions)',
      'Hair Styling (3 functions)',
      'Manicure & Pedicure (Premium)',
      'Full Body Waxing',
      'Luxury Facial Package (4 sessions)',
      'Skin Polishing & Whitening',
      'Trial Makeup & Hair',
      'At-home Service',
      'Complimentary Groom Package'
    ]
  }
];

export function PricingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-black to-[#1a1a1a] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(212, 175, 55, 0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 
              className="mb-4"
              style={{ 
                fontFamily: 'Playfair Display, serif',
                fontSize: 'clamp(2.5rem, 5vw, 4rem)'
              }}
            >
              Our Pricing
            </h1>
            <p className="text-white/80 text-xl max-w-2xl mx-auto">
              Transparent pricing for all our premium services
            </p>
          </motion.div>
        </div>
      </section>

      {/* Price Lists */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <Tabs defaultValue="mens" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
              <TabsTrigger value="mens">Men's Services</TabsTrigger>
              <TabsTrigger value="ladies">Ladies' Services</TabsTrigger>
            </TabsList>

            <TabsContent value="mens">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {mensPricing.map((section, index) => (
                  <motion.div
                    key={section.category}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="p-6 h-full border-0 shadow-lg">
                      <h3 className="mb-6 pb-3 border-b" style={{ 
                        fontFamily: 'Playfair Display, serif',
                        color: '#D4AF37'
                      }}>
                        {section.category}
                      </h3>
                      <ul className="space-y-4">
                        {section.items.map((item) => (
                          <li key={item.name} className="flex justify-between items-start gap-4">
                            <span className="flex-1">{item.name}</span>
                            <span className="text-gray-600 text-sm whitespace-nowrap">{item.price}</span>
                          </li>
                        ))}
                      </ul>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="ladies">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {ladiesPricing.map((section, index) => (
                  <motion.div
                    key={section.category}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="p-6 h-full border-0 shadow-lg">
                      <h3 className="mb-6 pb-3 border-b" style={{ 
                        fontFamily: 'Playfair Display, serif',
                        color: '#D4AF37'
                      }}>
                        {section.category}
                      </h3>
                      <ul className="space-y-4">
                        {section.items.map((item) => (
                          <li key={item.name} className="flex justify-between items-start gap-4">
                            <span className="flex-1">{item.name}</span>
                            <span className="text-gray-600 text-sm whitespace-nowrap">{item.price}</span>
                          </li>
                        ))}
                      </ul>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Bridal Packages */}
      <section id="bridal" className="py-20 bg-gradient-to-b from-gray-50 to-white">
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
              Bridal Packages
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Special packages designed for your most important day
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {bridalPackages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className={`p-8 h-full relative ${
                  pkg.popular ? 'border-2 shadow-2xl' : 'border-0 shadow-lg'
                }`}
                style={{ borderColor: pkg.popular ? '#D4AF37' : 'transparent' }}
                >
                  {pkg.popular && (
                    <div 
                      className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 py-1 rounded-full text-sm"
                      style={{ backgroundColor: '#D4AF37', color: '#1a1a1a' }}
                    >
                      Most Popular
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                      {pkg.name}
                    </h3>
                    <div className="text-4xl mb-2" style={{ 
                      color: '#D4AF37',
                      fontFamily: 'Playfair Display, serif'
                    }}>
                      {pkg.price}
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#D4AF37' }} />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Note Section */}
      <section className="py-12 bg-black text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <p className="text-white/80">
            * Prices may vary based on hair length, product choice, and stylist expertise. 
            Contact us for accurate pricing and custom packages.
          </p>
        </div>
      </section>
    </div>
  );
}
