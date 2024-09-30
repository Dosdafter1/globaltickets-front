import { Outlet } from "react-router-dom"
import SeacrhBlock from "../search/SearchBlock"
const HomeBus = ({startPoint, endPoint}) =>{
    return <>
        <SeacrhBlock startPoint={startPoint} endPoint={endPoint}/>
        <Outlet/>
    </>
}
export default HomeBus