import { useState } from 'react';
import { motion } from 'motion/react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';

export function CourseEnrollPage() {
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
      const res = await fetch('https://formspree.io/f/mdkpbklb', {
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
    <div className="min-h-screen">
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h1
              className="mb-3"
              style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem,4vw,3rem)' }}
            >
              Course Enrollment
            </h1>
            <p className="text-gray-600 max-w-xl mx-auto">
              Fill out the form below and our team will contact you with next steps.
            </p>
          </motion.div>

          <Card className="p-6 border-0 shadow-lg">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" name="firstName" placeholder="Your first name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" name="lastName" placeholder="Your last name" required />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="you@example.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" name="phone" type="tel" placeholder="03XX-XXXXXXX" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="course">Interested Course</Label>
                <Input id="course" name="course" placeholder="e.g., Makeup Artistry" required />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="batch">Preferred Batch</Label>
                  <Input id="batch" name="batch" placeholder="Morning / Evening" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="start">Preferred Start Month</Label>
                  <Input id="start" name="start" type="month" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" placeholder="Any specific questions or requirements?" rows={5} />
              </div>

              {error && (
                <div className="text-red-600 text-sm">{error}</div>
              )}
              <div className="flex gap-3 justify-end">
                <Button type="submit" disabled={submitting} className="rounded-full" style={{ background: 'linear-gradient(135deg, #D4AF37 0%, #F4E5C3 100%)', color: '#1a1a1a' }}>
                  {submitting ? 'Submitting...' : 'Submit Enrollment'}
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </section>
    </div>
  );
}
