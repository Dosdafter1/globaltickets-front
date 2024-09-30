import { useTranslation } from "react-i18next";

const SupplimentBlocks = ({handleCheckboxChange, checkboxes, setTicketPrice, ticketPrice}) =>{
    const{t} = useTranslation()
    return <>
    <div className="suppliment-block" style={{left:"33%"}}>
        <form action="">
            <label class="checkbox-container">   
                <div className="checkbox-checkmark-text-box">
                    <p>{t('clientData.ticketData.suppliments.drink')}</p> 
                    <div className="text-end">
                        <p>10<span style={{marginLeft:".2rem"}}>грн</span></p>
                    </div>
                </div>   
                <input name="drink" type="checkbox" checked={checkboxes.drink} onChange={(e)=>{
                    handleCheckboxChange(e);
                    checkboxes.drink?setTicketPrice(ticketPrice-10):setTicketPrice(ticketPrice+10)}}/>
                <span class="checkbox-checkmark"></span>
            </label>
            <label class="checkbox-container">   
                <div className="checkbox-checkmark-text-box">
                    <p>{t('clientData.ticketData.suppliments.tea')}</p> 
                    <div className="text-end">
                        <p>15<span style={{marginLeft:".2rem"}}>грн</span></p>
                    </div>
                </div>   
                <input name="tea" type="checkbox" checked={checkboxes.tea} onChange={(e)=>{
                    handleCheckboxChange(e);
                    checkboxes.tea?setTicketPrice(ticketPrice-15):setTicketPrice(ticketPrice+15)}}/>
                <span class="checkbox-checkmark"></span>
            </label>
            <label class="checkbox-container">   
                <div className="checkbox-checkmark-text-box">
                    <p>{t('clientData.ticketData.suppliments.coffee')}</p> 
                    <div className="text-end">
                        <p>25<span style={{marginLeft:".2rem"}}>грн</span></p>
                    </div>
                </div>   
                <input name="coffee" type="checkbox" checked={checkboxes.coffee} onChange={(e)=>{
                    handleCheckboxChange(e);
                    checkboxes.coffee?setTicketPrice(ticketPrice-25):setTicketPrice(ticketPrice+25)}}/>
                <span class="checkbox-checkmark"></span>
            </label>
        </form>
    </div>
    <div className="suppliment-block" style={{left:"63%"}}>
        <form action="">
            <label class="checkbox-container">   
                <div className="checkbox-checkmark-text-box">
                    <p>{t('clientData.ticketData.suppliments.equipment')}</p> 
                    
                </div>   
                <input name="equipment" type="checkbox" checked={checkboxes.equipment} onChange={handleCheckboxChange}/>
                <span class="checkbox-checkmark"></span>
            </label>
            <label class="checkbox-container">   
                <div className="checkbox-checkmark-text-box">
                    <p>{t('clientData.ticketData.suppliments.surplus')}</p> 
                </div>   
                <input name="surplus" type="checkbox" checked={checkboxes.surplus} onChange={handleCheckboxChange}/>
                <span class="checkbox-checkmark"></span>
            </label>
            <label class="checkbox-container">   
                <div className="checkbox-checkmark-text-box">
                    <p>{t('clientData.ticketData.suppliments.animal')}</p> 
                </div>   
                <input name="animal" type="checkbox" checked={checkboxes.animal} onChange={handleCheckboxChange}/>
                <span class="checkbox-checkmark"></span>
            </label>
        </form>
    </div>
</>
}
export default SupplimentBlocks