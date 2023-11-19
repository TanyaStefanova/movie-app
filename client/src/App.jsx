import Topbar from "./components/topBar/Topbar"
import './assets/css/style.css'
import Navigation from "./components/navigation/Navigation";
import HeroBanner from "./components/hero-banner/HeroBanner";
import Footer from "./components/footer/Footer";
import BackToTopButton from "./components/back-to-top-button/BackToTopButton";
import AboutUs from "./components/about-us/AboutUs";
import Services from "./components/services/Services";
import Destinations from "./components/destinations/Destinations";
import Packages from "./components/packages/Packages";
import OnlineBooking from "./components/online-booking/OnlineBooking";
import Process from "./components/process/Process";
import Team from "./components/team/Team";

function App() {

  return (
    <>
     <Topbar />
     <Navigation />
     <HeroBanner />
     <AboutUs />
     <Services />
     <Destinations />
     <Packages />
     <OnlineBooking />
     <Process />
     <Team />
     <Footer />
     <BackToTopButton />
    </>
  )
}

export default App;
