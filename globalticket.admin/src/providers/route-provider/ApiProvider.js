import axios from "axios"
import RouteContext from "../../contexts/api-context/ApiContext"
import { useReducer } from "react"
import { initialState, apiReducer } from "../../reducers/api-reducer/ApiReducer"
const GET_ROUTE_ENDPOINT = 'http://localhost:5007/api/Admin/get-routes'
const GET_TRAINS_ENDPOINT = 'http://localhost:5007/api/Admin/get-trains'
const GET_BUSES_ENDPOINT = 'http://localhost:5007/api/Admin/get-buses'
const GET_ROUTE_DEATILS_ENDPOINT = 'http://localhost:5007/api/Admin/get-route-details'
const GET_TRAIN_DEATILS_ENDPOINT = 'http://localhost:5007/api/Admin/get-train-details'
const GET_BUS_DEATILS_ENDPOINT = 'http://localhost:5007/api/Admin/get-bus-details'
export const ApiProvider = ({children}) => {
    const [state, dispatch] = useReducer(apiReducer,initialState)
    const getRoutes = async() =>{
        try {
            let res = await axios.get(GET_ROUTE_ENDPOINT)
            return res.data
        } catch (error) {
            return []
        }
    }
    const getTrains = async() =>{
        try {
            let res = await axios.get(GET_TRAINS_ENDPOINT)
            return res.data
        } catch (error) {
            return []
        }
    }
    const getBuses = async() =>{
        try {
            let res = await axios.get(GET_BUSES_ENDPOINT)
            return res.data
        } catch (error) {
            return []
        }
    }
    const getRouteDeatils = async() =>{
        try {
            let paramsRoute = {
                routeId: state.routeId
            }
            let res = await axios.get(GET_ROUTE_DEATILS_ENDPOINT, {params: paramsRoute})
            return res.data
        } catch (error) {
            return []
        }
    }
    const getTrainDetails = async()=>{
        try {
            let paramsRoute = {
                trainId: state.transportId
            }
            let res = await axios.get(GET_TRAIN_DEATILS_ENDPOINT, {params: paramsRoute})
            return res.data
        } catch (error) {
            return []
        }
    }
    const getBusDetails = async()=>{
        try {
            let paramsRoute = {
                busId: state.transportId
            }
            let res = await axios.get(GET_BUS_DEATILS_ENDPOINT, {params: paramsRoute})
            return res.data
        } catch (error) {
            return []
        }
    }
    const setRouteId = (routeId) =>{
        dispatch({
            type:'ROUTE',
            routeId
        })
    }
    const setTransportId = (transportId) =>{
        dispatch({
            type:'TRANSPORT',
            transportId
        })
    }

    return  <RouteContext.Provider value={{...state, getRoutes, 
                                                        setRouteId, 
                                                        getRouteDeatils, 
                                                        getBuses, 
                                                        getTrains, 
                                                        setTransportId,
                                                        getBusDetails,
                                                        getTrainDetails}}>
            {children}
            </RouteContext.Provider>
}