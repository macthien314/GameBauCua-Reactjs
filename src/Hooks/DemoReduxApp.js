import React,{useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { commentAction } from '../redux/actions/FacebookActions';
// import { ADD_COMMENT } from '../redux/types/FacebookTypes';
export default function DemoReduxApp(props) {

    //useSelector thay cho mapstatetoprops
    let comments =useSelector(state => state.FacebookReducer.comments);

    //Lấy hàm dispatch từ useDispatch => để gửi giá trị lên reducer 
    let dispatch = useDispatch();

    //Lấy thông tin người dùng nhập vào
    let [userComment, setUserComment] = useState({
        name:'',
        content:'',
        avatar:''
    })

    const handleChange = (e) =>{
        let {value, name} = e.target;

        setUserComment({
            ...userComment,
            [name]:value
        })
    }

    //submit thông tin người dùng lên reducer
    const handleComment =(e)=>{
        e.preventDefault();

        let usComment = {...userComment, avatar:`https://i.pravatar.cc/150?u=${userComment.name}`}

        // let action = {
        //     type:ADD_COMMENT,
        //     userComment: usComment
        // }
        dispatch(commentAction(usComment))
    }

  return (
    <div className='container'>
        <h3>Facebook App!</h3>
       <div className="card text-left">
  <div className='card-header'>
    {comments.map((comment, index)=>{
        return  <div key={index} className='row mt-3'>
        <div className='col-2 text-right p-0'>
            <img src={comment.avatar} alt='123' style={{width:80}}/>
        </div>
        <div className='col-10'>
            <h6 className='text-danger'>{comment.name}</h6>
            <p>{comment.content}</p>
        </div>
    </div>
    })}


  </div>
  <form className="card-body" onSubmit={handleComment}>
    <div className='from-group'>
    <h4 className="card-title">Name</h4>
    <input className='form-control' name='name' onChange={handleChange}/>
    </div>
    <div className='from-group'>
    <h4 className="card-title">Content</h4>
    <input className='form-control' name='content' onChange={handleChange}/>
    </div>
    <div className='from-group'>
    <button className='btn btn-success mt-3'>Send</button>
    </div>
  </form>
</div>

    </div>
  )
}
