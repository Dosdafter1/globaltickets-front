import './styles/TicketsBlock.css'
import { useTranslation } from 'react-i18next'
import moment from 'moment'
import { useEffect, useState } from 'react'
import i18next from 'i18next'
import 'moment/locale/uk'
import PlaceBlock from './place-block/PlaceBlock'
import { v4 as uuidv4 } from 'uuid';
import { TrainType } from '../../enums/train/trainTypeEnum'
const Ticket = ({startTime, startDate, endDate, endTime, duration, transportName, route, type='', places, trainId}) =>{
    const[firstDate, setFirstDate] = useState('')
    const[lastDate, setLastDate] = useState('')
    const {t} = useTranslation()
    const setDates = ()=>{
        const fDate = moment(startDate, 'DD.MM.YYYY');
        const fDayOfWeek = fDate.format('dd');
        const fFormattedDate = fDate.format('D MMMM');
        setFirstDate(fDayOfWeek+','+fFormattedDate)
        const lDate = moment(endDate, 'DD.MM.YYYY');
        const lDayOfWeek = lDate.format('dd');
        const lFormattedDate = lDate.format('D MMMM');
        setLastDate(lDayOfWeek+', '+lFormattedDate)
    }
    useEffect(()=>{
        moment.locale(i18next.language)
        setDates()
    },[])
    useEffect(()=>{
        moment.locale(i18next.language)
        setDates()
    },[i18next.language])
    return <div className='ticket'>
        <div>
            <div className='date-time-box'>
                <div>
                    <p className='time'>{startTime}</p>
                    <p className='date'>{firstDate}</p>
                </div>
                <div className='duration-box'>
                    <svg className='line' width="26" height="2" viewBox="0 0 26 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H25" stroke="#F07B6A" stroke-linecap="round"/>
                    </svg>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="8" cy="8" r="8" fill="#F07B6A"/>
                        <path d="M7 4V9.5H11" stroke="white" stroke-linecap="round"/>
                    </svg>
                    <p>{duration}</p>
                    <svg className='line' width="26" height="2" viewBox="0 0 26 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H25" stroke="#F07B6A" stroke-linecap="round"/>
                    </svg>
                </div>
                <div>
                    <p className='time'>{endTime}</p>
                    <p className='date'>{lastDate}</p>
                </div>
            </div>
            
            <div className='transport-box'>
                <div className='transport-details'>
                    <p>{transportName}</p>
                    <p className='transport-type'>{TrainType()[type]!=null?TrainType()[type]:type}</p>
                </div>
                <p className='transport-route'>{route}</p>
            </div>
        </div>
        <div>
            {places.map((p,index)=> <PlaceBlock key={index} 
                                                placeName={p.placeName} 
                                                price={p.price} 
                                                count={p.numberOfPlaces} 
                                                trainLineName={transportName}
                                                transportId={trainId}
                                                clickData={{
                                                    startTime: startTime,
                                                    endTime: endTime,
                                                    startPoint: route!==undefined?route.split(' - ')[0]:route,
                                                    endPoint: route!==undefined?route.split(' - ')[1]:route,
                                                    startDate: firstDate,
                                                    endDate: lastDate
                                                }}/>)}
        </div>
    </div>
}
export default Ticket