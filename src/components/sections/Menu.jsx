import { Fragment, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import clsx from 'clsx';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';
import Dropdown from '../ui/Dropdown';
import { menuCategories, menuPromos } from '../../data/menu';

/** A single menu line: name + dotted leader + price. */
const MenuItem = ({ item }) => (
  <li className="flex items-baseline justify-between gap-3 py-2 sm:py-2.5">
    <div className="min-w-0">
      <p className="text-sm font-medium text-espresso sm:text-base">{item.name}</p>
      {item.desc && (
        <p className="mt-0.5 text-xs leading-snug text-charcoal/60 sm:text-sm">{item.desc}</p>
      )}
    </div>
    {/* dotted leader (desktop only) */}
    <span className="mx-1 hidden flex-1 translate-y-[-3px] border-b border-dotted border-charcoal/25 sm:block" />
    {item.price && (
      <span className="shrink-0 font-serif text-base font-semibold text-roast sm:text-lg">
        ₱{item.price}
      </span>
    )}
  </li>
);

/** Renders a category's items, inserting sub-headings when `group` changes. */
const CategoryItems = ({ items }) => {
  let lastGroup = null;
  return (
    <ul className="divide-y divide-charcoal/5">
      {items.map((item, i) => {
        const showGroup = item.group && item.group !== lastGroup;
        lastGroup = item.group ?? lastGroup;
        return (
          <Fragment key={`${item.name}-${i}`}>
            {showGroup && (
              <li className="pt-5 pb-1 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                {item.group}
              </li>
            )}
            <MenuItem item={item} />
          </Fragment>
        );
      })}
    </ul>
  );
};

/** Editable café menu with category tabs + promo cards. */
const Menu = () => {
  const [active, setActive] = useState(menuCategories[0].id);
  const category = menuCategories.find((c) => c.id === active) ?? menuCategories[0];

  return (
    <Section id="menu" bg="cream">
      <SectionHeading
        eyebrow="The Menu"
        title="Brewed Fresh, Made to Order"
        subtitle="From bold espresso classics to frosty frappés and hearty bites, there's a cup for every craving."
      />

      {/* Category selector: dropdown on mobile, pill tabs on larger screens */}
      <Reveal className="mt-12">
        <div className="mx-auto max-w-xs sm:hidden">
          <Dropdown
            ariaLabel="Select a menu category"
            options={menuCategories.map((c) => ({ value: c.id, label: c.name }))}
            value={active}
            onChange={setActive}
          />
        </div>
        <div className="hidden flex-wrap justify-center gap-2 sm:flex sm:gap-3">
          {menuCategories.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setActive(c.id)}
              aria-pressed={active === c.id}
              className={clsx(
                'rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300',
                active === c.id
                  ? 'bg-espresso text-cream shadow-md'
                  : 'bg-white text-charcoal/70 ring-1 ring-charcoal/10 hover:bg-white hover:text-espresso hover:ring-gold/50'
              )}
            >
              {c.name}
            </button>
          ))}
        </div>
      </Reveal>

      {/* Active category panel */}
      <div className="mt-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 gap-8 overflow-hidden rounded-3xl bg-white p-6 shadow-sm ring-1 ring-charcoal/5 sm:p-8 lg:min-h-[22rem] lg:grid-cols-5 lg:gap-12"
          >
            {/* Category photos: a row on mobile; on desktop the collage is
                absolutely positioned so the TEXT drives the card height and the
                photos size to fill it exactly. */}
            <div className="relative lg:col-span-2">
              <div className="flex h-64 gap-3 sm:h-80 lg:absolute lg:inset-0 lg:h-auto lg:flex-col">
                {category.images.map((src, i) => (
                  <div
                    key={src}
                    className="min-h-0 min-w-0 flex-1 overflow-hidden rounded-2xl"
                  >
                    <img
                      src={src}
                      alt={`${category.name} ${i + 1}`}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Items */}
            <div className="lg:col-span-3">
              <h3 className="font-serif text-2xl font-bold text-espresso">
                {category.name}
              </h3>
              {category.blurb && (
                <p className="mt-1 text-sm text-charcoal/60">{category.blurb}</p>
              )}
              <div className="mt-4">
                <CategoryItems items={category.items} />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Promos */}
      {menuPromos.length > 0 && (
        <div className="mt-14">
          <Reveal>
            <h3 className="text-center font-serif text-2xl font-bold text-espresso">
              Current Offers
            </h3>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 gap-7 md:grid-cols-2">
            {menuPromos.map((promo, i) => (
              <Reveal key={promo.title} delay={(i % 2) * 0.1}>
                <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-charcoal/5 sm:flex-row">
                  <div className="sm:w-2/5">
                    <img
                      src={promo.image}
                      alt={promo.title}
                      loading="lazy"
                      className="h-48 w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-full"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-center p-6">
                    <h4 className="font-serif text-xl font-bold text-espresso">
                      {promo.title}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-charcoal/70">
                      {promo.desc}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      )}
    </Section>
  );
};

export default Menu;
