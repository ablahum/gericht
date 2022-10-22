import './menu-item.scss'

const MenuItem = ({ title, price, tags }) => (
  <div className='menu-item'>
    <div className='menu-item__head'>
      <div className='menu-item__name'>
        <p className='heading__sub' style={{ color: '#DCCA87' }}>
          {title}
        </p>
      </div>

      <div className='dash' />

      <div className='menu-item__price'>
        <p className='heading__sub'>{price}</p>
      </div>
    </div>

    <div className='menu-item__sub'>
      <p className='opensans' style={{ color: '#AAAAAA' }}>
        {tags}
      </p>
    </div>
  </div>
)

export default MenuItem
