import React, { useState } from 'react'
import { useTrail, animated } from 'react-spring'

const items = [
  { title: 'HMTL', content: 'Evondev' },
  { title: 'CSS', content: 'F8' },
  { title: 'Javascript', content: 'CycberSoft' }
]
export default function Ex4UseTrail(props) {
  let [status, setStatus] = useState(true);
  const [propsUseTrail, set, stop] = useTrail(items.length, () => {
    return {
      opacity: status ? 1 : 0,
      x: status ? 0 : 20,
      height: status ? 80 : 0,
      color: 'red',
      from: { opacity: 0, x: 20, height: 0, color: 'green' },
      config: { duration: 1000 },

    }

  })


  set({
    opacity: status ? 1 : 0,
    x: status ? 0 : 20,
    height: status ? 80 : 0,
    color: 'red',
    from: { opacity: 0, x: 20, height: 0, color: 'green' },
    config: { duration: 1000 },
  });



  return (
    <div> <button onClick={() => {
      setStatus(!status)
    }}> Click </button >

      <button onClick={() => { set({ color: 'yellow' }) }}>Change color</button>
      {propsUseTrail.map((propsUseSprings, index) => {

        return <animated.h1 key={index} style={propsUseSprings}>
          {items[index].title}
        </animated.h1>
      })}
    </div>
  )
}
