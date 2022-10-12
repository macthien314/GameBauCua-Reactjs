import React,{useState, useRef} from 'react'

export default function DemoUseRef() {

    let inputUserName = useRef(null);
    let inputPassword = useRef(null);

    let userName= useRef('');

    let[userLogin, setUserLogin] = useState({useName:''});

    const handleLogin = ()=>{
        console.log('userName', userName);
        console.log('userLogin', userLogin.userName);
        userName ='abc';
        setUserLogin({
            userName: userName.current
        })
    }

  return (
    <div className='container'>
        <h3>Login</h3>
        <div className='form-group'>
            <h3>User Name</h3>
            <input ref={inputUserName} name='userName' className='form-control'></input>
        </div>
        <div className='form-group'>
            <h3>Password</h3>
            <input  ref={inputPassword} name='passWork' className='form-control'></input>
        </div>

        <div className='form-group'>
        
            <button className='btn btn-success' onClick={()=>{handleLogin()}}>Login</button>
        </div>

    </div>
  )
}
