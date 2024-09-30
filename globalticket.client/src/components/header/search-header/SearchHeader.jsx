import { NavLink } from "react-router-dom"
import './styles/SearchHeader.css'
import { useEffect } from "react"
import { useTranslation } from "react-i18next"

const SearchHeader = () =>{
    const {t} = useTranslation()
    return <div className="search-header">
        <ul>
            <li><NavLink onClick={(e)=>{e.preventDefault()}} to={`search`}>{t('searchNavbar.searchResult')}</NavLink></li>
            <li><NavLink onClick={(e)=>{e.preventDefault()}} to={`seat`}>{t('searchNavbar.seatPicker')}</NavLink></li>
            <li><NavLink onClick={(e)=>{e.preventDefault()}} to={`client`}>{t('searchNavbar.clientData')}</NavLink></li>
            <li><NavLink onClick={(e)=>{e.preventDefault()}} to='/payment'>{t('searchNavbar.pay')}</NavLink></li>
        </ul>
    </div>
}
export default SearchHeader