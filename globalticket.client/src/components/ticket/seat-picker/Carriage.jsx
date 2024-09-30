import './styles/Carriage.css'
const Carriage = ({number, freePlaces, active, setActive, seats, setCarriageSeats, id, setWagonNumber, setBookedSeats})=>{
    const handle = () =>{
        setActive(id)
        setCarriageSeats(seats)
        setWagonNumber(number)
        setBookedSeats([])
    }
    /*'carriage-block'*/ 
    return <div onClick={handle} className={active==id?'carriage-block select-carriage':'carriage-block not-select-carriage'}>
        <div><p className='carriage-number'>{number}</p></div>
        <div></div>
        <div><p className='carriage-free-places'>{freePlaces}</p></div>   
        <div className='carriage-divider'></div>
    </div>
}
export default Carriage