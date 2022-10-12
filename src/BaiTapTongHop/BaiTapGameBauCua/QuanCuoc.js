import React from 'react'
import { useDispatch } from 'react-redux';
import { useSpring, animated } from 'react-spring'
export default function QuanCuoc(props) {

  const dispatch = useDispatch();

  const { quanCuoc } = props;

  const [propsUseSpringInCrease, setInCrease] = useSpring(() => { return { to: { scale: 1 }, from: { scale: 0 }, reset: true } });

  const [propsUseSpringDeCrease, setDeCrease] = useSpring(() => { return { to: { scale: 1 }, from: { scale: 0 }, reset: true } });

  return (
    <div className='mt-2'>
      <img src={quanCuoc.hinhAnh} alt='123' style={{ width: '180px' }} />

      <div className='bg-success mt-2 pb-2 text-center' style={{ borderRadius: '10px', width: '180px' }}>

        <animated.button style={{ transform: propsUseSpringInCrease.scale.interpolate(scale => `scale(${scale})`) }} onClick={() => {

          setInCrease({ scale: 0 })
          setInCrease({ scale: 1 })
          dispatch({
            type: 'DAT_CUOC_BAU_CUA',
            quanCuoc,
            tangGiam: true
          })
        }} className='btn btn-danger mr-3'><i className='fa fa-plus'></i></animated.button>

        <span className='mt-5' style={{ color: 'yellow', fontSize: '25px' }}>{quanCuoc.diemCuoc}</span>

        <animated.button style={{ transform: propsUseSpringDeCrease.scale.interpolate(scale => `scale(${scale})`) }} onClick={() => {

          setDeCrease({ scale: 0 })
          setDeCrease({ scale: 1 })
          dispatch({
            type: 'DAT_CUOC_BAU_CUA',
            quanCuoc,
            tangGiam: false
          })
        }} className='btn btn-danger ml-3'><i className="fa fa-minus"></i></animated.button>

      </div>
    </div>
  )
}
