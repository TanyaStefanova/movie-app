import { Routes, Route } from 'react-router-dom'
import Topbar from "./components/topBar/Topbar"
import './assets/css/style.css'
import Navigation from "./components/navigation/Navigation";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import BackToTopButton from "./components/back-to-top-button/BackToTopButton";
import AboutUs from "./components/about-us/AboutUs";
import Services from "./components/services/Services";
import Destinations from "./components/destinations/Destinations";
import Packages from "./components/packages/Packages";
import OnlineBooking from "./components/online-booking/OnlineBooking";
import Process from "./components/process/Process";
import Team from "./components/team/Team";
import Testimonial from "./components/testimonial/Testimonial";

function App() {

  return (
    <>
      <Topbar />
      <Navigation />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/services' element={<Services />} />
        <Route path='/destinations' element={<Destinations />} />
        <Route path='/packages' element={<Packages />} />
        <Route path='/booking' element={<OnlineBooking />} />
        <Route path='/process' element={<Process />} />
        <Route path='/team' element={<Team />} />
      </Routes>

      {/* <Testimonial /> */}
      <Footer />
      <BackToTopButton />
    </>
  )
}

export default App;
