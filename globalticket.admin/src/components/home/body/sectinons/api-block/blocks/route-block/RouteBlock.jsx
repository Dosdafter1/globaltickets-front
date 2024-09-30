import RouteForm from "../../forms/route-form/RouteForm"
import RouteFormList from "./route-form-list/RouteFormList"
import './styles/RouteBlock.css'
import { initialState, routeReducer } from "../../../../../../../reducers/route-reducer/routeReducer"
import { useState, useReducer, useEffect, useContext } from "react"
import RouteContext from "../../../../../../../contexts/api-context/ApiContext"
const RouteBlock = () =>{
    const {routeId, getRouteDeatils, setRouteId} = useContext(RouteContext);
    const [state, dispatch] = useReducer(routeReducer, initialState)
    useEffect(()=>{
        if(routeId!=-1){
            getRouteDeatils().then(routes=>{
                dispatch({
                    type: "INIT",
                    routes
                })
            })
            
        }
    },[])
   
    const [selectRoute, setSelectRoute] = useState({});
    const [selectRouteId, setSelectRouteId] = useState(-1);
    return <div className="route-block">
        <RouteForm dispatch={dispatch} 
                    selectRoute={selectRoute} 
                    setSelectRoute={setSelectRoute}
                    routes={state.routes} 
                    selectRouteId={selectRouteId} 
                    setSelectRouteId={setSelectRouteId}/>
        <div>
            <RouteFormList routes={state.routes} 
                            dispatch={dispatch} 
                            setSelectRoute={setSelectRoute} 
                            selectRoute={selectRoute}
                            setSelectRouteId={setSelectRouteId}/>
            <button onClick={()=>{setRouteId(-1)}} className="route-block-button">{routeId!=-1?'Змінити':'Додати'}</button>
        </div>
    </div>
}
export default RouteBlock