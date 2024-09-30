import './styles/PopularRoute.css'
const SelectTransportButton = ({routes,setRoutes, setActive, active, text})=>{
    const handle = ()=>{
        setRoutes(routes)
        setActive(text)
    }
    return <button className={active==text?'active-transport':'non-active-transport'} onClick={handle}>
        {text}
    </button>
}
export default SelectTransportButton