import React,{useReducer} from 'react'

export const context = React.createContext();

const initialCart = [
    // { id: 1, name: 'iphone', price: 1000, quantity: 1 }
]

const cartReducer = (state, action) => {
    switch(action.type){
        case 'addToCart':{
            let cartUpdate = [...state];
            let index = cartUpdate.findIndex(itemCart=>itemCart.id===action.item.id);
            if(index!==-1)
            {
                cartUpdate[index].quantity +=1;
            }
            else {
                const itemCart = {...action.item, quantity:1};
                cartUpdate.push(itemCart);
            }
            return cartUpdate;
        }
        default:
    }
    return [...state]
}


export default function ContextProvider(props) {
    let [cart, dispatch] = useReducer(cartReducer, initialCart);

    //giống như rootReducer
    const store ={
        cartReducer: [cart, dispatch]
    }
  return (
    //dùng context bao bọc tất cả component bên trong (cụ thể là app)
    <context.Provider value={store}>
        {props.children}
    </context.Provider>
  )
}
