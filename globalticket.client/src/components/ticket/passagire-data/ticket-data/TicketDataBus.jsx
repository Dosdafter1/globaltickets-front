import { useFormik } from "formik"
import './styles/TicketData.css'
import { useTranslation } from "react-i18next"
const TicketDataBus = ({id}) => {
    const {t} = useTranslation()
    const {values, handleChange, handleBlur} = useFormik({
        initialValues: {
            name: "",
            surname: "",
            birth: new Date().toISOString().slice(0, 10)
        }
    })
    return <div className="ticket-data-block">
        <p>{t('clientData.ticketData.client',{id:id+1})} <span style={{color:"#9D9D9D"}}>{t('clientData.ticketData.fullSeatBus')}</span></p>
        <div className="client-name-block client-name-block-bus">
            <ul>
                <li>
                    <label> {t('clientData.ticketData.inputs.last')}
                        
                    </label>
                    <input type="text" name="name" value={values.name} onChange={handleChange} onBlur={handleBlur} placeholder="" />
                </li>
                <li>
                    <label> {t('clientData.ticketData.inputs.first')}
                        
                    </label>
                    <input type="text" name="surname" value={values.surname} onChange={handleChange} onBlur={handleBlur} placeholder="" />
                </li>
                <li>
                    <label> {t('clientData.ticketData.inputs.birth')}
                        
                    </label>
                    <input type="date" name="birth" value={values.birth} onChange={handleChange} onBlur={handleBlur} placeholder="" />
                </li>
            </ul>
        </div>
    </div>
}
export default TicketDataBus