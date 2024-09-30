import { NavLink } from 'react-router-dom'
import './styles/TransportListHeader.css'
const TransportListNavbar = ({setUrl}) =>{
    return <div className='transport-list-header'>
        <NavLink onClick={()=>{setUrl('/home/form/transport-train')}} to='/home/transport-train'>Поїзди</NavLink>
        <NavLink onClick={()=>{setUrl('/home/form/transport-bus')}} to='/home/transport-bus'>Автобуси</NavLink>
        <div></div>
        <div></div>
        <div></div>
    </div>
}
export default TransportListNavbar