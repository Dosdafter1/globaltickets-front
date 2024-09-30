import { useFormik } from "formik"
import './styles/TicketData.css'
import { useContext, useEffect, useState } from "react";
import SupplimentBlocks from "./SupplimentBlocks";
import { useTranslation } from "react-i18next";
import { WagonType } from "../../../../enums/wagon/wagonTypeEnum";
import TicketContext from "../../../../contexts/TicketContext";
const TicketData = ({id,price,setPrices,prices, wagonType, seat,wagon, clientDatas, setClientDatas}) =>{
    const {t} = useTranslation()
    const [selectedOption, setSelectedOption] = useState("0"); 
    const [visible, setVisible] = useState(false)
    const [ticketPrice, setTicketPrice]=useState(price)
    const [checkboxes, setCheckboxes] = useState({
        drink: false,
        tea: false,
        coffee: false,
        equipment: false,
        surplus: false,
        animal: false
      });
    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };
    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        setCheckboxes({ ...checkboxes, [name]: checked });
      };
    const {values, handleChange, handleBlur} = useFormik({
        initialValues: {
            name: "",
            surname: ""
        }
    })
    useEffect(()=>{
        prices[id]=ticketPrice
    },[])
    useEffect(()=>{
        setPrices(prevPrices => {
            const updatedPrices = [...prevPrices];
            updatedPrices[id] = ticketPrice; 
            return updatedPrices; 
        });
    },[ticketPrice])
    useEffect(()=>{
        setClientDatas(oldDatas => {
            let newClientsData = [...oldDatas]
            newClientsData[id] = {
                firstName: values.name,
                lastName: values.surname,
                price: prices[id],
                ticketType: selectedOption
            }
            return newClientsData
        })
        
    },[values, selectedOption])
    return <div className="ticket-data-block">
        <p>{t('clientData.ticketData.client',{id:id+1})} <span style={{color:"#9D9D9D"}}>{t('clientData.ticketData.fullSeat',{type:WagonType()[wagonType],wagon:wagon,seat:seat})}</span></p>
        <div className="radio-block">
            <form action="">
                <div>
                    <label class="container">
                        <input type="radio" name="radio" value="0" checked={selectedOption === "0"}  onChange={handleOptionChange}/>
                        <span class="checkmark"></span>
                        {t('clientData.ticketData.types.full')}
                    </label>
                </div>
                <div>
                    <label class="container">
                        <input type="radio" name="radio" value="1" checked={selectedOption === "1"} onChange={handleOptionChange}/>
                        <span class="checkmark"></span>
                        {t('clientData.ticketData.types.children')}
                    </label>
                </div>
                <div>
                    <label class="container">
                        <input type="radio" name="radio" value="2" checked={selectedOption === "2"} onChange={handleOptionChange}/>
                        <span class="checkmark"></span>
                        {t('clientData.ticketData.types.student')}
                    </label>
                </div>
                <div className="seat-price price-data-block">
                    <p>{ticketPrice}<span style={{marginLeft:".2rem"}}>грн</span></p>
                </div>
            </form>
        </div>
        <div className="client-name-block client-name-block-train">
            <form action="">
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
                </ul>
            </form>
        </div>
        <div>
            <div className="supplement-box">
                <ul>
                    <li><p>{t('clientData.ticketData.bedding')}</p></li>
                    <li>
                        <div className="text-end">
                            <p>60<span style={{marginLeft:".2rem"}}>грн</span></p>
                        </div>
                        <div className="show-supplement-box" onClick={()=>{setVisible(!visible)}}>
                            <i style={visible?{top:"20%"}:{top:"35%"}} className={visible?"arrow down":"arrow up"}></i>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        {!visible?<></>:
        <SupplimentBlocks handleCheckboxChange={handleCheckboxChange} checkboxes={checkboxes} setTicketPrice={setTicketPrice} ticketPrice={ticketPrice}/>}
    </div>
}
export default TicketData