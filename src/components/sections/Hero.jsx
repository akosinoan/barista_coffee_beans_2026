import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Star, MapPin } from 'lucide-react';
import Button from '../ui/Button';
import { images } from '../../data/images';

/**
 * Full-viewport cinematic hero with a coffee backdrop, headline,
 * dual CTAs, a floating product visual and a social-proof row.
 */
const Hero = () => {
  const reduceMotion = useReducedMotion();

  const float = reduceMotion
    ? {}
    : {
        animate: { y: [0, -16, 0] },
        transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
      };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-charcoal"
    >
      {/* Background image + gradient overlay */}
      <img
        src={images.hero}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/85 to-charcoal/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-charcoal/30" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-5 pt-28 pb-16 sm:px-8 lg:grid-cols-12 lg:pt-0">
        {/* Copy */}
        <motion.div
          className="lg:col-span-7"
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="mb-5 inline-block rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-gold-soft">
            Premium Philippine Gourmet Coffee
          </span>
          <h1 className="font-serif text-4xl font-bold leading-[1.1] text-cream sm:text-5xl md:text-6xl lg:text-7xl">
            Crafted for True
            <br />
            <span className="text-gold">Coffee Lovers</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/75 sm:text-lg">
            Expertly roasted Robusta blends born from Philippine coffee
            culture: bold, aromatic, and affordably gourmet. From Barako to
            Belgian Choco, every cup is an experience worth savoring.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button href="#menu" variant="primary" size="lg">
              Explore the Menu <ArrowRight size={18} />
            </Button>
            <Button href="#story" variant="outline" size="lg">
              Our Story
            </Button>
          </div>

          {/* Social proof */}
          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
            <div className="flex items-center gap-2">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={18} className="fill-gold text-gold" />
                ))}
              </div>
              <span className="text-sm text-cream/70">
                Loved by coffee lovers nationwide
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm text-cream/70">
              <MapPin size={18} className="text-gold" />6 branches & growing
            </div>
          </div>
        </motion.div>

        {/* Floating product visual */}
        <div className="hidden lg:col-span-5 lg:block">
          <motion.div className="relative mx-auto w-fit" {...float}>
            <div className="absolute -inset-6 rounded-full bg-gold/20 blur-3xl" />
            <img
              src={images.logoMark}
              alt="Barista Coffee Beans logo"
              className="relative h-80 w-80 rounded-full object-cover shadow-2xl ring-1 ring-gold/30 xl:h-96 xl:w-96"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
