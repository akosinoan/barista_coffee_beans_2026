import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';
import { galleryImages } from '../../data/images';

/**
 * Masonry-style gallery (CSS columns) of cinematic coffee imagery
 * with hover-zoom and lazy loading.
 */
const Gallery = () => {
  return (
    <Section id="gallery" bg="light">
      <SectionHeading
        eyebrow="The Gallery"
        title="Moments Worth Brewing"
        subtitle="A glimpse into the warmth, craft, and atmosphere behind every cup."
      />

      <Reveal className="mt-14">
        <div className="columns-2 gap-4 sm:gap-5 lg:columns-4">
          {galleryImages.map((img, i) => (
            <figure
              key={img.src}
              className="group mb-4 overflow-hidden rounded-2xl sm:mb-5"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                  i % 3 === 0 ? 'aspect-[3/4]' : 'aspect-square'
                }`}
              />
            </figure>
          ))}
        </div>
      </Reveal>
    </Section>
  );
};

export default Gallery;
