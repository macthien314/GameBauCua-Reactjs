import React, { useReducer } from 'react'

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
    }
    return [...state]
}

let arrProduct = [
    { id: 1, name: 'Iphone', price: 1000 },
    { id: 2, name: 'Note 10 plus', price: 5000 },
    { id: 3, name: 'Huawei P20', price: 1200 },
]




export default function DemoHookUseReducer() {

    let [cart, dispatch] = useReducer(cartReducer, initialCart);

    const addToCart =(itemClick)=>{
        const action ={
            type:'addToCart',
            item:itemClick
        }
        dispatch(action)
    }
    return (
        <div className='container'>

            <div className='row'>
               
                    {arrProduct.map((product, index) => {
                        return <div className='col-4'>
                         <div key={index} className="card text-left mt-5">
                            <img  className="card-img-top" src="https://pic-bstarstatic.akamaized.net/ugc/9fb6afeb035951cc24e0989bdd8148b54e5e12ea.jpg" alt="123" />
                            <div className="card-body">
                                <h4 className="card-title">{product.name}</h4>
                                <p className="card-text">{product.price}</p>
                                <button className='btn btn-success' onClick={()=>{addToCart(product)}}>Add To Cart</button>
                            </div>
                        </div>
                        </div>
                })}
               
            </div>

            <h3>Giỏ hàng</h3>
            <table className='table'>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>price</th>
                        <th>quantity</th>
                        <th>total</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((product, index) => {
                        return <tr key={index}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.quantity}</td>
                            <td>{product.quantity * product.price}</td>
                            <td><button className='btn btn-danger'>X</button></td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}
