// =============================================================================
// BRAND STORY: fully editable.
//
// Each object is one chapter of the Barista Coffee Beans journey, rendered as a
// slide in the Story carousel. To edit the story:
//   • Change `year`, `kicker`, `title`, or the `paragraphs` array.
//   • `image` is the chapter photo (files live in /public/images/story/).
//   • Optional fields render only when present:
//       - `badge`  : a small highlight pill (e.g. 'FDA-Approved').
//       - `tags`   : array of labels (e.g. delivery platforms).
//       - `quote`  : { text, source } shown as a pull-quote.
//
// Transcribed from the original site's story carousel slides.
// =============================================================================

export const storyChapters = [
  {
    year: '2020',
    kicker: 'The Birth',
    title: 'The Birth of Barista Coffee Beans',
    image: '/images/story/chapter-1.png',
    paragraphs: [
      'When the pandemic hit, our family travel-agency business spiraled downward and we had to find another way to survive.',
      'Stuck at home, we began experimenting with coffee and crafting our own concoctions. That passion grew into a need to share it, so we started joining bazaars and even offered mobile espresso bars at events like weddings.',
    ],
  },
  {
    year: '2021',
    kicker: 'First Branch',
    title: 'Opening of the First Branch',
    image: '/images/story/chapter-2.png',
    paragraphs: [
      'The bazaars turned out great. The loyal customers we gained along the way pushed us to believe in our products and finally lease a permanent space.',
      'Our first branch opened at the Ground Floor Fountain Area of Greenhills Shopping Center, where we expanded into coffee and non-coffee drinks alongside our original coffee beans.',
    ],
    badge: 'Now a Registered Trademark',
  },
  {
    year: '2021',
    kicker: 'Second Branch',
    title: 'Expanding to a Second Branch',
    image: '/images/story/chapter-3.png',
    paragraphs: [
      'Motivated by the turnout of the first branch, just six months later we opened a store with dine-in seating at Fisher Mall, Roosevelt Avenue corner Quezon Avenue.',
      'At 40 square meters, it became our biggest store yet, and the growing online community let us reach customers far beyond our counters.',
    ],
    tags: ['Shopee', 'FoodPanda', 'GrabFood', 'Pushkart PH'],
  },
  {
    year: '2022',
    kicker: 'SM Branch',
    title: 'Penetrating SM Malls',
    image: '/images/story/chapter-4.png',
    paragraphs: [
      'A new year brought new hope and new opportunities. It was a big yes when SM Megamall called us up with the good news.',
      'Our branch at the Lower Ground Floor of Building A, near Timezone, became the perfect spot for people on the go, with a small dine-in for those who want to stay a while.',
    ],
    badge: 'Now on SM Online',
  },
  {
    year: '2022',
    kicker: 'Franchise',
    title: 'Now Open for Franchising',
    image: '/images/story/chapter-5.png',
    paragraphs: [
      'We ended the year with a blast. Our TriNoma and Marawi branches opened almost at the same time in the last quarter of 2022, a true franchise-history breakthrough.',
      'With demand and expectations growing, our franchisees are now here with us in business and in camaraderie.',
    ],
    badge: 'FDA-Approved',
  },
  {
    year: '2023',
    kicker: 'Greater Heights',
    title: 'Reaching Greater Heights',
    image: '/images/story/chapter-6.png',
    paragraphs: [
      'Staying faithful that our tents will keep expanding, we go as far as opportunities allow: meeting people, sharing our passion, creating memories, and brewing quality coffee.',
      'We never forget where it all began, and above all else we keep giving back the glory to God.',
    ],
    quote: {
      text: 'Taste and see that the Lord is good. Blessed is the one who takes refuge in Him.',
      source: 'Psalm 34:8',
    },
  },
];
