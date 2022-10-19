import { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineRestaurantMenu } from 'react-icons/md'

import './navbar-small.scss'

const NavbarSmall = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <div className='navbar__small'>
      <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => setToggleMenu(true)} style={{ cursor: 'pointer' }} />
      {toggleMenu && (
        <div className='navbar__small__overlay flex__center slide-bottom'>
          <MdOutlineRestaurantMenu fontSize={27} className='navbar__small__close' onClick={() => setToggleMenu(false)} />

          <ul className='navbar__small__links'>
            <li>
              <a href='#home' onClick={() => setToggleMenu(false)}>
                Home
              </a>
            </li>

            <li>
              <a href='#about' onClick={() => setToggleMenu(false)}>
                About
              </a>
            </li>

            <li>
              <a href='#menu' onClick={() => setToggleMenu(false)}>
                Menu
              </a>
            </li>

            <li>
              <a href='#awards' onClick={() => setToggleMenu(false)}>
                Awards
              </a>
            </li>

            <li>
              <a href='#contact' onClick={() => setToggleMenu(false)}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default NavbarSmall
