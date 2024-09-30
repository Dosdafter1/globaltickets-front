import './styles/SetDiv.css'
import i18next from 'i18next'
const SetLanguageDiv = ({setVisible}) =>{
    const handle = () =>{
        setVisible(false)
    }
    return <div className="setdiv setlang">
        <p onClick={()=>{i18next.changeLanguage('uk'); handle();}}>Укр</p>
        <div className='divider'></div>
        <p onClick={()=>{i18next.changeLanguage('en'); handle();}}>Eng</p>
    </div>
}
export default SetLanguageDiv;