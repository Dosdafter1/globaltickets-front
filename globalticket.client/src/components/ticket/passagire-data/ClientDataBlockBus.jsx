import TicketDataBus from "./ticket-data/TicketDataBus";
import { useState, useEffect, useContext } from "react";
import './styles/ClientDataBlock.css'
import InputMask from 'react-input-mask';
import { useFormik } from "formik";
import moment from 'moment'
import 'moment/locale/uk'
import TicketDataSimple from "./ticket-data/TicketDataSimple";
import { useNavigate} from "react-router-dom";
import TicketContext from "../../../contexts/TicketContext";
import { useTranslation } from "react-i18next";
import i18next from 'i18next'
import PayContext  from '../../../contexts/PayContext' 
const ClientDataBlockBus = () =>{
    const {t} = useTranslation()
    const {getSelectTickets, trainRoute, trainLineName} = useContext(TicketContext)
    const {price} = useContext(PayContext)
    const transportName= trainLineName;
    const route = trainRoute.startPoint + ' - ' + trainRoute.endPoint;
    const [startDate, setStartDate] = useState(trainRoute.startDate);
    const [endDate, setEdDate] = useState(trainRoute.endDate);
    const n = useNavigate()
    const ticketSend = useFormik({
        initialValues: {
            phone:"",
            phoneHeader: +38,
            email:"",
        }
    })
    const setDates = ()=>{
        const fDate = moment("22.05.2024", 'DD.MM.YYYY');
        const fFormattedDate = fDate.format('D MMMM');
        setStartDate(fFormattedDate)
        const lDate = moment("23.05.2024", 'DD.MM.YYYY');
        const lFormattedDate = lDate.format('D MMMM');
        setEdDate(lFormattedDate)
    }
    useEffect(()=>{
        moment.locale(i18next.language)
        setDates()
    },[])
    useEffect(()=>{
        moment.locale(i18next.language)
        setDates()
    },[i18next.language])
    let index = 0;
    let tickets = []
    let simpleTickets = [];
    const handle  = () =>{
        n('/payment')
    }
    const size = getSelectTickets();
        for(index; index<size; index++){
            tickets.push(<TicketDataBus id={index} price={price}/>)
            simpleTickets.push(<TicketDataSimple client={index+1} price={price}/>)
        }
    return <div className="client-data-block">
        <ul>
            <li>
                <div>
                    {tickets}
                </div> 
                <div className="ticket-send-data-block">
                    <h4>{t('clientData.clientBlock.send')}</h4>
                    <div style={{display:"flex", gap:"1.5rem"}}>
                        <div className="ticket-send-data-input-box">
                            <label htmlFor="">{t('clientData.clientBlock.email')}</label>
                            <br />
                            <input type="email" name="email" 
                                                placeholder="username@gmail.com"
                                                value={ticketSend.values.email} 
                                                onChange={ticketSend.handleChange} 
                                                onBlur={ticketSend.handleBlur} />
                            <p>{t('clientData.clientBlock.emailDesc')}</p>
                        </div>
                        <div className="ticket-send-data-input-box">
                            <label htmlFor="">{t('clientData.clientBlock.phone')}</label>
                            <br />
                            
                            <InputMask mask="+38 (999) 999 99 99"  
                                        defaultValue="+38"
                                        name="phone" type="tel"
                                        value={ticketSend.values.phone}  
                                        onChange={ticketSend.handleChange} 
                                        placeholder="+38 (000) 000 00 00"/>
                            <p>{t('clientData.clientBlock.phoneDesc')}</p>
                        </div>
                    </div>
                        
                </div>
            </li>
            <li>
                <div className="result-tricket-block">
                    <p>{t('clientData.orderBlock.order')}</p>
                    <div className="div-divider"></div>
                    <p style={{fontWeight:"bolder"}}>{transportName} <span style={{color:"#6F6F6F", fontFamily:"Fixel Display Light"}}>{route}</span></p>
                    <div className="result-ticket-date-box">
                        <div>
                            <p>{trainRoute.startTime}</p>
                            <p style={{color:"#6F6F6F"}}>{startDate}</p>
                        </div>
                        <div style={{textAlign:"end"}}>
                            <p>{trainRoute.endTime}</p>
                            <p style={{color:"#6F6F6F"}}>{endDate}</p>
                        </div>
                    </div>
                    <div>
                        {simpleTickets}
                    </div>
                    <div className="promo-code">{t('clientData.orderBlock.promocode')}
                    </div>
                    <button disabled={ticketSend.values.phone=="" || ticketSend.values.email==""} className="data-button" onClick={handle}><p style={{fontFamily:"Fixel Display Light", marginTop:".3rem"}}>{t('clientData.orderBlock.pay')} </p>  
                        <div className="seat-price" style={{marginRight:"0"}}>
                            <p style={{fontSize:"24px"}}>{parseFloat((getSelectTickets()*price).toFixed(2))}<span style={{marginLeft:".2rem"}}>грн</span></p>
                        </div>
                    </button>
                </div>
            </li>
        </ul>
    </div>
}
export default ClientDataBlockBus