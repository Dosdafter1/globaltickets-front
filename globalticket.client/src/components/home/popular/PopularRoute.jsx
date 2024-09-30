import { useState } from 'react';
import {train} from './popularRoutesLists'
import './styles/PopularRoute.css';
import SelectButtonList from './SelectButtonList'
import PopularRouteList from './PopularRouteList';
import { useTranslation } from 'react-i18next';
const PopularRoute = ({setPoints, isBus=false})=>{
    const {t} = useTranslation()
    const[routes, setRoutes] = useState(train)
    return <div className='popular-route-block'>
        <ul>
            <li>
                <h1>{t('popular.title')}</h1>
            </li>
            <li>
                <SelectButtonList setRoutes={setRoutes}/>
            </li>
            <li>
                    <PopularRouteList setPoints={setPoints} routeList={routes.routeList}/>
            </li>
            {}
            
           
        </ul>
    </div>
}
export default PopularRoute