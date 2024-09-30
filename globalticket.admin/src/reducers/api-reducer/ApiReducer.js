export const initialState = {routeId:-1,transportId:-1}
export const apiReducer = (state,{type,routeId,transportId}) =>{
    switch(type){
        case 'ROUTE': 
            return {
                ...state,
                routeId
            }
        case 'TRANSPORT':
            return {
                ...state,
                transportId
            }
        default:
            return state
    }
}