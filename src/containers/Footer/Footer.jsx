import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi'

import { Newsletter } from '../../components'
import { images } from '../../constants'
import './footer.scss'

const FooterContact = () => (
  <div className='footer__links__contact'>
    <h1 className='footer__headtext'>Contact Us</h1>

    <p className='opensans'>9 W 53rd St, New York, NY 10019, USA</p>

    <p className='opensans'>+1 212-344-1230</p>

    <p className='opensans'>+1 212-555-1230</p>
  </div>
)

const FooterLogo = () => (
  <div className='footer__links__logo' id=''>
    <img src={images.gericht} alt='footer logo' />

    <p className='opensans'>"The best way to find yourself is to lose yourself in the service of others."</p>

    <img src={images.spoon} className='spoon' style={{ marginTop: '.5rem' }} alt='spoon' />

    <div className='footer__links__logo__icons'>
      <FiFacebook />

      <FiTwitter />

      <FiInstagram />
    </div>
  </div>
)

const FooterWork = () => (
  <div className='footer__links__work'>
    <h1 className='footer__headtext'>Working Hours</h1>

    <p className='opensans'>Monday-Friday:</p>

    <p className='opensans'>08:00 am - 12:00 am</p>

    <p className='opensans'>Saturday-Sunday:</p>

    <p className='opensans'>07:00 am - 11:00 pm</p>
  </div>
)

const Footer = () => {
  return (
    <>
      <div className='bg'>
        <Newsletter />
      </div>

      <div className='footer section__padding' id='login'>
        <div className='footer__links'>
          <FooterContact />

          <FooterLogo />

          <FooterWork />
        </div>

        <div className='footer__copyright'>
          <p className='opensans'>2021 Gericht. All Rights reserved.</p>
        </div>
      </div>
    </>
  )
}

export default Footer
