import TicketData from "./ticket-data/TicketData";
import { useState, useEffect, useContext} from "react";
import './styles/ClientDataBlock.css'
import InputMask from 'react-input-mask';
import { useFormik } from "formik";
import moment from 'moment'
import 'moment/locale/uk'
import i18next from 'i18next'
import TicketDataSimple from "./ticket-data/TicketDataSimple";
import { useNavigate} from "react-router-dom";
import TicketContext from "../../../contexts/TicketContext";
import { v4 as uuidv4 } from 'uuid';
import { useTranslation } from "react-i18next";
import PayContext from "../../../contexts/PayContext";
import { toast } from "react-toastify";
const ClientDataBlock = ()=>{
    const {t} = useTranslation()
    const {trainRoute, wagonType, tickets, trainLineName, wagonNumber, bookedSeats, sendData, setSendData, clientData, setClientData} = useContext(TicketContext)
    const {price, setLiqPayParams} = useContext(PayContext)
    const navigate = useNavigate()
    const [totalPrice, setTotalPrice] = useState(0);
    const route=trainRoute.startPoint + ' - ' +trainRoute.endPoint
    const [startDate, setStartDate] = useState(trainRoute.startDate);
    const [endDate, setEdDate] = useState(trainRoute.endDate);
    const [prices, setPrices] = useState(tickets.map(t=>price))
    const [clientDatas, setClientDatas] = useState(tickets.map(t=>{return {firstName:'',lastName:'',price:price, ticketType:0}}))
    const setDates = ()=>{
        const fDate = moment(startDate, 'DD.MM.YYYY');
        const fFormattedDate = fDate.format('D MMMM');
        setStartDate(fFormattedDate)
        const lDate = moment(endDate, 'DD.MM.YYYY');
        const lFormattedDate = lDate.format('D MMMM');
        setEdDate(lFormattedDate)
    }
    useEffect(()=>{
        setDates()
    },[])
    useEffect(()=>{
        moment.locale(i18next.language)
        setDates()
    },[i18next.language])
    useEffect(()=>{
        let sum=0;
        prices.forEach(num=>sum+=num)
        setTotalPrice(sum)
    },[prices])
    const handle = async()=> {
        
        let res =  await bookedSeats()
        if(res.status !==200) {
            toast.error('Місця зарезервовані')
            navigate(-1)
        } else {
            setClientData(clientDatas)
            setSendData({email: ticketSend.values.email})
            let desc = ''
            desc+= trainRoute.startPoint + ' - '+trainRoute.endPoint+','
            desc+= "ВагонX"+wagonNumber
            tickets.forEach(t=>desc+=`Місце ${t}`)
            setLiqPayParams(desc, totalPrice)
            navigate('/payment')
        }
    }
    const ticketSend = useFormik({
        initialValues: {
            phone:"",
            phoneHeader: +38,
            email:"",
        }
    })
    let priceIndex = 0;
    let index = 0;
    const ticketsEl = tickets.map(ticket=>{
            let el =  <TicketData id={index} clientDatas={clientDatas} setClientDatas={setClientDatas} wagonType={wagonType} wagon={wagonNumber} seat={ticket} price={price} setPrices={setPrices} prices={prices} key={uuidv4}/>
            ++index;
            return el;
    })
    return <div className="client-data-block">
        <ul>
            <li>
                <div>
                    {ticketsEl}
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
                    <p style={{fontWeight:"bolder"}}>{trainLineName} <span style={{color:"#6F6F6F", fontFamily:"Fixel Display Light"}}>{route}</span></p>
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
                        {prices.map(p=>{
                            let el = <TicketDataSimple client={priceIndex+1} price={p} key={uuidv4}/>
                            ++priceIndex;
                            return el;})}
                    </div>
                    <div className="promo-code">{t('clientData.orderBlock.promocode')}
                    </div>
                    <button disabled={ticketSend.values.phone=="" || ticketSend.values.email==""} className="data-button" onClick={handle}><p style={{fontFamily:"Fixel Display Light", marginTop:".3rem"}}>{t('clientData.orderBlock.pay')} </p>  
                        <div className="seat-price" style={{marginRight:"0"}}>
                            <p style={{fontSize:"24px"}}>{parseFloat(totalPrice.toFixed(2))}<span style={{marginLeft:".2rem"}}>грн</span></p>
                        </div>
                    </button>
                </div>
            </li>
        </ul>
    </div>
}
export default ClientDataBlock