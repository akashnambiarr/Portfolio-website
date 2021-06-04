import TopBar from "./Component/TopBar/TopBar"
import Intro from "./Component/Intro/Intro"
import Portfolio from "./Component/Portfolio/Portfolio"
import Works from "./Component/Works/Works"
import Testimonials from "./Component/Testimonials/Testimonials"
import Contact from "./Component/Contact/Contact"
import './app.scss'

const App = () => {
  return (
    <div className = "app">
      <TopBar/>
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <Works/>
        <Testimonials/>
        <Contact/>
      </div>
    </div>
  )
}

export default App
