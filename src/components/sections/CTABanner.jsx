import { ArrowRight } from 'lucide-react';
import Reveal from '../ui/Reveal';
import Button from '../ui/Button';
import { images } from '../../data/images';
import { contactEmail } from '../../data/nav';

/** Full-width call-to-action banner driving branch visits / inquiries. */
const CTABanner = () => {
  return (
    <section id="contact" className="relative overflow-hidden bg-espresso">
      <img
        src={images.background}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-espresso via-espresso/90 to-roast/70" />

      <div className="relative mx-auto max-w-4xl px-5 py-24 text-center sm:px-8 sm:py-32">
        <Reveal>
          <h2 className="font-serif text-3xl font-bold leading-tight text-cream sm:text-4xl md:text-5xl">
            Your Next Favorite Cup Is Waiting
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-cream/75 sm:text-lg">
            Drop by your nearest branch or reach out to us for orders and
            inquiries. We’d love to share a cup with you.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Button href="#branches" variant="primary" size="lg">
              Find a Branch <ArrowRight size={18} />
            </Button>
            <Button href={`mailto:${contactEmail}`} variant="outline" size="lg">
              Inquire Now
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default CTABanner;
