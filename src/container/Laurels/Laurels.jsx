import { SubHeading } from '../../components'
import { images, data } from '../../constants'
import './laurel.scss'

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div className='awards__card'>
    <img src={imgUrl} alt='awards' />

    <div className='awards__card__content'>
      <p className='p__cormorant' style={{ color: '#DCCA87' }}>
        {title}
      </p>

      <p className='p__opensans'>{subtitle}</p>
    </div>
  </div>
)

const Laurels = () => (
  <div className='app__bg app__wrapper section__padding' id='awards'>
    <div className='app__wrapper_info'>
      <SubHeading title='Awards & recognition' />

      <h1 className='headtext__cormorant'>Our Laurels</h1>

      <div className='awards'>
        {data.awards.map((award) => (
          <AwardCard award={award} key={award.title} />
        ))}
      </div>
    </div>

    <div className='app__wrapper_img'>
      <img src={images.laurels} alt='laurels' />
    </div>
  </div>
)

export default Laurels
