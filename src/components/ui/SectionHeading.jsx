import clsx from 'clsx';
import Reveal from './Reveal';

/**
 * Eyebrow + serif title + optional supporting copy.
 * `align` controls text alignment; `tone` adapts colors for dark sections.
 */
const SectionHeading = ({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  tone = 'dark', // 'dark' text for light bg, 'light' text for dark bg
  className,
}) => {
  const isLight = tone === 'light';

  return (
    <Reveal
      className={clsx(
        'max-w-2xl',
        align === 'center' && 'mx-auto text-center',
        className
      )}
    >
      {eyebrow && (
        <span
          className={clsx(
            'mb-3 inline-block text-xs font-semibold uppercase tracking-[0.25em]',
            isLight ? 'text-gold-soft' : 'text-gold'
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={clsx(
          'font-serif text-3xl font-bold leading-tight sm:text-4xl md:text-5xl',
          isLight ? 'text-cream' : 'text-espresso'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={clsx(
            'mt-4 text-base leading-relaxed sm:text-lg',
            isLight ? 'text-cream/70' : 'text-charcoal/70'
          )}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
};

export default SectionHeading;
