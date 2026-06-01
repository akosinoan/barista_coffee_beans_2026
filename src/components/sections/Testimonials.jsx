import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import clsx from 'clsx';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';
import { testimonials } from '../../data/testimonials';

const PER_PAGE = 2;
const AUTOPLAY_MS = 6000;

const TestimonialCard = ({ t }) => (
  <figure className="flex h-full flex-col rounded-3xl bg-white p-8 shadow-sm ring-1 ring-charcoal/5">
    <Quote size={32} className="text-gold/40" aria-hidden="true" />
    <blockquote className="mt-4 flex-1 text-base leading-relaxed text-charcoal/80">
      “{t.quote}”
    </blockquote>
    <div className="mt-6 flex items-center gap-4 border-t border-charcoal/10 pt-5">
      <img
        src={t.image}
        alt={t.name}
        loading="lazy"
        className="h-14 w-14 shrink-0 rounded-full object-cover ring-2 ring-gold/30"
      />
      <figcaption className="min-w-0 flex-1">
        <p className="font-serif text-lg font-bold leading-tight text-espresso">{t.name}</p>
        {t.title && <p className="mt-0.5 text-sm leading-snug text-charcoal/60">{t.title}</p>}
        <div className="mt-1.5 flex" aria-label={`${t.rating} out of 5 stars`}>
          {Array.from({ length: t.rating }).map((_, i) => (
            <Star key={i} size={14} className="fill-gold text-gold" />
          ))}
        </div>
      </figcaption>
    </div>
  </figure>
);

// Group testimonials into pages of PER_PAGE.
const pages = Array.from(
  { length: Math.ceil(testimonials.length / PER_PAGE) },
  (_, i) => testimonials.slice(i * PER_PAGE, i * PER_PAGE + PER_PAGE)
);

/** Auto-advancing testimonial carousel showing two reviews at a time. */
const Testimonials = () => {
  const reduceMotion = useReducedMotion();
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const count = pages.length;

  const go = (next) => {
    setDirection(next > page ? 1 : -1);
    setPage((next + count) % count);
  };

  // Autoplay (pauses on hover/focus).
  useEffect(() => {
    if (paused || count <= 1) return;
    const id = setInterval(() => {
      setDirection(1);
      setPage((p) => (p + 1) % count);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, count]);

  const variants = reduceMotion
    ? { enter: { opacity: 0 }, center: { opacity: 1 }, exit: { opacity: 0 } }
    : {
        enter: (d) => ({ opacity: 0, x: d * 60 }),
        center: { opacity: 1, x: 0 },
        exit: (d) => ({ opacity: 0, x: d * -60 }),
      };

  return (
    <Section id="testimonials" bg="cream">
      <SectionHeading eyebrow="Loved by Coffee Lovers" title="What Our Regulars Say" />

      <Reveal
        className="relative mt-14"
        // pause autoplay while the user is interacting
        // (events bubble up from the inner content)
      >
        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 gap-7 md:grid-cols-2"
            >
              {pages[page].map((t) => (
                <TestimonialCard key={t.name} t={t} />
              ))}
              {/* keep the row balanced when the last page has a single card */}
              {pages[page].length === 1 && <div className="hidden md:block" />}
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-center gap-5">
            <button
              type="button"
              onClick={() => go(page - 1)}
              aria-label="Previous testimonials"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-espresso shadow-sm ring-1 ring-charcoal/10 transition-colors hover:bg-espresso hover:text-cream"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex items-center gap-2">
              {pages.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => go(i)}
                  aria-label={`Go to testimonials ${i + 1}`}
                  aria-current={i === page}
                  className={clsx(
                    'h-2.5 rounded-full transition-all duration-300',
                    i === page ? 'w-7 bg-gold' : 'w-2.5 bg-charcoal/20 hover:bg-charcoal/40'
                  )}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => go(page + 1)}
              aria-label="Next testimonials"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-espresso shadow-sm ring-1 ring-charcoal/10 transition-colors hover:bg-espresso hover:text-cream"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </Reveal>
    </Section>
  );
};

export default Testimonials;
