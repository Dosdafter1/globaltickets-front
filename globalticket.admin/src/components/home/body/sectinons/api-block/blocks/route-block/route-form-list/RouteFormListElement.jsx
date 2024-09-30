import DeleteOutlined from '@ant-design/icons/DeleteOutlined'

const RouteFormListElement = ({name, index, dispatch, setSelectRoute, selectRoute, setSelectRouteId, arrivalTime,departureTime,duration}) =>{
    const buttonClickHandle = () =>{
        if(name==selectRoute){
            setSelectRoute({})
            setSelectRouteId(-1)
        }
        dispatch({
            type: "DELETE",
            index: index
        })
        
    }
    const elClickHandle = () =>{
        setSelectRoute({
            point:name,
            arrivalTime,
            departureTime,
            duration
        })
        setSelectRouteId(index)
    }
    return <div className={selectRoute.point==name?"route-form-list-element select-element":"route-form-list-element not-select-element"}>
        <p onClick={elClickHandle}>{name}</p>
        <p onClick={elClickHandle}>{arrivalTime}</p>
        <p onClick={elClickHandle}>{duration}</p>
        <p onClick={elClickHandle}>{departureTime}</p>
        <button onClick={buttonClickHandle}><DeleteOutlined /></button>
    </div>
}
export default RouteFormListElement