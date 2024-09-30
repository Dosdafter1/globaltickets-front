import RouteFormListElement from './RouteFormListElement'
import './styles/RouteFormList.css'
import { v4 as uuidv4 } from 'uuid';
const RouteFormList = ({routes, dispatch, setSelectRoute, selectRoute, setSelectRouteId}) =>{
    return <div className='route-form-list'>
        {routes.map((r,i)=><RouteFormListElement    name={r.point} 
                                                    arrivalTime={r.arrivalTime}
                                                    duration={r.duration}
                                                    departureTime={r.departureTime}
                                                    index={i} 
                                                    dispatch={dispatch} 
                                                    setSelectRoute={setSelectRoute} 
                                                    selectRoute={selectRoute}
                                                    setSelectRouteId={setSelectRouteId}
                                                    key={uuidv4()}/>)}
    </div>
}   
export default RouteFormList