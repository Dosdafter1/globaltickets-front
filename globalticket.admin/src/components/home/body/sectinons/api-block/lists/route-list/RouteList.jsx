import { useContext, useEffect, useState } from 'react'
import RouteListElement from './route-list-element/RouteListElement'
import RouteListHeader from './route-list-header/RouteListHeader'
import './styles/RouteList.css'
import RouteContext from '../../../../../../../contexts/api-context/ApiContext'
const RouteList = () =>{
    const {getRoutes, setRouteId} = useContext(RouteContext)
    const [routes, setRoutes] = useState([]);
    const [filterWord, setFilterWord] = useState('');
    useEffect(()=>{
        getRoutes().then(res=> {
            setRoutes(res)
        })
    },[])
    return <div>
        <RouteListHeader setFilterWord={setFilterWord} h2Text={"Маршрути"} url={"/home/form/route"} setId={setRouteId} placeholder={'Назва маршруту'}/>
        <div className='list'>
            {routes.filter(i=>i.route.toLowerCase().includes(filterWord.toLowerCase()))
                    .map((r,i)=><RouteListElement key={i} id={r.id} name={r.route}/>)}
        </div>
    </div>
}
export default RouteList