import React, { useState } from 'react';
import "./styles/ticket.css";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import HomeProfileBody from '../HomeProfileBody';
import { useTranslation } from 'react-i18next';


const Ticket =  ({ id, route, time, date, passengers, status, price }) => {
    const {t} = useTranslation()
    return(
        <div className='ticket-box'>
            <div className='id-content'>
                <p>{id}</p>
            </div>
            <div className='route-content'>
                <p>{route}</p>
                <div className='info-content'>
                    <span>{time}, </span>
                    <span>{date}, </span>
                    <span>{passengers}</span>
                </div>
            </div>
            <div className='pending-content'>
                <p className='peding-info'>{status}</p>
                <p className='price-content'>{price}</p>
            </div>
            <div>
                <button className='btn-details'>{t('profile.ticket.details')}</button>
            </div>
        </div>
    );
}


export default function TicketList(){
    const {t} = useTranslation()
    const tickets=[];
    const [ticketType, setTicketType] = useState('all');
    const [statusType, setStatusType] = useState('all');

    const handleTicketTypeChange = (e) => {
        setTicketType(e.target.value)
    }

    const handleStatusTypeChange = (e) => {
        setStatusType(e.target.value);
    }

    const filteredTickets = tickets.filter(ticket => {
        if (ticketType === 'all' && statusType === 'all') {
            return true;
        }
        if (ticketType === 'actual' && ticket.status !== 'history') {
            return true;
        }
        if (ticketType === 'history' && ticket.status === 'history') {
            return true;
        }
        if (statusType === 'all') {
            return true;
        }
        return ticket.status === statusType;
    });

    return(
        <>
            <div className='custom-select'>
                <select className='select-all-ticket' value={ticketType} onChange={handleTicketTypeChange}>
                    <option value="all">{t('profile.ticketList.historySelect.all')}</option>
                    <option value="actual">{t('profile.ticketList.historySelect.actual')}</option>
                    <option value="history">{t('profile.ticketList.historySelect.history')}</option>
                </select>
                <KeyboardArrowDownIcon className="select-arrow-icon" />
            </div>

            <div className='custom-select'>
                <select className='select-status' value={statusType} onChange={handleStatusTypeChange}>
                    <option value="all">{t('profile.ticketList.statusSelect.all')}</option>
                    <option value="Очікується оплата">{t('profile.ticketList.statusSelect.waitingPay')}</option>
                    <option value="Відмінено оплачений">{t('profile.ticketList.statusSelect.cancelPay')}</option>
                    <option value="Повернення запит користувача">{t('profile.ticketList.statusSelect.return')}</option>
                    <option value="Списання підтвердженно">{t('profile.ticketList.statusSelect.warite')}</option>
                </select>
                <KeyboardArrowDownIcon className="select-arrow-icon" />
            </div>
            {tickets.length > 0 ? (
            filteredTickets.length > 0 ? (
                filteredTickets.map(ticket => (
                    <Ticket
                        key={ticket.id}
                        id={ticket.id}
                        route={ticket.route}
                        time={ticket.time}
                        date={ticket.date}
                        passengers={ticket.passengers}
                        status={ticket.status}
                        price={ticket.price}
                    />
                ))
            ) : (
                <div className='container'>
                    <p className='order-text'>За заданими фільтрами не знайдено жодного  замовлення</p>
                    <p className='order-text2'>Після бронування квитків ваше замовлення буде відображатися тут</p>
                </div> 
            )
        ) : (
            <HomeProfileBody/>
        )}
        </>
        
    );
}