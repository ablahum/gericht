import { useRef } from 'react'
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'

import { SubHeading } from '../../components'
import { images } from '../../constants'
import './gallery.scss'

const Gallery = () => {
  const scrollRef = useRef(null)

  const scroll = (direction) => {
    const { current } = scrollRef

    if (direction === 'left') {
      current.scrollLeft -= 300
    } else {
      current.scrollLeft += 300
    }
  }

  return (
    <div className='gallery flex__center'>
      <div className='gallery__content'>
        <SubHeading title='Photo Gallery' />

        <h1 className='heading'>Our Magnificent Work</h1>

        <p className='opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>

        <button type='button' className='btn'>
          View More
        </button>
      </div>

      <div className='gallery__images'>
        <div className='gallery__images__container' ref={scrollRef}>
          {[images.gallery01, images.gallery02, images.gallery03, images.gallery04].map((image, index) => (
            <div className='gallery__images__card flex__center' key={`gallery_image-${index + 1}`}>
              <img src={image} alt='gallery' />

              <BsInstagram className='gallery__images__card__icon' />
            </div>
          ))}
        </div>

        <div className='gallery__images__arrows'>
          <BsArrowLeftShort className='gallery__images__arrows__icon' onClick={() => scroll('left')} />

          <BsArrowRightShort className='gallery__images__arrows__icon' onClick={() => scroll('right')} />
        </div>
      </div>
    </div>
  )
}

export default Gallery
