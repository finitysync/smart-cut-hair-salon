import { Button } from './ui/button';

export function HomeCTA() {
  return (
    <section className="py-20 md:py-28 my-24 md:my-36 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 lg:px-8 text-center space-y-6 md:space-y-8">
        <h2
          className=""
          style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(2rem, 4vw, 3rem)'
          }}
        >
          Elevate Your Look With Us
        </h2>
        <p className="text-xl text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
          From classic cuts to signature styles — we craft confidence every day.
        </p>
        <Button
          asChild
          className="rounded-full px-8 py-6"
          style={{
            background: 'linear-gradient(135deg, #D4AF37 0%, #F4E5C3 100%)',
            color: '#1a1a1a'
          }}
        >
          <a href="/contact">Let's Connect</a>
        </Button>
      </div>
    </section>
  );
}
