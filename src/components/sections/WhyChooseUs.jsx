import { Flame, Leaf, Wallet, MapPin, HandHeart } from 'lucide-react';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';

const features = [
  {
    icon: Flame,
    title: 'Expertly Roasted',
    text: 'Every blend is roasted to its ideal profile by people who live and breathe coffee.',
  },
  {
    icon: Leaf,
    title: 'Premium Robusta Beans',
    text: 'Bold, full-bodied Robusta sourced and crafted for an unmistakably rich cup.',
  },
  {
    icon: Wallet,
    title: 'Affordable Gourmet',
    text: 'A genuinely premium experience at a price that fits your everyday ritual.',
  },
  {
    icon: MapPin,
    title: 'Nationwide Branches',
    text: 'Find us in malls and markets across the Philippines, from Manila to Marawi.',
  },
  {
    icon: HandHeart,
    title: 'Handcrafted Quality',
    text: 'Made with care, cup after cup, by baristas who take pride in every pour.',
  },
];

/** Icon grid highlighting the brand's value propositions. */
const WhyChooseUs = () => {
  return (
    <Section id="why" bg="charcoal">
      <SectionHeading
        eyebrow="Why Choose Us"
        title="Crafted with Purpose"
        subtitle="What sets every Barista Coffee Beans cup apart."
        tone="light"
      />

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => (
          <Reveal key={f.title} delay={(i % 3) * 0.08}>
            <div className="group h-full rounded-3xl border border-cream/10 bg-espresso/40 p-8 transition-colors duration-300 hover:border-gold/40 hover:bg-espresso/70">
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/15 text-gold transition-transform duration-300 group-hover:scale-110">
                <f.icon size={26} />
              </div>
              <h3 className="font-serif text-xl font-bold text-cream">
                {f.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-cream/70">
                {f.text}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
};

export default WhyChooseUs;
