# ☕ Barista Coffee Beans

A premium, conversion-focused marketing site for **Barista Coffee Beans**, a
Philippine gourmet coffee brand with six branches across Metro Manila and
Marawi. Built as a polished, production-grade single-page experience: cinematic
hero, an interactive café menu, brand storytelling, customer reviews, and clear
calls to action.

> Modern React, a hand-built coffee-inspired design system, motion that respects
> accessibility, and SEO baked in: a realistic example of the kind of marketing
> site I build for real businesses.

**Tech:** Vite · React 19 · Tailwind CSS v4 · Framer Motion · Lucide icons

---

## ✨ Highlights

- **Interactive café menu** with category tabs (pill tabs on desktop, a custom
  accessible dropdown on mobile), animated panel transitions, and per-category
  photo collages, all driven from a single editable data file.
- **Cinematic, responsive layout** built mobile-first, from the floating-product
  hero to a masonry gallery and multi-column footer.
- **Motion that respects users**: every scroll and hover animation honors
  `prefers-reduced-motion` and falls back to a static render.
- **SEO and social-ready**: full Open Graph and Twitter cards, canonical URL,
  `robots.txt`, `sitemap.xml`, and JSON-LD structured data
  (`CafeOrCoffeeShop` with all six branch locations).
- **Content / presentation separation**: menu, branches, story, reviews, and
  navigation all live in `src/data/`, so a non-developer can update copy and
  prices without touching components.
- **Performance-minded**: lazy-loaded imagery with descriptive `alt` text,
  preconnected fonts, and a lean Vite build.

## 🧱 Tech Stack

| Concern        | Choice                                              |
| -------------- | --------------------------------------------------- |
| Build tool     | [Vite](https://vitejs.dev/) (instant HMR, fast builds) |
| UI             | [React 19](https://react.dev/)                      |
| Styling        | [Tailwind CSS v4](https://tailwindcss.com/) via `@theme` tokens |
| Animation      | [Framer Motion](https://www.framer.com/motion/)     |
| Icons          | [Lucide](https://lucide.dev/)                       |
| Class merging  | [clsx](https://github.com/lukeed/clsx)              |

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Open the URL printed in the terminal (e.g. <http://localhost:5173>).

### Scripts

- `npm run dev`: start the Vite dev server with hot module replacement.
- `npm run build`: build the production bundle into `dist/`.
- `npm run preview`: serve the production build locally.

## 🗂️ Project Structure

```
index.html                 # HTML entry: SEO meta, Open Graph, JSON-LD, fonts
public/                    # Static assets (logos, menu/story/gallery photos, robots, sitemap)
src/
  main.jsx                 # App entry: mounts React, imports globals.css
  App.jsx                  # Page composition (Navbar + sections + Footer)
  globals.css              # Tailwind v4 entry + @theme design tokens
  data/                    # Content & config, separated from presentation
    menu.js                #   7 menu categories + limited-time promos
    branches.js            #   6 branch locations
    story.js               #   brand story chapters
    testimonials.js        #   customer reviews
    nav.js                 #   nav links, socials, contact email
    images.js              #   centralized image URLs
  components/
    ui/                    # Reusable primitives
      Section.jsx          #   section wrapper (rhythm, bg variants)
      SectionHeading.jsx   #   eyebrow + serif title + subtitle
      Button.jsx           #   CTA button/link with variants
      Dropdown.jsx         #   accessible custom select (mobile menu picker)
      Reveal.jsx           #   fade-up-on-scroll (respects reduced motion)
    sections/              # Page sections
      Navbar.jsx           #   sticky transparent→solid nav + mobile menu
      Hero.jsx             #   cinematic hero with floating product visual
      Menu.jsx             #   interactive tabbed café menu + promo cards
      Story.jsx            #   brand story split layout + image collage
      WhyChooseUs.jsx      #   value-prop icon grid
      Branches.jsx         #   location cards
      Gallery.jsx          #   masonry coffee gallery
      Testimonials.jsx     #   review cards
      CTABanner.jsx        #   full-width call-to-action
      Footer.jsx           #   multi-column brand footer
```

## 🎨 Design System

The coffee-inspired palette and font pairing are defined once as Tailwind tokens
via `@theme` in `src/globals.css`, then used everywhere as utilities like
`bg-espresso`, `text-gold`, `bg-cream`, `font-serif`, and `font-sans`.

| Token       | Hex       | Token        | Hex       |
| ----------- | --------- | ------------ | --------- |
| `espresso`  | `#3a2418` | `gold`       | `#c79a52` |
| `roast`     | `#5a3a28` | `gold-soft`  | `#d9b878` |
| `cream`     | `#f5ede1` | `charcoal`   | `#1c1714` |
| `beige`     | `#e3d2bb` | `offwhite`   | `#faf7f2` |

Typography pairs **Playfair Display** (serif headings) with **Inter** (sans body).

## 📝 Editing Content

Most updates need no React knowledge: the data files in `src/data/` are heavily
commented and map directly to what renders on screen.

- **Menu** (`menu.js`): add, remove, or reorder categories and items; edit
  names, descriptions, and prices. The peso sign (₱) is added automatically, and
  items sharing a `group` render under a sub-heading.
- **Branches, reviews, story** (`branches.js`, `testimonials.js`, `story.js`):
  edit the arrays to change cards and copy.
- **Navigation & socials** (`nav.js`): manage anchor links, social profiles, and
  the contact email shared by the navbar and footer.

## ♿ Accessibility & Performance Notes

- All scroll/hover animations honor `prefers-reduced-motion`.
- The mobile menu picker is a fully keyboard- and screen-reader-friendly custom
  dropdown; menu tabs expose `aria-pressed` state.
- Images outside the hero use `loading="lazy"` with descriptive `alt` text.
- Google Fonts are preconnected and loaded with `display=swap`.

---

## 👋 About this project

I'm a frontend freelancer who builds fast, accessible, conversion-focused
marketing sites for small businesses. This project showcases how I approach a
real brief end to end: a maintainable design system, clean component
architecture, content a client can edit themselves, and the SEO and
accessibility details that production sites actually need.

**Open to freelance work and full-time frontend roles.** Reach me at
[noan.babao@gmail.com](mailto:noan.babao@gmail.com).
