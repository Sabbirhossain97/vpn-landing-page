import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import StatsCard from "./components/stats/StatsCard"
import Features from "./components/Features/Features"
import Subscriptions from "./components/Subscriptions/Subscriptions"
import Locations from "./components/Locations/Locations"
import Feedback from "./components/Feedback/Feedback"
import Footer from "./components/Footer/Footer"

function App() {

  return (
    <div>
      <div className='max-w-6xl mx-auto relative'>
        <Navbar />
        <Hero />
        <StatsCard />
        <Features />
      </div>
      <Subscriptions />
      <Locations />
      <Feedback />
      <Footer />
    </div>
  )
}

export default App
