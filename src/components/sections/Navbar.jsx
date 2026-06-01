import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import clsx from 'clsx';
import Button from '../ui/Button';
import { images } from '../../data/images';
import { navLinks } from '../../data/nav';

/**
 * Sticky navbar: transparent over the hero, frosted/solid once scrolled.
 * Includes an animated mobile menu.
 */
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Prevent body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header
      className={clsx(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-espresso/90 py-2 shadow-lg shadow-charcoal/20 backdrop-blur-md'
          : 'bg-transparent py-4'
      )}
    >
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#home" className="flex items-center" aria-label="Barista Coffee Beans home">
          <img
            src={images.logo}
            alt="Barista Coffee Beans"
            className="h-12 w-auto object-contain sm:h-14"
          />
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium tracking-wide text-cream/80 transition-colors hover:text-gold"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button href="#contact" variant="primary" size="md">
            Find a Branch
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="text-cream lg:hidden"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden"
          >
            <ul className="mx-4 mt-2 space-y-1 rounded-2xl bg-espresso/95 p-4 shadow-xl backdrop-blur-md">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block rounded-lg px-4 py-3 text-cream/90 transition-colors hover:bg-roast/60 hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <Button
                  href="#contact"
                  variant="primary"
                  className="w-full"
                  onClick={() => setMenuOpen(false)}
                >
                  Find a Branch
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
