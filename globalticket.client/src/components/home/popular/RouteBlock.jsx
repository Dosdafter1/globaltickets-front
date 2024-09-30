import './styles/PopularRoute.css'
const RouteBlock = ({image, route, handle, setPoints, startPoint, endPoint}) =>{
    const handleOnClick = () =>{
        handle()
        setPoints(startPoint,endPoint)
    }
    return <div className='route-block' onClick={handleOnClick}>
        <img src={image} alt="" />
        <div className='route-gradient-background'></div>
        <p>{route}</p>
    </div>
}
export default RouteBlock