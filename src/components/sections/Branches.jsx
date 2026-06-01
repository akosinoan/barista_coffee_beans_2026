import { MapPin, ArrowUpRight } from 'lucide-react';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';
import { branches } from '../../data/branches';

/** Single location card with a subtle map-styled backdrop. */
const BranchCard = ({ branch }) => (
  <a
    href="#contact"
    className="group relative block overflow-hidden rounded-3xl bg-white p-7 shadow-sm ring-1 ring-charcoal/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-charcoal/10"
  >
    {/* Faux-map grid backdrop */}
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.04] transition-opacity duration-300 group-hover:opacity-[0.08]"
      style={{
        backgroundImage:
          'linear-gradient(#3a2418 1px, transparent 1px), linear-gradient(90deg, #3a2418 1px, transparent 1px)',
        backgroundSize: '22px 22px',
      }}
    />
    <div className="relative">
      <div className="flex items-start justify-between">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-cream text-roast">
          <MapPin size={20} />
        </span>
        <ArrowUpRight
          size={20}
          className="text-charcoal/30 transition-colors group-hover:text-gold"
        />
      </div>
      <h3 className="mt-5 font-serif text-2xl font-bold text-espresso">
        {branch.name}
      </h3>
      <p className="mt-1 text-sm font-medium uppercase tracking-wide text-gold">
        {branch.city}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-charcoal/70">
        {branch.detail}
      </p>
    </div>
  </a>
);

/** Branches / locations section. */
const Branches = () => {
  return (
    <Section id="branches" bg="cream">
      <SectionHeading
        eyebrow="Branches Nationwide"
        title="Come Visit Us"
        subtitle="Find your nearest Barista Coffee Beans and enjoy a freshly brewed cup, made the way it should be."
      />

      <div className="mt-14 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {branches.map((branch, i) => (
          <Reveal key={branch.name} delay={(i % 3) * 0.08}>
            <BranchCard branch={branch} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
};

export default Branches;
