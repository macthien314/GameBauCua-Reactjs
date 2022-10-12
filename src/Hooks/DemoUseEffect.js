import React, { useState, useEffect } from 'react'
import ChildUseEffect from './ChildUseEffect';

export default function DemoUseEffect(props) {


    let [number, setNumber] = useState(1);
    let [like, setLike] = useState(1);
    console.log(like);
    //Là hàm chạy sau khi giao diện render thay cho didupdate và didmount trong mọi trường hợp
    // useEffect(()=>{
    //     console.log('didmount');
    //     console.log('didupdate');
    // })

    console.log('render')

    //cách viết thay thế cho componentdidmount chỉ chạy 1 lần sau khi render
    useEffect(()=>{
        console.log('didmount')
    },[])

      //cách viết thay thế cho componentdidupdate
      useEffect(()=>{
        console.log('didupdate khi number thay đổi')
        return ()=>{
            console.log('willunmount')
        }
    },[number]) // number là giá trị nếu bị thay đổi sau render thì useEffect này sẽ chạy

    const handleIncrease = () => {
        let newNumber = number + 1;
        setNumber(newNumber);
    }



    return (
      
        <div className='m-5'>
              <button onClick={()=>{
                setLike(like+1);
        }}>Like</button>
            <div style={{width:200, height:300}} className="card text-left">
                <img style={{width:200, height:200}} className="card-img-top" src="https://i.ex-cdn.com/mgn.vn/files/content/2022/04/20/power-up-2-0924.jpg" alt="13" />
                <div className="card-body">
                    <h4 className="card-title text-danger">{number}</h4>
                    <p className="card-text"></p>
                </div>
            </div>


            <button onClick={handleIncrease} className='btn btn-danger'>+</button>
            {like === 1 ? <ChildUseEffect />: ''}
        </div>
    )
}
