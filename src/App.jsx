import { Navbar } from "./components/Navbar"
import { Offers } from "./components/Offers"
import { VisaSupport } from "./components/VisaSupport"
import Slides from "./components/Slider/Slides"
import { Explore } from './components/Explore'
import { Visit } from './components/Visit'
import { Locations } from './components/Locations'
import { Reservation } from './components/Reservation'
import { Map } from './components/Map'
import { Contact } from './components/Contact'
import { Booking } from "./components/Booking"
import { Footer } from "./components/Footer"

function App() {
  return (
    <>
      <Navbar />
      <Slides />
      <Offers />
      <VisaSupport />
      <Explore />
      <Visit />
      {/* <Locations /> */}
      {/* <Reservation /> */}
      {/* <Map /> */}
      {/* <Contact /> */}
      {/* <Booking /> */}
      {/* <Footer /> */}
    </>
  )
}

export default App
