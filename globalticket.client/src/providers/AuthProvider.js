import { useReducer } from "react"
import 'react-toastify/dist/ReactToastify.css';
import AuthContext from "../contexts/AuthContext"
import authReducer from "../reducers/authReducer"
import axios from "axios"
const initialState ={
    token: null,
    user: null
}


const LOGIN__ENDPOINT = 'http://localhost:5007/api/Users/login';
const LOGOUT_ENPOINT = 'http://localhost:5007/api/Users/logout'
const GET_USER_DETAILS='http://localhost:5007/api/Users/detail'
const PUSH_COMMENT='http://localhost:5007/api/Home/post-feedback'
const REGISTER = 'http://localhost:5007/api/Users/register';

const CHANGE_PASSWORD_SUCCESS_ENDPOINT = 'http://localhost:5007/api/Users/change-password-success';
const CHANGE_PASSWORD_FAIL_ENDPOINT = 'http://localhost:5007/api/Users/change-password-fail';

const SET_USER_DETAIL_SUCCESS_ENDPOINT = 'http://localhost:5007/api/Users/detail-set-success';
const SET_USER_DETAIL_FAIL_ENDPOINT = 'http://localhost:5007/api/Users/detail-set-fail';
export const AuthProvider = ({children}) =>{
    const[state,dispatch] = useReducer(authReducer, initialState)

    const login = async (Email,Password) =>{
        try {
            axios.defaults.headers.common['Accept']='application/json'
            const response = await axios.post(LOGIN__ENDPOINT,{Email,Password})
            if(response.status==200){
                let u = await setUsers(response.data.token,)
                dispatch({
                    type:'LOGIN',
                    token: response.data.token,
                    user: u
                })
                
            }
            return {
                status: response.status,
                message: response.data.message,
            }
        } catch (error) {
            console.log(error)
            return {
                status: 401,
                message: 'Network error!'
            }
        }
    }

    const signup = async (FirstName,LastName,Email,Password,Phone) =>{
        try {
            axios.defaults.headers.common['Accept']='application/json'
            const response = await axios.post(REGISTER ,{FirstName,LastName,Email,Password,Phone})
            if(response.status==200){
                let u = await setUsers(response.data.token)
                dispatch({
                    type:'LOGIN',
                    token: response.data.token,
                    user: u
                })
            }
            return {
                status: response.status,
                message: response.data.message,
            };
        } catch (error) {
            console.log(error)
            return {
                status: 401,
                message: error.data.message
            }
        }
    }

    const logout = async ()=>{
        axios.defaults.headers.common['Authorization']='Bearer '+state.token
        try{
            const response = await axios.post(LOGOUT_ENPOINT)
            if(response.status==200){
                dispatch({
                    type:'LOGOUT'
                })
                return {
                    status: response.status,
                    message: response.data.message
                }
            }
        }
        catch(error){
            return {
                status: 401,
                message: 'Network error!'
            }
        }
    }

    const setUsers = async(token)=>{
        try {
            axios.defaults.headers.common['Authorization']='Bearer '+token;
            let res = await axios.get(GET_USER_DETAILS)
            if(res.status==200){
                return {
                    id: res.data.userId,
                    email: res.data.email,
                    firstN: res.data.firstName,
                    lastN: res.data.lastName,
                    phone: res.data.phoneNumber
                }
            }
        }
        catch(error){
            console.log('Error setUser!')
        }
    }

    const sendComment = async(Rating,Comment)=>{
        try{
            axios.defaults.headers.common['Authorization']='Bearer '+state.token
            let res = await axios.post(PUSH_COMMENT,{Id:state.user.id,Rating,Comment})
            if(res.status==200){
                return {
                    message: res.data.message
                }
            }
        }
       catch(e){
            return {
                message: e.data.message
            }
       }
       
    }

    const getUser = ()=>{
        return state.user;
    }

    const isAuth = () =>{
        return state.token!=null;
    }

    const chnagePassword = async(oldPassword, newPassword) =>{
        try{
            axios.defaults.headers.common['Authorization']='Bearer '+state.token
            let res = await axios.post(CHANGE_PASSWORD_SUCCESS_ENDPOINT,{Id:state.user.id,oldPassword,newPassword})
            if(res.status==200){
                return {
                    status: 200,
                    message: res.data.message
                }
            }
        }
       catch(e){
            return {
                status: 401,
                message: e.data.message
            }
       }
    }

    const setUserDetail = async(gender,fullName, birthDate) =>{
        try{
            axios.defaults.headers.common['Authorization']='Bearer '+state.token
            let res = await axios.post(SET_USER_DETAIL_SUCCESS_ENDPOINT,{Id:state.user.id,gender,fullName, birthDate})
            if(res.status==200){
                return {
                    status: 200,
                    message: res.data.message
                }
            }
        }
       catch(e){
            return {
                status: 401,
                message: e.data.message
            }
       }
    }

    return<AuthContext.Provider value={{...state, login, signup, isAuth, logout, getUser, sendComment, chnagePassword, setUserDetail}}>
        {children}
    </AuthContext.Provider>
}