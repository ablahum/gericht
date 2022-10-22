import { SubHeading, MenuItem } from '../../components'
import { data, images } from '../../constants'
import './menu.scss'

const Menu = () => (
  <div className='menu flex__center section__padding' id='menu'>
    <div className='menu__title'>
      <SubHeading title='Menu that fits your palatte' />

      <h1 className='heading'>Today's Special</h1>
    </div>

    <div className='menu__content'>
      <div className='menu__content__wine  flex__center'>
        <p className='menu__content__heading'>Wine & Beer</p>

        <div className='menu__content__items'>
          {data.wines.map((wine, i) => (
            <MenuItem key={i} title={wine.title} price={wine.price} tags={wine.tags} />
          ))}
        </div>
      </div>

      <div className='menu__content__img'>
        <img src={images.menu} alt='menu' />
      </div>

      <div className='menu__content__cocktails  flex__center'>
        <p className='menu__content__heading'>Cocktails</p>

        <div className='menu__content__items'>
          {data.cocktails.map((cocktail, i) => (
            <MenuItem key={i} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
          ))}
        </div>
      </div>
    </div>

    <div>
      <button type='button' className='btn'>
        View More
      </button>
    </div>
  </div>
)

export default Menu
