import React from 'react'
import { useSpring, animated } from 'react-spring'


export default function DemoUseSpring(props) {
  //   const propsAnimination = useSpring({ to: { opacity: 1 }, from: { opacity: 0 }, config:{duration:1000} })
  // return <animated.div style={propsAnimination}>I will fade in</animated.div>

  const propsAnimination = useSpring({ to: { color_text:'red' }, from: { color_text:'green' }, config:{duration:1000} });
  const propsAnimNumber = useSpring({to: {num:200, color:'red'}, from:{num:10, color:'black'}});

  const propsAnimScroll = useSpring({to: {scroll:200}, from:{scroll:10}, config:{duration:10000}});
  return <div>
    <h1>Change color text</h1>
  <animated.div style={{color: propsAnimination.color_text}}>I will fade in</animated.div>
  <hr/>

  <h1>Change number</h1>
  <animated.h1 style={{color:propsAnimNumber.color}}>
    {propsAnimNumber.num}
  </animated.h1>

  <animated.p style={{fontSize:propsAnimNumber.num}}>1

  </animated.p>
  <hr/>
  <h1>Scroll</h1>
  <animated.div scrollTop={propsAnimScroll.scroll}>
<p>Hello</p>
<p>Hello</p>
<p>Hello</p>
<p>Hello</p>
<p>Hello</p>
<p>Hello</p>
<p>Hello</p>
<p>Hello</p>
<p>Hello</p>
<p>Hello</p>
<p>Hello</p>
<p>Hello</p>
<p>Hello</p>
<p>Hello</p>
<p>Hello</p>
<p>Hello</p>
<p>Hello</p>
<p>Hello</p>
<p>Hello</p>
<p>Hello</p>
<p>Hello</p>
<p>Hello</p>
<p>Hello</p>
<p>Hello</p>
<p>Hello</p>
<p>Hello</p>
<p>Hello</p>
<p>Hello</p>
<p>Hello</p>
<p>Hello</p>
<p>Hello</p>
<p>Hello</p>
<p>Hello</p>
<p>Hello</p>
<p>Hello</p>
<p>Hello</p>
  </animated.div>
  </div>
  

}
