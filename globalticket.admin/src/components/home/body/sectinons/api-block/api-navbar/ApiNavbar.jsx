import { NavLink } from "react-router-dom"
import './styles/ApiNavbar.css'
const ApiNavbar = () =>{
    return <div className="api-navbar">
        <NavLink to='routes'><span>Маршрути</span></NavLink>
        <NavLink to='transport'><span>Транспорт</span></NavLink>
        <div></div>
        <div></div>
    </div>
}
export default ApiNavbar