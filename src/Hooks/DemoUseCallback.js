import React,{useState} from 'react'
import ChildUseCallback from './ChildUseCallback';

export default function DemoUseCallback(props) {
    let [like,setLike] = useState(1);
  return (
    <div className='m-5'>
        Like: {like}
        <br/>
        <button style={{cursor:'pointer', color:'red', fontSize:'35px'}} onClick={()=>{setLike(like+1)}}>Like</button>
        <br/>
        <br/>
        <ChildUseCallback />
    </div>
  )
}
