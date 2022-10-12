import React from 'react'
import { useSprings, animated } from 'react-spring'
export default function Ex3UseSpring() {

    let arrOpacity = [
        { opacity: 0.1, color: 'red', content: 'Javascript', num:100 },
        { opacity: 0.3, color: 'green', content: 'Reactjs', num:200 },
        { opacity: 0.5, color: 'blue', content: 'Nodejs',num:300 },
        { opacity: 0.7, color: 'orange', content: 'Java', num:400 },
        { opacity: 1, color: 'purple', content: 'Css', num:500 },
    ];

    let propsAnimationUseSprings = useSprings(arrOpacity.length, arrOpacity.map(item => {
        return {
            opacity: item.opacity,
            color: item.color,
            content:item.content,
            num:item.num,
            from: {
                opacity: 0,
                color: 'black',
                content:item.content,
                num:0
            },
            config: {
                duration: 3000
            }
        }
    }))

    return (
        <div>
            {propsAnimationUseSprings.map((propsAnim, index) => {
                return <div>
                    <animated.span key={index} style={propsAnim}>
                    {propsAnim.num}
                </animated.span>
                <animated.span key={index} style={propsAnim}>
                    {propsAnim.content}
                </animated.span>
                </div>
            })}
        </div>
    )
}
