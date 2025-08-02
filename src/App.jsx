import IconBackground from './component/IconBackground'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import './App.css'
import './index.css'
import Footer from './component/Footer'

function App() {

  return (
    <>
      <div className="max-w-7xl mx-auto px-4">
        <IconBackground/>
        <Navbar />
        <Hero />
        <Footer/>
      </div>
    </>
  )
}

export default App
