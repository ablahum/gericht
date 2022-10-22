import images from '../../constants/images'
import './navbar.scss'
import NavbarSmall from './NavbarSmall'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar__logo'>
        <img src={images.gericht} alt='logo' />
      </div>

      <ul className='navbar__links'>
        <li className='opensans'>
          <a href='#home'>Home</a>
        </li>
        <li className='opensans'>
          <a href='#about'>About</a>
        </li>
        <li className='opensans'>
          <a href='#menu'>Menu</a>
        </li>
        <li className='opensans'>
          <a href='#awards'>Awards</a>
        </li>
        <li className='opensans'>
          <a href='#contact'>Contact</a>
        </li>
      </ul>

      <div className='navbar__login'>
        <a href='#login' className='opensans'>
          Log In / Registration
        </a>

        <div />

        <a href='/' className='opensans'>
          Book Table
        </a>
      </div>

      <NavbarSmall />
    </nav>
  )
}

export default Navbar
