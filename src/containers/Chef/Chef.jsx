import './chef.scss'
import { images } from '../../constants'
import { SubHeading } from '../../components'

const Chef = () => (
  <div className='bg wrapper section__padding'>
    <div className='wrapper__img wrapper__img--reverse'>
      <img src={images.chef} alt='chef' />
    </div>

    <div className='wrapper__info'>
      <SubHeading title="Chef's Word" />

      <h1 className='heading'>What We Believe In</h1>

      <div className='chef__content'>
        <div className='chef__content__quote'>
          <img src={images.quote} alt='quote' />

          <p className='opensans'>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit Auctor Sit .</p>
        </div>

        <p className='opensans'>Auctor Sit Iaculis In Arcu. Vulputate Nulla Lobortis Mauris Eget Sit. Nulla Scelerisque Scelerisque Congue Ac Consequat, Aliquam Molestie Lectus Eu. Congue Iaculis Integer Curabitur Semper Sit Nunc.</p>
      </div>

      <div className='chef__sign'>
        <p>Kevin Luo</p>

        <p className='opensans'>Chef & Founder</p>

        <img src={images.sign} alt='sign' />
      </div>
    </div>
  </div>
)

export default Chef
