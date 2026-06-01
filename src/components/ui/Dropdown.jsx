import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import clsx from 'clsx';

/**
 * Compact dropdown selector used on mobile in place of a long row of pill
 * buttons (Menu categories, Story chapters). Closes on outside click / Escape.
 *
 * Props:
 *   options:  [{ value, label }]
 *   value:    currently selected value
 *   onChange: (value) => void
 */
const Dropdown = ({ options, value, onChange, className, ariaLabel }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const selected = options.find((o) => o.value === value) ?? options[0];

  useEffect(() => {
    const onDocClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('mousedown', onDocClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDocClick);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  return (
    <div ref={ref} className={clsx('relative', className)}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={ariaLabel}
        className="flex w-full items-center justify-between gap-3 rounded-2xl bg-espresso px-5 py-3.5 text-cream shadow-md"
      >
        <span className="truncate font-medium">{selected.label}</span>
        <ChevronDown
          size={18}
          className={clsx('shrink-0 text-gold transition-transform duration-300', open && 'rotate-180')}
        />
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute left-0 right-0 z-30 mt-2 max-h-72 overflow-auto rounded-2xl bg-white py-1 shadow-xl ring-1 ring-charcoal/10"
        >
          {options.map((o) => (
            <li key={o.value}>
              <button
                type="button"
                role="option"
                aria-selected={o.value === value}
                onClick={() => {
                  onChange(o.value);
                  setOpen(false);
                }}
                className={clsx(
                  'block w-full px-5 py-3 text-left text-sm transition-colors',
                  o.value === value
                    ? 'bg-cream font-semibold text-espresso'
                    : 'text-charcoal/70 hover:bg-cream/60'
                )}
              >
                {o.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
