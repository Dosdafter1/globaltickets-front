import { useLocation } from "react-router-dom"
import { useContext, useEffect, useState } from "react";
import TicketContext from "../../../contexts/TicketContext";
import i18next from "i18next";
import moment from "moment";
import { useTranslation } from "react-i18next";
import { useNavigate } from 'react-router-dom';
import './styles/BackDiv.css'
const BackDiv = () => {
    const navigate= useNavigate();
    const {t} = useTranslation()
    const setDate = () =>{
        const date = moment(getRoute().date);
        const formattedDate  = date.format('DD MMMM, dddd');
        return formattedDate
    }
    const location = useLocation()
    const {getRoute, route, freePlaces} = useContext(TicketContext)
    const [upText, setUpText] = useState(route.startPoint + " - " + route.endPoint);
    const [downText, setDownText] = useState(setDate());
    useEffect(()=>{
        setUpText(route.startPoint + " - " + route.endPoint)
        setDownText(setDate());
    },[route])
    useEffect(()=>{moment.locale(i18next.language)},[i18next.language])
    useEffect(()=>{
        let currentPath = location.pathname.split('/')[2]
        switch(currentPath) {
            case 'search':
                setUpText(route.startPoint + " - " + route.endPoint)
                setDownText(setDate());
                break;
            case 'seat':
                setUpText(t('transportLayout.selectFreeSeats'))
                setDownText(t('transportLayout.freeSeats',{count:freePlaces}))
                break;
            case 'client':
                setUpText(t('transportLayout.clientData'))
                setDownText(t('transportLayout.inputForms'))
                break;
            default:
                break;
        }
    },[location.pathname])
    return <div className='back-div-block' onClick={()=>{navigate(-1)}}>
        <svg width="17" height="27" viewBox="0 0 17 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 3L4 14L14 24.5" stroke="#9D9D9D" stroke-width="5" stroke-linecap="round"/>
        </svg>

        <div className='back-text-box'>
            <p className='up-p'>{upText}</p>
            <p className='down-p'>{downText}</p>
        </div>
    </div>
    
}
export default BackDiv