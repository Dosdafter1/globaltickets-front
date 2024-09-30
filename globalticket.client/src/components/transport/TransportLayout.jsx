import { Outlet, useLocation } from "react-router-dom"
import SearchHeader from "../header/search-header/SearchHeader"
import BackDiv from "./back-div/BackDiv"

const TransportLayout = () =>{
    return <div>
        <SearchHeader/>
        <BackDiv />
        <Outlet/>
    </div>
}
export default TransportLayout