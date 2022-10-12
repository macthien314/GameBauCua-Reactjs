import React, { Fragment } from 'react'
import { useSpring,animated } from 'react-spring'
export default function XucXac(props) {

  const { xucXacItem } = props;

  const [prosDice, set] = useSpring(() => {
    return {
      to: { xyz: [360, 360, 360] },

      from: { xyz: [0, 0, 0] },
      config: {
        duration: 500
      },
      reset:true
    }
  })
  set({xyz:[360,360,360]})

  return (

    <Fragment >
      <div className='scene ml-5'>
        <animated.div className='cube' style={{transform: prosDice.xyz.interpolate((x,y,z)=> ` translateZ(-25px) rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`
        )}}>
          <div  className='cube__face front'><img style={{ width: '100%' }} alt='12' src={xucXacItem.hinhAnh} /></div>
          <div className='cube__face back'> <img  style={{ width: '100%' }} alt='12' src='./img/BaiTapGameBauCua/bau.png' /></div>
         <div className='cube__face left'> <img  style={{ width: '100%' }} alt='12' src='./img/BaiTapGameBauCua/ga.png' /></div>
         <div className='cube__face right'><img  style={{ width: '100%' }} alt='12' src='./img/BaiTapGameBauCua/ca.png' /></div>
        <div className='cube__face top'>  <img  style={{ width: '100%' }} alt='12' src='./img/BaiTapGameBauCua/tom.png' /></div>
        <div className='cube__face bottom'> <img  style={{ width: '100%' }} alt='12' src='./img/BaiTapGameBauCua/nai.png' /></div>
         

        </animated.div>
      </div>
    </Fragment>


  )
}
