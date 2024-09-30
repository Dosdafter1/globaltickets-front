import Wagon from './Wagon'
import './styles/Wagon.css'
const WagonList = ({wagons, dispatch, setSelectWagon, setSelectWagonId, selectWagonId}) =>{
    return <div className='wagon-list'>
        {wagons.map((w,i)=><Wagon key={i} index={i} 
                                            type={w.type} 
                                            price={w.price} 
                                            count={w.seatsCount} 
                                            dispatch={dispatch}
                                            setSelectWagon={setSelectWagon} 
                                            setSelectWagonId={setSelectWagonId}
                                            selectWagonId={selectWagonId}/>)}
    </div>
}
export default WagonList