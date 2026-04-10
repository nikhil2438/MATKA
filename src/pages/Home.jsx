import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import TripsSection from "../components/TripsSection";
import CTA from "../components/CTA";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import BannerSlider from "../components/BannerSlider";
const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <TripsSection title="International Trips" />
      <TripsSection title="Best of India" />
      <BannerSlider/>
      <CTA />
      <Features />
      <Testimonials />
      <ContactForm />
      <Footer />
    </>
  );
};

export default Home;