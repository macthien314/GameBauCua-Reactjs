import React, { useState } from 'react'

export default function DemoHookUseState(props) {
    //(1) this.state ={like:0}
    //(2) this.setState(newState)

    //tuple
    let [state, setState] = useState({ like: 0 });

    const handleLike = ()=>{
        //Lấy like tăng lên 1 và setState
        setState({
            like: state.like+1
        })
    }

    return (
        <div>
            <div className=" text-left m-5">
                <img style={{height:250, width:250}} className="card-img-top" src="https://hoso.wiki/wp-content/uploads/2020/08/one-piece-roronoa-zoro.jpg.webp" alt='123' />
                <div className="card-body">
                    <h4 className="card-title">Picture</h4>
                    <p style={{color:'red'}} className="">{state.like}</p>
                </div>
            </div>
        <button onClick={handleLike} className='btn btn-danger'>Like</button>
        </div>
    )
}
