import RouteBlock from "./RouteBlock";
import { v4 as uuidv4 } from 'uuid';
const PopularRouteList = ({routeList,setPoints}) =>{
    return <div className="route-list">
        {routeList.map(r=><RouteBlock  key={uuidv4()}
                                        image={r.image} 
                                        startPoint={r.startPoint}
                                        endPoint={r.endPoint}
                                        route={r.route} 
                                        handle={r.handle} 
                                        setPoints={setPoints}/>)}
    </div>
}
export default PopularRouteList;