import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import StatsCard from "./components/stats/StatsCard"
import Features from "./components/Features/Features"

function App() {

  return (
    <div className='max-w-6xl mx-auto'>
      <Navbar />
      <Hero />
      <StatsCard />
      <Features />
    </div>
  )
}

export default App
