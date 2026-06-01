import clsx from 'clsx';

/**
 * Consistent section wrapper: handles the vertical rhythm, max width,
 * horizontal padding, optional anchor id and background variant.
 */
const bgVariants = {
  light: 'bg-offwhite text-charcoal',
  cream: 'bg-cream text-charcoal',
  dark: 'bg-espresso text-cream',
  charcoal: 'bg-charcoal text-cream',
};

const Section = ({
  id,
  children,
  className,
  bg = 'light',
  container = true,
}) => {
  return (
    <section
      id={id}
      className={clsx('py-20 sm:py-28', bgVariants[bg], className)}
    >
      {container ? (
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">{children}</div>
      ) : (
        children
      )}
    </section>
  );
};

export default Section;
