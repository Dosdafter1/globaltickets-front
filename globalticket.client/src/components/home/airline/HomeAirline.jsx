import { Outlet } from "react-router-dom"
import SeacrhBlock from "../search/SearchBlock"

const HomeAirline = () =>{
    return <>
        <SeacrhBlock/>
        <Outlet/>
    </>
}
export default HomeAirline