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
        <li className='p__opensans'>
          <a href='#home'>Home</a>
        </li>
        <li className='p__opensans'>
          <a href='#about'>About</a>
        </li>
        <li className='p__opensans'>
          <a href='#menu'>Menu</a>
        </li>
        <li className='p__opensans'>
          <a href='#awards'>Awards</a>
        </li>
        <li className='p__opensans'>
          <a href='#contact'>Contact</a>
        </li>
      </ul>

      <div className='navbar__login'>
        <a href='#login' className='p__opensans'>
          Log In / Registration
        </a>

        <div />

        <a href='/' className='p__opensans'>
          Book Table
        </a>
      </div>

      <NavbarSmall />
    </nav>
  )
}

export default Navbar
