import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight, BadgeCheck, Quote } from 'lucide-react';
import clsx from 'clsx';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';
import Button from '../ui/Button';
import Dropdown from '../ui/Dropdown';
import { storyChapters } from '../../data/story';

const pad = (n) => String(n).padStart(2, '0');

/**
 * Our Story: a chapter carousel walking through the brand's journey
 * (2020 to 2023). Real text and branch photos transcribed from the
 * original site's story slides.
 */
const Story = () => {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const count = storyChapters.length;
  const chapter = storyChapters[index];

  const go = (next) => {
    setDirection(next > index ? 1 : -1);
    setIndex((next + count) % count);
  };

  const slide = reduceMotion
    ? { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } }
    : {
        initial: { opacity: 0, x: direction * 40 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: direction * -40 },
      };

  return (
    <Section id="story" bg="light">
      <SectionHeading
        eyebrow="Our Story"
        title="From a Home Brew to Branches Nationwide"
        subtitle="What began as a pandemic experiment grew into a homegrown gourmet coffee brand. Here's how the journey unfolded."
      />

      {/* Chapter selector: dropdown on mobile, year rail on larger screens */}
      <Reveal className="mt-12">
        <div className="mx-auto max-w-xs sm:hidden">
          <Dropdown
            ariaLabel="Select a story chapter"
            options={storyChapters.map((c, i) => ({ value: i, label: `${c.year} · ${c.kicker}` }))}
            value={index}
            onChange={(i) => go(i)}
          />
        </div>
        <div className="hidden flex-wrap items-center justify-center gap-2 sm:flex sm:gap-3">
          {storyChapters.map((c, i) => (
            <button
              key={i}
              type="button"
              onClick={() => go(i)}
              aria-label={`${c.year}: ${c.kicker}`}
              aria-current={i === index}
              className={clsx(
                'rounded-full px-4 py-2 text-sm font-medium transition-all duration-300',
                i === index
                  ? 'bg-espresso text-cream shadow-md'
                  : 'bg-white text-charcoal/60 ring-1 ring-charcoal/10 hover:text-espresso hover:ring-gold/50'
              )}
            >
              <span className="font-serif font-bold">{c.year}</span>
              <span className="ml-2 hidden sm:inline">{c.kicker}</span>
            </button>
          ))}
        </div>
      </Reveal>

      {/* Carousel panel */}
      <div className="relative mt-10 overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-charcoal/5">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={index}
            initial={slide.initial}
            animate={slide.animate}
            exit={slide.exit}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 gap-0 lg:grid-cols-2"
          >
            {/* Photo: full image (contain) over a blurred fill of the same shot */}
            <div className="relative min-h-[16rem] overflow-hidden bg-cream lg:min-h-[30rem]">
              <img
                src={chapter.image}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full w-full scale-110 object-cover blur-2xl"
              />
              <img
                src={chapter.image}
                alt={`${chapter.title} (${chapter.year})`}
                loading="lazy"
                className="relative h-64 w-full object-contain lg:absolute lg:inset-0 lg:h-full"
              />
              <div className="absolute left-5 top-5 rounded-2xl bg-gold px-4 py-2 text-charcoal shadow-lg">
                <span className="font-serif text-2xl font-bold leading-none">
                  {chapter.year}
                </span>
              </div>
            </div>

            {/* Copy */}
            <div className="flex flex-col justify-center p-7 sm:p-10">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
                {chapter.kicker}
              </span>
              <h3 className="mt-2 font-serif text-2xl font-bold text-espresso sm:text-3xl">
                {chapter.title}
              </h3>

              <div className="mt-4 space-y-3 text-base leading-relaxed text-charcoal/75">
                {chapter.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              {chapter.tags && (
                <div className="mt-5 flex flex-wrap gap-2">
                  {chapter.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-cream px-3 py-1 text-xs font-medium text-roast"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}

              {chapter.badge && (
                <div className="mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-espresso/5 px-4 py-2 text-sm font-semibold text-espresso">
                  <BadgeCheck size={16} className="text-gold" />
                  {chapter.badge}
                </div>
              )}

              {chapter.quote && (
                <figure className="mt-6 border-l-2 border-gold pl-4">
                  <Quote size={20} className="text-gold/50" aria-hidden="true" />
                  <blockquote className="mt-1 font-serif text-lg italic text-espresso">
                    {chapter.quote.text}
                  </blockquote>
                  <figcaption className="mt-1 text-sm text-charcoal/60">
                    {chapter.quote.source}
                  </figcaption>
                </figure>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="mt-6 flex items-center justify-between">
        <button
          type="button"
          onClick={() => go(index - 1)}
          aria-label="Previous chapter"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-espresso shadow-sm ring-1 ring-charcoal/10 transition-colors hover:bg-espresso hover:text-cream"
        >
          <ChevronLeft size={22} />
        </button>

        <span className="font-serif text-sm tracking-widest text-charcoal/50">
          {pad(index + 1)} / {pad(count)}
        </span>

        <button
          type="button"
          onClick={() => go(index + 1)}
          aria-label="Next chapter"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-espresso shadow-sm ring-1 ring-charcoal/10 transition-colors hover:bg-espresso hover:text-cream"
        >
          <ChevronRight size={22} />
        </button>
      </div>

      <Reveal className="mt-10 text-center">
        <Button href="#menu" variant="solid" size="lg">
          Taste the Difference
        </Button>
      </Reveal>
    </Section>
  );
};

export default Story;
