// Centralized image sources so they are easy to swap later.
// Local assets live in /public; remote photography is sourced from Unsplash
// (free to use) and pinned with sizing params for performance.

const unsplash = (id, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const images = {
  // Local brand assets (kept from the original site)
  logo: '/BaristaLogo.png',
  logoMark: '/barista_logo.jpg', // white wordmark on black, square
  beanIcon: '/BaristaBeanIcon.png',
  background: '/baristaBackground.jpg',

  // Hero
  hero: unsplash('1447933601403-0c6688de566e', 2000), // dark pour-over coffee
  heroProduct: unsplash('1559056199-641a0ac8b55e', 800), // coffee cup top-down

  // Story collage (mix of local story shots + warm cafe imagery)
  storyMain: unsplash('1442512595331-e89e73853f31', 1000), // barista pouring
  storySecondary: unsplash('1511920170033-f8396924c348', 800), // latte art cup
};

// Story photos shipped with the original site.
export const storyPhotos = Array.from(
  { length: 9 },
  (_, i) => `/story/baristaStory-${i + 1}.png`
);

// Gallery shots: real brand event/pop-up photos cropped from the original
// story slides.
export const galleryImages = [
  { src: '/images/gallery/event-2.png', alt: 'Barista at a Barista Coffee Beans event booth' },
  { src: '/images/gallery/event-4.png', alt: 'The team at an SMX travel expo booth' },
  { src: '/images/gallery/event-1.png', alt: 'Barista Coffee Beans cart at a wedding' },
  { src: '/images/gallery/event-5.png', alt: 'A Barista cup at a Wack-Wack clubhouse party' },
  { src: '/images/gallery/event-6.png', alt: 'Barista Coffee Beans mall pop-up booth' },
  { src: '/images/gallery/event-3.png', alt: 'A Barista cup at the Travel Madness Expo' },
];

export { unsplash };
