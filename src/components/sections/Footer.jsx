import { Mail } from 'lucide-react';
import { images } from '../../data/images';
import { navLinks, socials, contactEmail } from '../../data/nav';

// Local social icons (lucide no longer ships brand marks).
const socialIcons = {
  Instagram: '/IG_logo.png',
  Facebook: '/fb-icon.png',
  Shopee: '/Shopee_logo.png',
};

/** Multi-column brand footer. */
const Footer = () => {
  return (
    <footer className="bg-charcoal text-cream">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div className="lg:col-span-2">
          <img
            src={images.logo}
            alt="Barista Coffee Beans"
            className="h-14 w-auto object-contain"
          />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream/65">
            Premium Philippine gourmet coffee, expertly roasted Robusta blends
            crafted for true coffee lovers. Affordable luxury, one cup at a time.
          </p>
          <div className="mt-6 flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-espresso/60 ring-1 ring-cream/10 transition-colors hover:bg-gold"
              >
                <img
                  src={socialIcons[s.label]}
                  alt=""
                  className="h-5 w-5 object-contain"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Explore */}
        <div>
          <h3 className="font-serif text-lg font-bold text-gold">Explore</h3>
          <ul className="mt-4 space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-cream/70 transition-colors hover:text-gold"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-serif text-lg font-bold text-gold">Get in Touch</h3>
          <a
            href={`mailto:${contactEmail}`}
            className="mt-4 inline-flex items-center gap-2 text-sm text-cream/70 transition-colors hover:text-gold"
          >
            <Mail size={16} />
            {contactEmail}
          </a>
          <p className="mt-4 text-sm leading-relaxed text-cream/65">
            6 branches nationwide, from Greenhills and Megamall to Marawi City.
          </p>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-2 px-5 py-6 text-xs text-cream/50 sm:flex-row sm:px-8">
          <p>© {new Date().getFullYear()} Barista Coffee Beans, Philippines. All rights reserved.</p>
          <p>Crafted for true coffee lovers.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
