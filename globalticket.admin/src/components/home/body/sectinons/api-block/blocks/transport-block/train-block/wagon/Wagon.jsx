import { useState } from 'react'
import './styles/Wagon.css'
import DeleteOutlined from '@ant-design/icons/DeleteOutlined'
const Wagon = ({type, price, count, index,dispatch,selectWagonId,setSelectWagonId,setSelectWagon}) =>{
    const handleButtonClick = () =>{
        dispatch({
            type:'DELETE',
            index
        })
    }
    const handleElementClick = () =>{
        setSelectWagon({type,price,seats:count})
        setSelectWagonId(index)
    }
    let typeText =''
    switch(Number(type)){
        case 1:
            typeText='Плацкарт Економ'
            break;
        case 2:
            typeText='Сидячий 1-й класс'
            break;
        case 3:
            typeText='Сидячий 2-й класс'
            break;
        default:
            typeText=''
            break
    }
    return <div className={selectWagonId==index?'wagon select-element':'wagon not-select-element'}>
        <p onClick={handleElementClick}>{typeText}</p>
        <p onClick={handleElementClick}>{price}</p>
        <p onClick={handleElementClick}>{count}</p>
        <button onClick={handleButtonClick}><DeleteOutlined /></button>
    </div>
}
export default Wagon