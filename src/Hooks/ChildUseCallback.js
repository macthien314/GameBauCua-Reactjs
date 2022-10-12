import React,{memo} from 'react'

function ChildUseCallback(props) {
    let title ='One piece red';
    let object = {id:1, name:'Lufy'};
    console.log('title',title);
    console.log('object',object);
    console.log('renderd');
  return (
    <div>
        <textarea></textarea>
        <br/>
        <button className='btn btn-success'>Gửi</button>
    </div>
  )
}

export default memo(ChildUseCallback)
