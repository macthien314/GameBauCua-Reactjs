import React,{useContext} from 'react'
import {context} from './Context/ContextProvider'
let arrProduct = [
    { id: 1, name: 'Iphone', price: 1000 },
    { id: 2, name: 'Note 10 plus', price: 5000 },
    { id: 3, name: 'Huawei P20', price: 1200 },
]

export default function DemoUseContext() {
    // let store = useContext(context);
    // let cartReducer = store.cartReducer;
    const addToCart =(itemClick)=>{
        const action ={
            type:'addToCart',
            item:itemClick
        }
        dispatch(action)
    }

    let {cartReducer} = useContext(context);
    let [cart, dispatch] = cartReducer;
    return (
        <div className='container'>

            <div className='row'>
               
                    {arrProduct.map((product, index) => {
                        return <div  key={index}  className='col-4'>
                         <div className="card text-left mt-5">
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
