import clsx from 'clsx';

/**
 * Shared CTA button / link. Renders an <a> when `href` is provided,
 * otherwise a <button>. Variants: primary (gold), solid (espresso),
 * outline, ghost.
 */
const variants = {
  primary:
    'bg-gold text-charcoal hover:bg-gold-soft shadow-lg shadow-gold/20',
  solid: 'bg-espresso text-cream hover:bg-roast',
  outline:
    'border border-cream/40 text-cream hover:bg-cream hover:text-charcoal',
  ghost: 'text-charcoal hover:text-roast',
};

const sizes = {
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
};

const Button = ({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className,
  ...props
}) => {
  const classes = clsx(
    'inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-wide transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2',
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
