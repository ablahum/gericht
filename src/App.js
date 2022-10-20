import { About, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, Menu } from './container'
import { Navbar } from './components'
import './App.css'

const App = () => (
  <div>
    <Navbar />
    <Header />
    <About />
    <Menu />
    <Chef />
    <Intro />
    <Laurels />
    <Gallery />
    <FindUs />
    <Footer />
  </div>
)

export default App
