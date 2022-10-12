import React, {useState, useEffect } from 'react'

export default function ChildUseEffect() {
    let [number, setNumber] = useState(1);
    console.log('render ChildUseEffect')

    useEffect(()=>{
        //Viết cho didupdate
        console.log('didupdate')
        return ()=>{
            console.log('willunmount')
        }
    },[number])

  return (
    <div>
        <textarea></textarea> <br/>
        <button className='btn btn-success'>Gửi</button>
    </div>
  )
}
