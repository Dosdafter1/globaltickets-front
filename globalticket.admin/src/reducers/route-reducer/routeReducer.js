export const initialState = {routes:[]}
export const routeReducer = (state,{type,point, index, arrivalTime,departureTime,duration,routes}) =>{
    switch(type) {
        case 'ADD':
            return {
                ...state,
                routes: state.routes.concat({point,arrivalTime,departureTime,duration})
            }
        case 'DELETE':
            return {
                ...state,
                routes: state.routes.filter((p,i)=>i!=index)
            }
        case 'CHANGE': 
            return {
                ...state,
                routes: state.routes.map((route, i) => i === index ? {point,arrivalTime,departureTime,duration} : route)
            }
        case 'INIT': 
            return {
                ...state,
                routes
            }
        default:
            return state
    }
}