import { useState, useEffect } from 'react';
import { Header } from './components/00_Header';
import { FloatingContactButton } from './components/12_FloatingContactButton';
import { Footer } from './components/10_Footer';
import { HomePage } from './pages/HomePage';
import { MensServicesPage } from './pages/01_MensServicesPage';
import { LadiesServicesPage } from './pages/02_LadiesServicesPage';
import { PricingPage } from './pages/03_PricingPage';
import { AboutPage } from './pages/04_AboutPage';
import { StoreLocatorPage } from './pages/05_StoreLocatorPage';
import { BlogPage } from './pages/06_BlogPage';
import { BookingPage } from './pages/07_BookingPage';
import { StudioPage } from './pages/StudioPage';
import { AcademyPage } from './pages/AcademyPage';
import { ContactPage } from './pages/ContactPage';
import { CoursesPage } from './pages/CoursesPage';
import { ThankYouPage } from './pages/ThankYouPage';
import { CourseEnrollPage } from './pages/CourseEnrollPage';
import { Preloader } from './components/13_Preloader';
import { AnimatePresence } from 'motion/react';

function App() {
  const [currentPage, setCurrentPage] = useState(window.location.pathname || '/');
  const [showPreloader, setShowPreloader] = useState(true);

  // Listen to browser navigation (back/forward)
  useEffect(() => {
    const handleRouteChange = () => {
      const path = window.location.pathname || '/';
      setCurrentPage(path);
      window.scrollTo(0, 0);
      // If there's a hash in the URL, scroll to it after the page content renders
      if (window.location.hash) {
        const id = window.location.hash.replace('#', '');
        // Defer to ensure DOM is updated for the new page
        setTimeout(() => {
          const el = document.getElementById(id);
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 0);
      }
    };

    window.addEventListener('popstate', handleRouteChange);
    handleRouteChange();

    return () => window.removeEventListener('popstate', handleRouteChange);
  }, []);

  // Intercept internal link clicks to perform SPA navigation via History API
  useEffect(() => {
    // Show preloader until window "load" for first visit; fallback to max 3s
    let cleared = false;
    const minDelay = 600;
    const start = Date.now();
    const hide = () => {
      if (cleared) return;
      const elapsed = Date.now() - start;
      const remaining = Math.max(0, minDelay - elapsed);
      setTimeout(() => setShowPreloader(false), remaining);
      cleared = true;
    };
    const onLoad = () => hide();
    window.addEventListener('load', onLoad);
    const fallback = setTimeout(hide, 3000);

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      
      if (link && link.href) {
        const url = new URL(link.href);
        if (url.origin === window.location.origin) {
          // Allow in-page anchors on the same path
          if (url.pathname === window.location.pathname && url.hash) return;

          // If navigating to a different internal path, prevent full reload
          if (url.pathname !== window.location.pathname) {
            e.preventDefault();
            const nextUrl = url.pathname + (url.hash || '');
            window.history.pushState({}, '', nextUrl);
            setCurrentPage(url.pathname || '/');
            window.scrollTo(0, 0);
            // If target has a hash, scroll to the element
            if (url.hash) {
              const id = url.hash.replace('#', '');
              setTimeout(() => {
                const el = document.getElementById(id);
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }, 0);
            }
          }
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
      window.removeEventListener('load', onLoad);
      clearTimeout(fallback);
    };
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case '/':
        return <HomePage />;
      case '/services/mens':
        return <MensServicesPage />;
      case '/services/ladies':
        return <LadiesServicesPage />;
      case '/pricing':
        return <PricingPage />;
      case '/about':
        return <AboutPage />;
      case '/stores':
        return <StoreLocatorPage />;
      case '/blog':
        return <BlogPage />;
      case '/booking':
        return <BookingPage />;
      case '/studio':
        return <StudioPage />;
      case '/academy':
        return <AcademyPage />;
      case '/courses':
        return <CoursesPage />;
      case '/contact':
        return <ContactPage />;
      case '/thank-you':
        return <ThankYouPage />;
      case '/enroll':
        return <CourseEnrollPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen">
      <AnimatePresence>{showPreloader && <Preloader />}</AnimatePresence>
      <Header />
      <main>
        {renderPage()}
      </main>
      <Footer />
      <FloatingContactButton />
    </div>
  );
}

export default App;
