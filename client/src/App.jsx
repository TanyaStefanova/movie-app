import Topbar from "./components/topBar/Topbar"
import './assets/css/style.css'
import Navigation from "./components/navigation/Navigation";
import HeroBanner from "./components/hero-banner/HeroBanner";
import Footer from "./components/footer/Footer";
import BackToTopButton from "./components/back-to-top-button/BackToTopButton";
import AboutUs from "./components/about-us/AboutUs";
import Services from "./components/services/Services";
import Destinations from "./components/destinations/Destinations";

function App() {

  return (
    <>
     <Topbar />
     <Navigation />
     <HeroBanner />
     <AboutUs />
     <Services />
     <Destinations />
     <Footer />
     <BackToTopButton />
    </>
  )
}

export default App;
