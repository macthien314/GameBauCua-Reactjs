import React, { Component } from 'react'
import './UserProfile.css'
import Swal from 'sweetalert2'
export default class UserProfile extends Component {

  state = {
    values: {
      firstName: '',
      lastName: '',
      userName: '',
      email: '',
      passWord: '',
      passWordConfirm: ''
    },
    errors:{
      firstName: '',
      lastName: '',
      userName: '',
      email: '',
      passWord: '',
      passWordConfirm: ''
    }
  }

  // handleChangeValue = (name, value) =>{
  //   this.setState({
  //     [name]:value
  //   })
  // }

  handleChangeValue = (event) => {
    let { name, value, type } = event.target;
    let newValue = {...this.state.values, [name]:value};
    let newErrors = {...this.state.errors};
    if(value.trim() === ''){
      newErrors[name] = name + ' is required !'
    }else{
      newErrors[name]=''
    }

    if(type === 'email'){
      const regexEmail =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
      if(!regexEmail.test(value))
      { 
        newErrors[name] = name + 'is invalid';
      }else {
        newErrors[name] = '';
      }
    } 

    if(name === 'passWordConfirm'){
      if(value === newValue['passWord']){
        newErrors[name] ='';
      }else{
        newErrors[name] = name + 'invalid';
      }
    }

   
    this.setState({
      values: newValue,
      errors: newErrors
    })
    // this.setState({
    //   [name]: value
    // }, () => {
    //   console.log(this.state)
    // })
  }

  handleSubmit= (event)=>{
    //Cản trình duyệt submit reload lại trang
    event.preventDefault();
    //Xét điều kiện khi submit   
    let {values, errors} = this.state;
    //Biến xác định form hợp lệ
    let valid = true;

    let profileContent = '';
    
    let errorsContent = '';

    for(let key in values){
      if(values[key] === '')
      {
        profileContent += `<p class='text-left'><b>${key}</b>: ${values[key]}</p>`
        valid = false;
      }
      
    }

    for(let key in errors){
      if(errors[key] !== '')
      {
        errorsContent += `<p class='text-left'><b class='text-danger'>${key} is invalid!</b></p>`
        valid = false;
      }
     
    }

    if(!valid){
      // alert('Dữ liệu không hợp lệ !')
      Swal.fire({
        title: 'Your profile',
        html: errorsContent,
        icon: 'error', //success, error, warning, question
        confirmButtonText: 'Ok'
      })
      return;
    }
    // alert('Thành công')
    Swal.fire({
      title: 'Your profile',
      html: profileContent,
      icon: 'success', //success, error, warning, question
      confirmButtonText: 'Ok'
    })
  }
  render() {
    return (
      <div style={{ backgroundColor: '#EEEEEE', display: 'flex', justifyContent: 'center' }} className='container-fluid'>
        <form onSubmit={this.handleSubmit} style={{ fontSize: 'font-family:"Google Sans", "Noto Sans Myanmar UI", arial, sans-serif', width: '600px' }} className=' bg-white m-5 p-5'>
          <h1 className='mt-0 text-center'>User Profile</h1>

          <div className='row'>
            <div className='col-6'>
              <div className="group">
                <input value={this.state.values.firstName} type="text" name='firstName' required onChange={(this.handleChangeValue)} />
                {/* // let{name, value} = event.target;
                    // this.handleChangeValue(name, value)
                  // }}/> */}
                <span className="highlight" />
                <span className="bar" />
                <label>First Name</label>
                <span className='text text-danger'>{this.state.errors.firstName}</span>
              </div>

            </div>
            <div className='col-6'>
              <div className="group">
                <input value={this.state.values.lastName} type="text" name='lastName' required onChange={(this.handleChangeValue)} />
                <span className="highlight" />
                <span className="bar" />
                <label>Last Name</label>
                <span className='text text-danger'>{this.state.errors.lastName}</span>
              </div>


            </div>
          </div>

          <div className='row'>
            <div className='col-12'>
              <div className="group">
                <input  value={this.state.values.userName} type="text" required name='userName' onChange={(this.handleChangeValue)} />
                <span className="highlight" />
                <span className="bar" />
                <label>User Name</label>
                <span className='text text-danger'>{this.state.errors.userName}</span>
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col-12'>
              <div className="group">
                <input value={this.state.values.email} type="email" required name='email' onChange={(this.handleChangeValue)} />
                <span className="highlight" />
                <span className="bar" />
                <label>Email</label>
                <span className='text text-danger'>{this.state.errors.email}</span>
              </div>
            </div>
          </div>


          <div className='row'>
            <div className='col-6'>
              <div className="group">
                <input value={this.state.values.passWord} type="password" name='passWord' required onChange={(this.handleChangeValue)} />
                <span className="highlight" />
                <span className="bar" />
                <label>PassWord</label>
                <span className='text text-danger'>{this.state.errors.passWord}</span>
              </div>

            </div>
            <div className='col-6'>
              <div className="group">
                <input  value={this.state.values.passWordConfirm} type="password" name='passWordConfirm' required onChange={(this.handleChangeValue)} />
                <span className="highlight" />
                <span className="bar" />
                <label>Password Confirm</label>
                <span className='text text-danger'>{this.state.errors.passWordConfirm}</span>
              </div>


            </div>
          </div>

          <div className='row'>
            <div className='col-12 text-center'>
              <button style={{ fontSize: '20px' }} className='btn text-white bg-dark w-100 '>Submit</button>
            </div>
          </div>
        </form>
      </div>
    )
  }

}