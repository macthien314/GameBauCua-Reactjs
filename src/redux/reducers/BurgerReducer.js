const burgerState ={
    burger:{salad:3, cheese:2, beef: 1},
    menu: {
        salad:10,
        cheese:20,
        beef:55
    },
    total: 85
}

export const BurgerReducer =(state = burgerState, action)=>{
    return {...state}
} 