import './styles/PlaceBlock.css'
import { useTranslation } from 'react-i18next'
import { useNavigate, useLocation } from 'react-router-dom'
import TicketContext from '../../../contexts/TicketContext'
import { useContext, useState } from 'react'
import { WagonType } from '../../../enums/wagon/wagonTypeEnum'
import PayContext from '../../../contexts/PayContext'
const PlaceBlock = ({placeName, price,count,clickData, trainLineName, transportId}) => {
    const wagonName = WagonType()[placeName.toString()]
    const location = useLocation()
    const navigate = useNavigate()
    const {setTrainRoute, setFreePlaces} = useContext(TicketContext)
    const {setPrice} = useContext(PayContext)
    const {t} = useTranslation()
    const handle = () => {
        setTrainRoute(clickData.startTime, clickData.startPoint, clickData.endTime, 
                        clickData.endPoint, placeName, trainLineName, 
                        transportId, clickData.startDate, clickData.endDate)
        setPrice(price)
        setFreePlaces(count)
        navigate(nextUrl)
    }
    const changeUrl = (url) =>{
        const lastSlesh = url.lastIndexOf('/');
        if (lastSlesh !== -1) {
            const clearUrl = url.substring(0, lastSlesh);
            return clearUrl;
        } else {
            return url;
        }
    }
    let nextUrl = changeUrl(location.pathname)+"/seat"
    return <div className='place-block'>
        <ul>
            <li style={{margin:".7rem"}}> <p className='place-name'>{wagonName} <span className='place-count'>{t('places.seat',{count})}</span></p></li>
            <li className='price-box'><p >{price}<span className='price-block'>грн</span></p></li>
            <li><button onClick={handle}>{t('buttons.continue')}</button></li>
        </ul>
    </div>
}
export default PlaceBlock