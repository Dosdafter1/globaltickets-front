export const initialStateWagon = {wagons:[]}
export const wagonReducer = (state,{type, wagonType, seatsCount, price, index, wagons}) =>{
    switch(type) {
        case 'ADD':
            return {
                ...state,
                wagons: state.wagons.concat({type:wagonType, seatsCount,price})
            }
        case 'DELETE': 
            return {
                ...state,
                wagons: state.wagons.filter((w,i)=>i!=index)
            }
        case 'CHANGE':
            return {
                ...state,
                wagons: state.wagons.map((wagon,i)=>i==index?{type:wagonType, seatsCount,price}:wagon)
            }
        case 'INIT':
            return {
                ...state,
                wagons: wagons
            }
        case 'CLEAR':
            return {
                ...state,
                wagons: []
            }
        default:
            return state
    }
}