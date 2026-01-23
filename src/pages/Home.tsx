import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import ServiceSection from '../components/home/ServiceSection';
import ArtworkSection from '../components/home/ArtworkSection';
import ContactSection from '../components/home/ContactSection';
const Home = () => {
    return (
        <>
            <Header />
            <HeroSection />
            <AboutSection />
            <ServiceSection />
            <ArtworkSection />
            <ContactSection />
            <Footer />
        </>
    );
};
export default Home;