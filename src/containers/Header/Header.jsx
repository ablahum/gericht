import { SubHeading } from '../../components'
import { images } from '../../constants'
import './header.scss'

const Header = () => (
  <div className='header wrapper section__padding' id='home'>
    <div className='wrapper__info'>
      <SubHeading title='Chase the new flavour' />

      <h1>The Key To Fine Dining</h1>

      <p className='opensans' style={{ margin: '2rem 0' }}>
        Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus
      </p>

      <button type='button' className='btn'>
        <a href='#menu'>Explore Menu</a>
      </button>
    </div>

    <div className='wrapper__img'>
      <img src={images.welcome} alt='header' />
    </div>
  </div>
)

export default Header
