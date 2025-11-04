import { MessageCircle } from 'lucide-react';

export function FloatingContactButton() {
  return (
    <a
      href="/contact"
      aria-label="Let's Connect"
      className="fixed bottom-6 right-6 z-50"
    >
      <div
        className="rounded-full px-3 shadow-lg transition-transform hover:scale-105"
        style={{
          background: 'linear-gradient(135deg, #D4AF37 0%, #F4E5C3 100%)',
          color: '#1a1a1a',
        }}
      >
        <div className="flex items-center gap-2 px-5 py-3">
          <MessageCircle className="w-5 h-5" />
          <span className="font-medium">Let's Connect</span>
        </div>
      </div>
    </a>
  );
}
