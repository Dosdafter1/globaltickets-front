export const TYPES = {
    search: "SEARCH",
    clear: "CLEAR",
    setTrain: "SET_TRAIN",
    setTickets: "SET_TICKETS",
    setFreePlaces: "SET_FREE",
    setClientData: "SET_CLIENT_DATA",
    setSendData: "SET_SEND_DATA",
    changeClientData: "CHANGE_CLIENT_DATA",

}
export const initialState ={
    route: null,
    date: null,
    trainRoute: null,
    tickets: null,
    freePlaces: null,
    wagonType: null,
    wagonNumber:null,
    trainLineName: null,
    transportId: null,
    selectWagon: null,
    ticketTrainData: null,
    clientsData: [],
    sendData: null
}
export const ticketReducer = (state,{type,route, date, trainRoute,tickets, clientData,  sendData, freePlaces,wagonType, wagonNumber, trainLineName,transportId,selectWagon}) =>{
    switch(type) {
        case TYPES.search:  
            return {
                ...state,
                route: route,
                date: date,
            }
        case TYPES.setTrain: 
            return {
                ...state,
                trainRoute: trainRoute,
                wagonType: wagonType,
                trainLineName: trainLineName,
                transportId: transportId
            }
        case TYPES.setTickets:
            return {
                ...state,
                tickets: tickets,
                selectWagon: selectWagon,
                wagonNumber: wagonNumber
            }
        case TYPES.clear:
            return {
                ...state,
                route: null,
                date: null,
                trainRoute: null,
                freePlaces: null,
                wagonType: null,
                wagonNumber:null,
                trainLineName: null,
                transportId: null,
                clientData: [],
                sendData: null
            }
        case TYPES.setFreePlaces: 
            return {
                ...state,
                freePlaces
            }
        case TYPES.setClientData: 
            return {
                ...state,
                clientData: clientData
            }
        case TYPES.setSendData: 
            return {
                ...state,
                sendData
            }
        default:
            return state
    }
}