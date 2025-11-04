import { motion } from 'motion/react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Calendar } from '../components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '../components/ui/popover';
import { Calendar as CalendarIcon, Clock, MapPin, User, Phone, Mail } from 'lucide-react';
import { useState } from 'react';
import { format } from 'date-fns';

const services = [
  'Haircut & Styling',
  'Hair Color',
  'Beard Grooming',
  'Facial Treatment',
  'Manicure & Pedicure',
  'Bridal Makeup',
  'Full Grooming Package',
  'Other'
];

const locations = [
  'Model Town, Lahore',
  'DHA, Lahore',
  'Gulberg, Lahore',
  'Johar Town, Lahore',
  'Bahria Town, Lahore',
  'F-7, Islamabad',
  'Blue Area, Islamabad',
  'Clifton, Karachi',
  'DHA, Karachi',
  'Faisalabad'
];

const timeSlots = [
  '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
  '12:00 PM', '12:30 PM', '01:00 PM', '01:30 PM',
  '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM',
  '04:00 PM', '04:30 PM', '05:00 PM', '05:30 PM',
  '06:00 PM', '06:30 PM', '07:00 PM', '07:30 PM',
  '08:00 PM', '08:30 PM', '09:00 PM', '09:30 PM'
];

// Replace with your actual Formspree form ID, e.g., https://formspree.io/f/abcdwxyz
const FORM_ENDPOINT = 'https://formspree.io/f/mgvpdern';

export function BookingPage() {
  const [date, setDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [showCalendar, setShowCalendar] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      });

      if (res.ok) {
        form.reset();
        window.history.pushState({}, '', '/thank-you');
        window.dispatchEvent(new PopStateEvent('popstate'));
      } else {
        setError('Submission failed. Please try again.');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-20 lg:pt-24">
      {/* Hero Section */}
      <section className="relative py-32 mt-20 bg-gradient-to-br from-black to-[#1a1a1a] text-white overflow-hidden">
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
            className="text-center"
          >
            <h1 
              className="mt-6 md:mt-8 mb-4"
              style={{ 
                fontFamily: 'Playfair Display, serif',
                fontSize: 'clamp(2.5rem, 5vw, 4rem)'
              }}
            >
              Book Your Appointment
            </h1>
            <p className="text-white/80 text-xl max-w-2xl mx-auto">
              Schedule your visit and experience premium grooming and beauty services
            </p>
          </motion.div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 lg:p-12 border-0 shadow-2xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 
                  className="mb-8 text-center"
                  style={{ 
                    fontFamily: 'Playfair Display, serif',
                    fontSize: 'clamp(1.5rem, 3vw, 2rem)'
                  }}
                >
                  Fill in Your Details
                </h2>

                <form className="space-y-6" onSubmit={handleSubmit}>
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" style={{ color: '#D4AF37' }} />
                          Full Name *
                        </div>
                      </Label>
                      <Input 
                        id="name"
                        name="full_name"
                        required
                        placeholder="Enter your full name"
                        className="rounded-lg"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4" style={{ color: '#D4AF37' }} />
                          Phone Number *
                        </div>
                      </Label>
                      <Input 
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="03XX-XXXXXXX"
                        className="rounded-lg"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4" style={{ color: '#D4AF37' }} />
                        Email Address
                      </div>
                    </Label>
                    <Input 
                      id="email"
                      name="_replyto"
                      type="email"
                      placeholder="your.email@example.com"
                      className="rounded-lg"
                    />
                  </div>

                  {/* Service Selection */}
                  <div className="space-y-2">
                    <Label htmlFor="service">Service Type *</Label>
                    <Input
                      id="service"
                      name="service"
                      placeholder="Describe the service you need (e.g., Bridal Makeup, Custom Package)"
                      className="rounded-lg"
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      required
                    />
                  </div>

                  {/* Location Selection */}
                  <div className="space-y-2">
                    <Label htmlFor="location">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" style={{ color: '#D4AF37' }} />
                        Preferred Location *
                      </div>
                    </Label>
                    <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                      <SelectTrigger className="rounded-lg" id="location">
                        <SelectValue placeholder="Select a location" />
                      </SelectTrigger>
                      <SelectContent>
                        {locations.map((location) => (
                          <SelectItem key={location} value={location.toLowerCase().replace(/\s+/g, '-')}> 
                            {location}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <input type="hidden" name="location" value={selectedLocation} />
                  </div>

                  {/* Date & Time */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2 relative">
                      <Label>
                        <div className="flex items-center gap-2">
                          <CalendarIcon className="w-4 h-4" style={{ color: '#D4AF37' }} />
                          Preferred Date *
                        </div>
                      </Label>
                      <Button
                        type="button"
                        variant="outline"
                        className="w-full justify-start text-left rounded-lg"
                        onClick={() => setShowCalendar((v) => !v)}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, 'PPP') : <span>Pick a date</span>}
                      </Button>
                      {showCalendar && (
                        <div className="absolute z-50 mt-2 bg-white border rounded-md shadow-md p-2">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={(d) => { setDate(d); setShowCalendar(false); }}
                            initialFocus
                          />
                        </div>
                      )}
                      <input type="hidden" name="preferred_date" value={date ? format(date, 'yyyy-MM-dd') : ''} />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="time">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" style={{ color: '#D4AF37' }} />
                          Preferred Time *
                        </div>
                      </Label>
                      <Select value={selectedTime} onValueChange={setSelectedTime}>
                        <SelectTrigger className="rounded-lg">
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent className="max-h-60">
                          {timeSlots.map((time) => (
                            <SelectItem key={time} value={time}>
                              {time}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <input type="hidden" name="preferred_time" value={selectedTime} />
                    </div>
                  </div>

                  {/* Additional Notes */}
                  <div className="space-y-2">
                    <Label htmlFor="notes">Additional Notes (Optional)</Label>
                    <Textarea 
                      id="notes"
                      name="notes"
                      placeholder="Any special requests or preferences..."
                      className="rounded-lg min-h-[100px]"
                    />
                  </div>

                  {/* Formspree helpers */}
                  <input type="hidden" name="_subject" value="New Booking Lead - Smart Cut" />
                  <input type="hidden" name="source_page" value="/booking" />

                  {/* Submit Button */}
                  <div className="pt-4">
                    <Button 
                      type="submit"
                      size="lg"
                      className="w-full rounded-full"
                      style={{ 
                        background: 'linear-gradient(135deg, #D4AF37 0%, #F4E5C3 100%)',
                        color: '#1a1a1a'
                      }}
                      disabled={submitting}
                    >
                      {submitting ? 'Submitting...' : 'Confirm Booking'}
                    </Button>
                  </div>

                  {error && (
                    <p className="text-sm text-red-600 text-center">{error}</p>
                  )}

                  <p className="text-sm text-gray-500 text-center">
                    * Required fields. Our team will contact you to confirm your appointment.
                  </p>
                </form>
              </motion.div>
            </Card>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#F4E5C3] flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-[#1a1a1a]" />
              </div>
              <h3 className="mb-2">Call Us</h3>
              <p className="text-white/70">0322-7999771</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#F4E5C3] flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-[#1a1a1a]" />
              </div>
              <h3 className="mb-2">Email Us</h3>
              <p className="text-white/70">info@smartcutofficial.co</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#F4E5C3] flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-[#1a1a1a]" />
              </div>
              <h3 className="mb-2">Opening Hours</h3>
              <p className="text-white/70">Mon - Sun: 10 AM - 10 PM</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
