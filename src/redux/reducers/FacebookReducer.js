import { ADD_COMMENT } from "../types/FacebookTypes";

const stateDefault = {
    comments:[
        {name:'Yone', content:'Hi Vua hải tặc Luffy', avatar:'https://i.pravatar.cc/150?u=1'},
        {name:'Yasuo', content:'Hi Vua hải tặc Luffy', avatar:'https://i.pravatar.cc/150?u=yasuo'},
    ]
}

const FacebookReducer = (state=stateDefault,action) =>{
    switch(action.type)
    {
        case ADD_COMMENT:{
            state.comments =[...state.comments, action.userComment];
            return {...state}
        }
        default:
    }
    return {...state}
   
  
}

export default FacebookReducer;