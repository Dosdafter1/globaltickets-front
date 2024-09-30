import { useContext } from "react"
import AuthContext from '../../../contexts/AuthContext'
import { Navigate } from "react-router-dom"
const AuthGuard = ({children}) =>{
    const {isAuth} = useContext(AuthContext)
    if(!isAuth()){
        return <Navigate to='/'/>
    }
    return <>{children}</>
}
export default AuthGuard