import { useEffect, useState } from 'react';
import { MapPin, ArrowUpRight, X } from 'lucide-react';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';
import { branches } from '../../data/branches';

/** Single location card with a subtle map-styled backdrop. */
const BranchCard = ({ branch, onOpenMap }) => {
  const hasMap = Boolean(branch.map);
  const Tag = hasMap ? 'button' : 'a';
  const tagProps = hasMap
    ? { type: 'button', onClick: () => onOpenMap(branch) }
    : { href: '#contact' };

  return (
    <Tag
      {...tagProps}
      className="group relative block w-full overflow-hidden rounded-3xl bg-white p-7 text-left shadow-sm ring-1 ring-charcoal/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-charcoal/10"
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
    </Tag>
  );
};

/** Google Maps modal for a selected branch. Closes on backdrop click / Escape. */
const MapModal = ({ branch, onClose }) => {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const query = encodeURIComponent(branch.map);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Map of ${branch.name}`}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/60 p-4 backdrop-blur-sm"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-2xl"
      >
        <div className="flex items-start justify-between gap-4 p-6">
          <div>
            <h3 className="font-serif text-2xl font-bold text-espresso">
              {branch.name}
            </h3>
            <p className="mt-1 text-sm font-medium uppercase tracking-wide text-gold">
              {branch.city}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-charcoal/70">
              {branch.detail}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close map"
            className="shrink-0 rounded-full bg-cream p-2 text-charcoal/60 transition-colors hover:text-roast"
          >
            <X size={20} />
          </button>
        </div>

        <iframe
          title={`Map of ${branch.name}`}
          src={`https://maps.google.com/maps?q=${query}&output=embed`}
          className="h-80 w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />

        <div className="p-4">
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${query}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-roast transition-colors hover:text-gold"
          >
            Open in Google Maps
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};

/** Branches / locations section. */
const Branches = () => {
  const [activeBranch, setActiveBranch] = useState(null);

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
            <BranchCard branch={branch} onOpenMap={setActiveBranch} />
          </Reveal>
        ))}
      </div>

      {activeBranch && (
        <MapModal branch={activeBranch} onClose={() => setActiveBranch(null)} />
      )}
    </Section>
  );
};

export default Branches;
