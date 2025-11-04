import { Facebook, Linkedin, Youtube, Instagram, MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  const footerLinks = {
    company: [
      { name: 'Home', href: '/' },
      { name: 'About', href: '/about' },
      { name: 'Contact', href: '/contact' }
    ],
    studio: [
      { name: 'Shoots', href: '/studio' },
      { name: 'Bridal', href: '/studio' },
      { name: 'Groom', href: '/services/mens' }
    ],
    academy: [
      { name: 'Courses', href: '/courses' },
      { name: 'Feedback', href: '/contact' },
      { name: 'Book Now', href: '/booking' }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' }
  ];

  return (
    <footer className="bg-[#1a1a1a] text-white pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 
              className="text-2xl mb-4"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Smart Cut <span style={{ color: '#D4AF37' }}>Official</span>
            </h3>
            <p className="text-white/70 mb-6 max-w-sm">
              Your premier destination for luxury grooming, beauty, and styling services. 
              Setting new standards in the fashion industry across Pakistan.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm text-white/70">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: '#D4AF37' }} />
                <span>15-Q Model Town Link Road, Lahore</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/70">
                <Phone className="w-4 h-4 flex-shrink-0" style={{ color: '#D4AF37' }} />
                <a href="tel:03227999771" className="hover:text-white transition-colors">
                  0322-7999771
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/70">
                <Mail className="w-4 h-4 flex-shrink-0" style={{ color: '#D4AF37' }} />
                <a href="mailto:info@smartcutofficial.co" className="hover:text-white transition-colors">
                  info@smartcutofficial.co
                </a>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Studio Links */}
          <div>
            <h4 className="mb-4">Studio</h4>
            <ul className="space-y-2">
              {footerLinks.studio.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Academy Links */}
          <div>
            <h4 className="mb-4">Academy</h4>
            <ul className="space-y-2">
              {footerLinks.academy.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-gradient-to-br hover:from-[#D4AF37] hover:to-[#F4E5C3] flex items-center justify-center transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5 text-white group-hover:text-[#1a1a1a] transition-colors" />
                  </a>
                );
              })}
            </div>

            {/* Copyright */}
            <div className="text-white/60 text-sm">
              © 2022 Smartcutofficial — All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
