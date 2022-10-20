import { SubHeading } from '../../components'
import { images } from '../../constants'
import './header.scss'

const Header = () => (
  <div className='header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title='Chase the new flavour' />

      <h1>The Key To Fine Dining</h1>

      <p className='p__opensans' style={{ margin: '1rem 0 1.5rem 0' }}>
        Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus
      </p>

      <button type='button' className='custom__button'>
        Explore Menu
      </button>
    </div>

    <div className='app__wrapper_img'>
      <img src={images.welcome} alt='header image' />
    </div>
  </div>
)

export default Header
