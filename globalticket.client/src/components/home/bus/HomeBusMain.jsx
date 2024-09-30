import AdBlock from "../ad/AdBlock"
import CommentsBlock from "../comments/CommentsBlock"
import TipsBlock from "../tips/TipsBlock"
import Tips2 from "../tips2/Tips2"
import CommentForm from '../comments/comment-from/CommentForm'
import { useContext } from 'react';
import AuthContext from '../../../contexts/AuthContext';
import PopularRoute from "../popular/PopularRoute"
const HomeBusMain = ({setPoints}) =>{
    const {isAuth} = useContext(AuthContext)
    return <>
        <TipsBlock/>
        <AdBlock type="bus"/>
        <Tips2/>
        <PopularRoute setPoints={setPoints} isBus={true}/>
        <CommentsBlock/>
        {isAuth()?<CommentForm/>:<></>}
    </>
}   
export default HomeBusMain