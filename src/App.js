import { About, Chef, FindUs, Footer, Gallery, Header, Video, Laurels, Menu } from './container'
import { Navbar } from './components'
import './App.css'

const App = () => (
  <div>
    <Navbar />
    <Header />
    <About />
    <Menu />
    <Chef />
    <Video />
    <Laurels />
    <Gallery />
    <FindUs />
    <Footer />
  </div>
)

export default App
