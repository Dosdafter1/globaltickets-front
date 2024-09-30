import AdBlock from "../ad/AdBlock"
import CommentsBlock from "../comments/CommentsBlock"
import TipsBlock from "../tips/TipsBlock"
import Tips2 from "../tips2/Tips2"
import CommentForm from '../comments/comment-from/CommentForm'
import { useContext } from 'react';
import AuthContext from '../../../contexts/AuthContext';
import PopularRoute from "../popular/PopularRoute"
import Tips3 from "../tips3/Tips3"
const HomeAirlineMain = () => {
    const {isAuth} = useContext(AuthContext)
    return <>
        <TipsBlock/>
        <AdBlock type="air"/>
        <Tips2/>
        <Tips3/>
        <CommentsBlock/>
        {isAuth()?<CommentForm/>:<></>}
    </>
}
export default HomeAirlineMain