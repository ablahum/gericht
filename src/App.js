import { About, Chef, Contact, Footer, Gallery, Header, Video, Laurels, Menu } from './containers'
import { Navbar } from './components'
import './app.scss'

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
    <Contact />
    <Footer />
  </div>
)

export default App
