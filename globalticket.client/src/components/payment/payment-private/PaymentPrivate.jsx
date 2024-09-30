import './styles/PaymentPrivate.css'
import Logo from '../../../image/p24logo.png'
import Logo2 from '../../../image/Privat24_Logo 1.png'
import { NavLink } from 'react-router-dom'
const PaymentPrivate = () => {
    return <div className="pay-private-block">
        <div className='payment-data-block'>
            <p>Дані про оплату</p>
            <p>№ JP8EWGD9AQ</p>
            <div className='pay-price-block'>
                <p style={{color:"#e0e0e0"}}>До сплати:</p>
                <div className="seat-price" style={{marginRight:"0"}}>
                    <p>{2789.99} UAH</p>
                </div>
            </div>
        </div>
        <div className='private-block'>
            <img src={Logo} alt="" />
            <p>Pay</p>
        </div>
        <div className='payment-data-block pay-private-box'>
            <div className='private-box'>
                <img src={Logo2} alt="" />
                <p style={{fontSize:"20px"}}>Оплата з гаманця Приват24</p>
            </div>
            <p>Натискаючи на кнопку “Сплатити”, ви підтверджуєте, що ознайомлені з переліком інформації про послугу та приймаєте умови <a>публічного договору</a></p>
            <button className='pay-private-button'>Сплатити</button>
        </div>
        <NavLink to="/" style={{marginLeft:"18rem", color:"#7AB72B", cursor:"pointer"}}>Скасувати оплату</NavLink>
    </div>
}
export default PaymentPrivate