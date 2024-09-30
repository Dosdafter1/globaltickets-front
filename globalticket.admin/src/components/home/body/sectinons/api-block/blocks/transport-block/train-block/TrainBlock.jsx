import { useReducer, useState } from 'react'
import TrainForm from '../../../forms/transport-form/train-form/TrainForm'
import './styles/TrainBlock.css'
import WagonList from './wagon/WagonList'
import { initialStateWagon, wagonReducer } from '../../../../../../../../reducers/wagon-reducer/wagonReducer'
const TrainBlock = () =>{
    const [state, dispatch] = useReducer(wagonReducer,initialStateWagon)
    const [selectWagon, setSelectWagon] = useState(null);
    const [selectWagonId, setSelectWagonId] = useState(-1);
    return <div className='train-block'>
        <TrainForm dispatch={dispatch} selectWagonId={selectWagonId} selectWagon={selectWagon} setSelectWagon={setSelectWagon} setSelectWagonId={setSelectWagonId}/>
        <div>
            <WagonList wagons={state.wagons} 
                        dispatch={dispatch} 
                        setSelectWagon={setSelectWagon} 
                        setSelectWagonId={setSelectWagonId}
                        selectWagonId={selectWagonId}
                        />
        </div>
    </div>
}
export default TrainBlock