import { SubHeading } from '../../components'
import { images } from '../../constants'

const Contact = () => (
  <div className='bg wrapper section__padding' id='contact'>
    <div className='wrapper__img wrapper__img--reverse'>
      <img src={images.findus} alt='contact' />
    </div>

    <div className='wrapper__info'>
      <SubHeading title='Contact' />

      <h1 className='heading'>Find Us</h1>

      <div className='app__wrapper-content' style={{ margin: '2rem 0' }}>
        <p className='opensans'>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G</p>

        <p className='heading__sub' style={{ color: '#DCCA87', margin: '1rem 0' }}>
          Opening Hours
        </p>

        <p className='opensans'>Mon - Fri: 10:00 am - 02:00 am</p>

        <p className='opensans'>Sat - Sun: 10:00 am - 03:00 am</p>
      </div>

      <button type='button' className='btn'>
        <a href='#footer'>Visit Us</a>
      </button>
    </div>
  </div>
)

export default Contact
