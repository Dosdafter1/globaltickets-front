import { useParams } from "react-router-dom";
import './styles/TicketsBlock.css'
import TicketsList from "./TicketsList";
import { useTranslation } from "react-i18next";
const TicketsBlock = ({type}) =>{
    const {t} = useTranslation()
    const typeText = type == 'TRAIN' ? t('transportType.train')
                   : type == 'BUS' ? t('transportType.bus') 
                   : t('transportType.air')
    const {start, end} = useParams();
    //<Ticket startTime={'00:00'} endTime={'08:30'} duration={'08:30'} transportName={'110K'} route={'s-sa'} type={"Інтерсіті"}/>
    return <div className="tickets-block">
        <TicketsList typeText={typeText} type={type}/>
    </div>
}
export default TicketsBlock