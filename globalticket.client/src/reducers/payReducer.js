export const PAY_TYPES ={
    payment: 'PAYMENT',
    setPrice: 'SET_PRICE'
}
export const paymentInitialState = {
    desc: null,
    amount: null,
    price: null
}
export const payReducer = (state,{type,desc,amount, price})=>{
    switch(type){
        case PAY_TYPES.setPrice:
            return {
                ...state,
                price
            }
        case PAY_TYPES.payment:
            return {
                ...state,
                desc,
                amount
            }
        default:
            return state
    }
}   