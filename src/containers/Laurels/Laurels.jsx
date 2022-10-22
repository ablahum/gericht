import { SubHeading } from '../../components'
import { images, data } from '../../constants'
import './laurel.scss'

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div className='awards__card'>
    <img src={imgUrl} alt='awards' />

    <div className='awards__card__content'>
      <p className='heading__sub' style={{ color: '#DCCA87' }}>
        {title}
      </p>

      <p className='opensans'>{subtitle}</p>
    </div>
  </div>
)

const Laurels = () => (
  <div className='bg wrapper section__padding' id='awards'>
    <div className='wrapper__info'>
      <SubHeading title='Awards & recognition' />

      <h1 className='heading'>Our Laurels</h1>

      <div className='awards'>
        {data.awards.map((award) => (
          <AwardCard award={award} key={award.title} />
        ))}
      </div>
    </div>

    <div className='wrapper__img'>
      <img src={images.laurels} alt='laurels' />
    </div>
  </div>
)

export default Laurels
