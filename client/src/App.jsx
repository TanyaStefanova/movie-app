import Topbar from "./components/topBar/Topbar"
import './assets/css/style.css'
import Navigation from "./components/navigation/Navigation";
import HeroBanner from "./components/hero-banner/HeroBanner";
import Footer from "./components/footer/Footer";

function App() {

  return (
    <>
     <Topbar />
     <Navigation />
     <HeroBanner />

     <Footer />
    </>
  )
}

export default App;
