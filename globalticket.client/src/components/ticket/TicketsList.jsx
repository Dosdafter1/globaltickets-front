import axios from "axios"
import { useContext, useEffect, useState } from "react"
import Ticket from "./Ticket"
import { useTranslation } from "react-i18next"
import Loader from "../loader/Loader"
import { toast } from "react-toastify"
import SortBlock from "./sort-block/SortBlock"
import TicketContext from "../../contexts/TicketContext"
import { v4 as uuidv4 } from 'uuid';
const TicketsList = ({typeText ,type}) =>{
    const {getTickets} = useContext(TicketContext)
    const {t} = useTranslation()
    const [tickets, setTickets] = useState([])
    const [isLoad, setIsLoad] = useState(false)
    const [sort, setSort] = useState('all')
    useEffect(()=>{
            setIsLoad(true)
            getTickets(type).then(res=> {
                setTickets(res)
            })
            setIsLoad(false)
    },[])
    const sortMap = {
        all: ()=>{},
        start: (a, b) => {
            const timeA = a.startTime.split(':').map(Number);
            const timeB = b.startTime.split(':').map(Number);
            return timeA[0] - timeB[0] || timeA[1] - timeB[1];
        },
        end: (a, b) => {
            const timeA = a.endTime.split(':').map(Number);
            const timeB = b.endTime.split(':').map(Number);
            return timeA[0] - timeB[0] || timeA[1] - timeB[1];
        },
        duration: (a, b) => {
            const durationA = a.duration.split(':').map(Number);
            const durationB = b.duration.split(':').map(Number);
            return durationA[0] - durationB[0] || durationA[1] - durationB[1];
        },
        price: (a, b) => {
            const priceA = a.places[0].price;
            const priceB = b.places[0].price;
            return priceA - priceB;
        }
    }
    return <div className="tickets-list">
        <div className="tickets-tips">
            <ul>
                <li><p>{t('searchResult.result',{count:tickets.length, type:typeText})}</p></li>
                <li>
                    <SortBlock setSort={setSort} sortMap={Object.keys(sortMap)} active={sort}/>
                </li>
            </ul>
        </div>
        {isLoad?<div className="load-block"><Loader/></div>:tickets.sort(sortMap[sort]).map(t=>{ return<Ticket startTime={t.startTime} 
                                                                        startDate={t.startDate}
                                                                        endDate={t.endDate}
                                                                        endTime={t.endTime} 
                                                                        duration={t.duration} 
                                                                        transportName={t.transportName} 
                                                                        route={t.route} 
                                                                        type={t.type}
                                                                        places={t.places}
                                                                        trainId={t.transportId}
                                                                        key={uuidv4()}/>})
        }
    </div>
}
export default TicketsList
/*
*/