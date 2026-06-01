import Navbar from './components/sections/Navbar';
import Hero from './components/sections/Hero';
import Menu from './components/sections/Menu';
import Story from './components/sections/Story';
import WhyChooseUs from './components/sections/WhyChooseUs';
import Branches from './components/sections/Branches';
import Gallery from './components/sections/Gallery';
import Testimonials from './components/sections/Testimonials';
import CTABanner from './components/sections/CTABanner';
import Footer from './components/sections/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Menu />
        <Story />
        <WhyChooseUs />
        <Branches />
        <Gallery />
        <Testimonials />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
};

export default App;
