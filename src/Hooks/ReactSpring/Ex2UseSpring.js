import React from 'react'
import { useSpring, animated } from 'react-spring'

export default function Ex2UseSpring() {

    let propsUseSpring = useSpring({
        color: [131,111,255], //mau sắc sau animation
        from:{
            color:[238, 99, 99] //Màu sắc bắt đầu
        },
        config:{duration:2000, delay:0}
    })

    let propAnimination = useSpring({
        from:{
            width:'0%',
            height:'0%',
            fontSize:'10px'
        },
        to:
            async (next,cancel) =>{
                await next({width:'100%', height:'100%', fontSize:'50px'});
                await next({width:'50%', height:'50%', fontSize:'10px'});
                await next({width:'100%', height:'100%', fontSize:'50px'});
            },
        config:{duration:5000}
    })

  return (
    <div>
   <animated.div style={{
    color:propsUseSpring.color.interpolate((r,g,b)=>{return `rgb(${r}, ${g}, ${b})`})
   }}>
    Vua hải tặc
   </animated.div>

   <animated.span style={propAnimination} className='bg-dark text-white'>
            <span>Hello Vua hải tặc</span>
            <p>Lương 10 triệu một tháng</p>
   </animated.span>
   </div>
  )
}

