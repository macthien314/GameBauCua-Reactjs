import React,{useState, useMemo} from 'react'
import ChildUseMemo from './ChildUseMemo';

export default function DemoHookUseMemo(props) {
    let [like, setLike] = useState(1);
    let cart = [
        {id:1, name:'iphone', price:1000},
        {id:2, name:'htc iphone', price:2000},
        {id:3, name:'lg iphone', price:3000}
    ];
    const cartMemo = useMemo(()=>cart, []);
  return (
    <div className='m-5'>
        Like:{like}
        <br/>
        <span style={{cursor:'pointer', color:'red', fontSize:'15px'}} onClick={()=>{setLike(like+1)}}>Like</span>
        <br/>
        <br/>
        <ChildUseMemo cart={cartMemo} />
    </div>
  )
}
