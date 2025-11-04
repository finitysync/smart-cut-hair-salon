import { motion } from 'motion/react';
import { Button } from '../components/ui/button';

export function ThankYouPage() {
  return (
    <div className="min-h-screen pt-20 lg:pt-24">
      <section className="relative py-32 bg-gradient-to-br from-black to-[#1a1a1a] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                `radial-gradient(circle at 2px 2px, rgba(212, 175, 55, 0.3) 1px, transparent 0)`,
              backgroundSize: '40px 40px',
            }}
          />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h1
              className="mb-4"
              style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
            >
              Thank You!
            </h1>
            <p className="text-white/80 text-lg mb-8">
              Your booking request has been submitted. Our team will contact you soon to confirm your appointment.
            </p>
            <div className="flex gap-4 justify-center">
              <Button
                asChild
                className="rounded-full px-8"
                style={{
                  background: 'linear-gradient(135deg, #D4AF37 0%, #F4E5C3 100%)',
                  color: '#1a1a1a',
                }}
              >
                <a href="/">Go to Home</a>
              </Button>
              <Button asChild variant="outline" className="rounded-full px-8">
                <a href="/booking">Make Another Booking</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default ThankYouPage;
