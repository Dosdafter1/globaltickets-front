import { useContext } from "react"
import { Navigate } from "react-router-dom"
import TicketContext from "../../../contexts/TicketContext"
const RouteGuard = ({children, endpoint}) =>{
    const {route} = useContext(TicketContext)
    if(route==null){
        return <Navigate to={endpoint}/>
    }
    return <>{children}</>
}
export default RouteGuard