"use client";

import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { ChevronDown, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', href: '/' },
    { 
      name: 'Services', 
      href: '/services/mens',
      submenu: [
        { name: "Men's Services", href: '/services/mens' },
        { name: "Ladies' Services", href: '/services/ladies' }
      ]
    },
    { name: 'Price', href: '/pricing' },
    { name: 'About Us', href: '/about' },
    { name: 'Store Locator', href: '/stores' },
    { name: 'Blog', href: '/blog' },
    { name: 'Booking', href: '/booking' },
    { name: 'Studio', href: '/studio' },
    { name: 'Academy', href: '/academy' },
    { name: 'Contact Us', href: '/contact' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <span className="text-2xl tracking-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                Smart Cut <span style={{ color: '#D4AF37' }}>Official</span>
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <div 
                key={item.name}
                className="relative group pb-2"
                onMouseEnter={() => item.submenu && setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <a
                  href={item.href}
                  className="flex items-center gap-1 text-sm hover:opacity-70 transition-opacity"
                >
                  {item.name}
                  {item.submenu && <ChevronDown className="w-4 h-4" />}
                </a>
                
                {/* Dropdown */}
                {item.submenu && openDropdown === item.name && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-lg overflow-hidden z-50"
                  >
                    {item.submenu.map((subItem) => (
                      <a
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-3 hover:bg-gray-50 transition-colors"
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button 
              asChild
              className="rounded-full px-6 transition-all duration-300 hover:scale-105"
              style={{ 
                background: 'linear-gradient(135deg, #D4AF37 0%, #F4E5C3 100%)',
                color: '#1a1a1a'
              }}
            >
              <a href="/booking">Book Appointment</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
              {menuItems.map((item) => (
                <div key={item.name}>
                  <a
                    href={item.href}
                    className="block py-2 hover:opacity-70 transition-opacity"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                  {item.submenu && (
                    <div className="pl-4 flex flex-col gap-1">
                      {item.submenu.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="block py-1 text-sm opacity-70 hover:opacity-100"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Button 
                asChild
                className="w-full mt-4 rounded-full"
                style={{ 
                  background: 'linear-gradient(135deg, #D4AF37 0%, #F4E5C3 100%)',
                  color: '#1a1a1a'
                }}
              >
                <a href="/booking">Book Appointment</a>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
