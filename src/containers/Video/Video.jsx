import { useRef, useState } from 'react'
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs'

import { meal } from '../../constants'
import './video.scss'

const Video = () => {
  const [play, setPlay] = useState(true)
  const vidRef = useRef()

  return (
    <div className='video'>
      <video ref={vidRef} src={meal} type='video/mp4' loop controls={false} muted autoPlay />

      <div className='video__overlay flex__center'>
        <div
          className='video__overlay__circle flex__center'
          onClick={() => {
            setPlay(!play)
            if (play) {
              vidRef.current.pause()
            } else {
              vidRef.current.play()
            }
          }}
        >
          {play ? <BsPauseFill color='#fff' fontSize={30} /> : <BsFillPlayFill color='#fff' fontSize={30} />}
        </div>
      </div>
    </div>
  )
}

export default Video
