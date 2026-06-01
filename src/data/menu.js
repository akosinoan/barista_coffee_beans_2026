// =============================================================================
// CAFÉ MENU: fully editable.
//
// To change the menu in the future, just edit the objects below:
//   • Add / remove / reorder categories or items.
//   • Edit `name`, `desc` (description) and `price`.
//   • `price` is a plain string (e.g. '140'). The peso sign (₱) is added
//     automatically. Set `price: ''` to hide the price for an item.
//   • `group` is optional; items sharing a group render under a sub-heading.
//   • `images` is an array of category photos (files live in
//     /public/images/menu/). Add or remove entries freely; they render as a
//     collage. The promos below still use a single `image` each.
//
// Prices transcribed from the menu-board photos.
// =============================================================================

export const menuCategories = [
  {
    id: 'hot-coffee',
    name: 'Hot Coffee',
    blurb: 'Rich espresso classics, served warm.',
    images: [
      '/images/menu/hot-coffee-1.png',
      '/images/menu/hot-coffee-2.png',
      '/images/menu/hot-coffee-3.png',
    ],
    items: [
      { name: 'Americano', desc: 'Rich espresso shot, hot water', price: '95' },
      { name: 'Flat White', desc: 'Espresso, steamed milk', price: '160' },
      { name: 'Cappuccino', desc: 'Espresso, steamed milk, foam', price: '180' },
      { name: 'Café Latte', desc: 'Espresso, steamed milk', price: '180' },
      { name: 'Café Mocha', desc: 'Original mocha blend latte', price: '190' },
      { name: 'Caramel Macchiato', desc: 'Doppio, steamed milk, caramel', price: '200' },
      { name: 'Spanish Latte', desc: 'Espresso, condensed milk', price: '200' },
    ],
  },
  {
    id: 'cold-coffee',
    name: 'Cold Coffee',
    blurb: 'The signature blend over ice.',
    images: [
      '/images/menu/cold-coffee-1.png',
      '/images/menu/cold-coffee-2.png',
    ],
    items: [
      { name: 'Iced Americano', desc: 'Americano topped with ice', price: '140' },
      { name: 'Iced Latte', desc: 'Signature blend, milk', price: '190' },
      { name: 'Iced Mocha', desc: 'Original mocha blend latte', price: '190' },
      { name: 'Iced Cappuccino', desc: 'Espresso, milk, foam', price: '190' },
      { name: 'Iced Spanish Latte', desc: 'Espresso, condensed milk', price: '220' },
      { name: 'Iced Caramel Macchiato', desc: 'Doppio, milk foam, caramel', price: '220' },
    ],
  },
  {
    id: 'organic',
    name: 'Organic Drinks',
    blurb: 'Clean, organic latte blends.',
    images: ['/images/menu/organic-1.png'],
    items: [
      { name: 'Fuji Latte', desc: 'Organic latte', price: '220' },
      { name: 'Sapporo', desc: 'Matcha-based organic latte', price: '220' },
    ],
  },
  {
    id: 'non-coffee',
    name: 'Non-Coffee',
    blurb: 'For the non-coffee crowd, hot or cold.',
    images: [
      '/images/menu/non-coffee-1.png',
      '/images/menu/non-coffee-2.png',
      '/images/menu/non-coffee-3.png',
    ],
    items: [
      { name: 'Hot Cocoa', desc: 'Creamy hot chocolate', price: '95' },
      { name: 'Choco Latte', desc: 'Cocoa, steamed milk · hot or cold', price: '180' },
      { name: 'Matcha Latte', desc: 'Matcha, milk · hot or cold', price: '180' },
    ],
  },
  {
    id: 'frappe-icecream',
    name: 'Frappé & Ice Cream',
    blurb: 'Blended, frosty and indulgent.',
    images: [
      '/images/menu/frappe-1.png',
      '/images/menu/frappe-2.png',
      '/images/menu/frappe-3.png',
    ],
    items: [
      { group: 'Ice Cream Delight', name: 'Affogato', desc: 'Creamy ice cream, espresso', price: '180' },
      { group: 'Ice Cream Delight', name: 'Coffee Float', desc: 'Iced americano topped with ice cream', price: '200' },
      { group: 'Ice Cream Delight', name: 'Mocha Frost', desc: 'Iced mocha topped with vanilla ice cream and frosting', price: '220' },
      { group: 'Frappé Series', name: 'Classic Frappé', desc: 'Blended café latte, espresso', price: '220' },
      { group: 'Frappé Series', name: 'Chocolate Chip Frappé', desc: 'Blended café latte, chocolate chips', price: '240' },
      { group: 'Frappé Series', name: 'Biscoff Frappé', desc: 'Blended café latte, biscoff cookies', price: '240' },
    ],
  },
  {
    id: 'cold-beverages',
    name: 'Cold Beverages',
    blurb: 'Refreshing, fruity and non-coffee.',
    images: [
      '/images/menu/cold-beverages-1.png',
      '/images/menu/cold-beverages-2.png',
      '/images/menu/cold-beverages-3.png',
    ],
    items: [
      { group: 'Tea-Based Refreshers', name: 'Strawberry Kiwi', desc: 'Tea-based refreshment', price: '180' },
      { group: 'Tea-Based Refreshers', name: 'Strawberry Blueberry', desc: 'Tea-based refreshment', price: '180' },
      { group: 'Tea-Based Refreshers', name: 'Blueberry Kiwi', desc: 'Tea-based refreshment', price: '180' },
      { group: 'Sparkling Drinks', name: 'Lychee', desc: 'Lychee sparkling drink', price: '180' },
      { group: 'Sparkling Drinks', name: 'Grapefruit Lychee', desc: 'Grapefruit, lychee sparkling drink', price: '180' },
      { group: 'Iced Tea', name: 'Cucumber / Red Tea House Blend', desc: '', price: '100' },
    ],
  },
  {
    id: 'food',
    name: 'Food',
    blurb: 'Snacks and hearty meals to pair with your cup.',
    images: [
      '/images/menu/food-1.png',
      '/images/menu/food-2.png',
      '/images/menu/food-3.png',
    ],
    items: [
      { group: 'Snacks', name: 'Muffin', desc: '', price: '90' },
      { group: 'Snacks', name: 'Walnut Chocolate Cookie', desc: '', price: '120' },
      { group: 'Snacks', name: 'French Fries', desc: '', price: '180' },
      { group: 'Snacks', name: 'Nacho Cheese', desc: '', price: '180' },
      { group: 'Sandwiches', name: 'Ham and Egg', desc: '', price: '220' },
      { group: 'Sandwiches', name: 'Tuna Sandwich', desc: '', price: '220' },
      { group: 'Sandwiches', name: 'Clubhouse', desc: '', price: '220' },
      { group: 'Pasta & Salad', name: 'Lasagna', desc: '', price: '200' },
      { group: 'Pasta & Salad', name: 'Pesto', desc: '', price: '220' },
      { group: 'Pasta & Salad', name: 'Kani Salad', desc: '', price: '240' },
      { group: 'Rice Meals', name: 'Tonkatsu', desc: '', price: '220' },
      { group: 'Rice Meals', name: 'Tapa', desc: '', price: '220' },
      { group: 'Rice Meals', name: 'Smoked Sausage', desc: '', price: '240' },
      { group: 'Rice Meals', name: 'Smoked Ribs', desc: 'Half slab · good for 2', price: '1,200' },
    ],
  },
];

// Limited-time offers shown as promo cards under the menu.
export const menuPromos = [
  {
    title: 'Buy One, Take One',
    desc: 'Exclusive for SM employees only. Available at North Mezzanine, SMX Convention Center. For advance orders & reservations, call 0911-0956-975.',
    image: '/images/menu/promo-buy1take1.png',
  },
  {
    title: 'Frappy Hour',
    desc: '18% discount on all frappé drinks, 12nn–3pm daily.',
    image: '/images/menu/promo-frappy-hour.png',
  },
];
