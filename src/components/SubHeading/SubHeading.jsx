import { images } from '../../constants'

const SubHeading = ({ title }) => (
  <div style={{ marginBottom: '1rem' }}>
    <p className='heading__sub'>{title}</p>

    <img src={images.spoon} alt='spoon' className='spoon' />
  </div>
)

export default SubHeading
