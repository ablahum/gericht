import SubHeading from '../SubHeading/SubHeading'
import './newsletter.scss'

const Newsletter = () => (
  <div className='newsletter section__padding'>
    <div className='newsletter__heading'>
      <SubHeading title='Newsletter' />

      <h1 className='heading'>Subscribe To Our Newsletter</h1>

      <p className='opensans' style={{ margin: '1rem 0' }}>
        And never miss latest Updates!
      </p>
    </div>

    <div className='newsletter__input flex__center'>
      <input type='email' placeholder='Enter your email address' />

      <button type='button' className='btn'>
        Subscribe
      </button>
    </div>
  </div>
)

export default Newsletter
