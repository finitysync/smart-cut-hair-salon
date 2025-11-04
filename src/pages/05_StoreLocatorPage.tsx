import { motion } from 'motion/react';
import { Card } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { MapPin, Phone, Clock, Search, Navigation } from 'lucide-react';
import { useState } from 'react';

const locations = [
  {
    id: 1,
    name: 'Smart Cut Model Town',
    address: '15-Q Model Town Link Road, Lahore',
    phone: '0322-7999771',
    hours: 'Mon - Sun: 10:00 AM - 10:00 PM',
    city: 'Lahore',
    featured: true
  },
  {
    id: 2,
    name: 'Smart Cut DHA',
    address: 'Y Block, DHA Phase 3, Lahore',
    phone: '0322-7999772',
    hours: 'Mon - Sun: 10:00 AM - 10:00 PM',
    city: 'Lahore',
    featured: false
  },
  {
    id: 3,
    name: 'Smart Cut Gulberg',
    address: 'Main Boulevard, Gulberg III, Lahore',
    phone: '0322-7999773',
    hours: 'Mon - Sun: 10:00 AM - 10:00 PM',
    city: 'Lahore',
    featured: false
  },
  {
    id: 4,
    name: 'Smart Cut Johar Town',
    address: 'Block H, Johar Town, Lahore',
    phone: '0322-7999774',
    hours: 'Mon - Sun: 10:00 AM - 10:00 PM',
    city: 'Lahore',
    featured: false
  },
  {
    id: 5,
    name: 'Smart Cut Bahria Town',
    address: 'Civic Centre, Bahria Town, Lahore',
    phone: '0322-7999775',
    hours: 'Mon - Sun: 10:00 AM - 10:00 PM',
    city: 'Lahore',
    featured: false
  },
  {
    id: 6,
    name: 'Smart Cut F-7',
    address: 'F-7 Markaz, Islamabad',
    phone: '0322-7999776',
    hours: 'Mon - Sun: 10:00 AM - 10:00 PM',
    city: 'Islamabad',
    featured: false
  },
  {
    id: 7,
    name: 'Smart Cut Blue Area',
    address: 'Blue Area, Islamabad',
    phone: '0322-7999777',
    hours: 'Mon - Sun: 10:00 AM - 10:00 PM',
    city: 'Islamabad',
    featured: false
  },
  {
    id: 8,
    name: 'Smart Cut Clifton',
    address: 'Clifton Block 2, Karachi',
    phone: '0322-7999778',
    hours: 'Mon - Sun: 10:00 AM - 10:00 PM',
    city: 'Karachi',
    featured: false
  },
  {
    id: 9,
    name: 'Smart Cut DHA Karachi',
    address: 'DHA Phase 5, Karachi',
    phone: '0322-7999779',
    hours: 'Mon - Sun: 10:00 AM - 10:00 PM',
    city: 'Karachi',
    featured: false
  },
  {
    id: 10,
    name: 'Smart Cut Faisalabad',
    address: 'D Ground, Faisalabad',
    phone: '0322-7999780',
    hours: 'Mon - Sun: 10:00 AM - 10:00 PM',
    city: 'Faisalabad',
    featured: false
  }
];

export function StoreLocatorPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState('All');

  const cities = ['All', ...Array.from(new Set(locations.map(loc => loc.city)))];
  
  const filteredLocations = locations.filter(location => {
    const matchesSearch = location.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         location.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         location.city.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCity = selectedCity === 'All' || location.city === selectedCity;
    return matchesSearch && matchesCity;
  });

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
            className="text-center max-w-3xl mx-auto"
          >
            <h1 
              className="mb-4"
              style={{ 
                fontFamily: 'Playfair Display, serif',
                fontSize: 'clamp(2.5rem, 5vw, 4rem)'
              }}
            >
              Find a Salon Near You
            </h1>
            <p className="text-white/80 text-xl mb-8">
              Visit any of our 15+ branches across Pakistan
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="flex gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input 
                    placeholder="Search by location or city..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-12 h-14 bg-white/10 border-white/20 text-white placeholder:text-white/50 rounded-full"
                  />
                </div>
                <Button 
                  className="h-14 px-8 rounded-full"
                  style={{ 
                    background: 'linear-gradient(135deg, #D4AF37 0%, #F4E5C3 100%)',
                    color: '#1a1a1a'
                  }}
                >
                  Search
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center gap-4 overflow-x-auto">
            <span className="text-sm whitespace-nowrap">Filter by city:</span>
            {cities.map((city) => (
              <button
                key={city}
                onClick={() => setSelectedCity(city)}
                className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-all ${
                  selectedCity === city
                    ? 'text-[#1a1a1a]'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
                style={selectedCity === city ? {
                  background: 'linear-gradient(135deg, #D4AF37 0%, #F4E5C3 100%)'
                } : {}}
              >
                {city}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredLocations.map((location, index) => (
              <motion.div
                key={location.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className={`p-6 h-full flex justify-between border-0 shadow-lg hover:shadow-xl transition-all ${
                  location.featured ? 'ring-2 ring-[#D4AF37]' : ''
                }`}
                >
                  {location.featured && (
                    <div 
                      className="inline-block px-3 py-1 rounded-full text-xs mb-4"
                      style={{ backgroundColor: '#D4AF37', width: 'fit-content', color: 'white' }}
                    >
                      Flagship Store
                    </div>
                  )}
                  
                  <h3 className="mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {location.name}
                  </h3>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#D4AF37' }} />
                      <span className="text-sm text-gray-600">{location.address}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 flex-shrink-0" style={{ color: '#D4AF37' }} />
                      <a href={`tel:${location.phone}`} className="text-sm text-gray-600 hover:text-black">
                        {location.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 flex-shrink-0" style={{ color: '#D4AF37' }} />
                      <span className="text-sm text-gray-600">{location.hours}</span>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button 
                      asChild
                      className="flex-1 rounded-full"
                      style={{ 
                        background: 'linear-gradient(135deg, #D4AF37 0%, #F4E5C3 100%)',
                        color: '#1a1a1a'
                      }}
                    >
                      <a href="/booking">Book Now</a>
                    </Button>
                    <Button 
                      variant="outline"
                      size="icon"
                      className="rounded-full"
                    >
                      <Navigation className="w-4 h-4" />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredLocations.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No locations found matching your search.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
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
              Can't Find a Location?
            </h2>
            <p className="text-white/70 mb-8 max-w-2xl mx-auto">
              We're constantly expanding! Contact us to find out when we're opening near you.
            </p>
            <Button 
              asChild
              size="lg"
              className="rounded-full px-8"
              style={{ 
                background: 'linear-gradient(135deg, #D4AF37 0%, #F4E5C3 100%)',
                color: '#1a1a1a'
              }}
            >
              <a href="/contact">Contact Us</a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
