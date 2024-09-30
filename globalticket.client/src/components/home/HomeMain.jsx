import TipsBlock from './tips/TipsBlock'
import AdBlock from './ad/AdBlock';
import Tips2 from './tips2/Tips2';
import PopularRoute from './popular/PopularRoute';
import CommentsBlock from './comments/CommentsBlock'
import CommentForm from './comments/comment-from/CommentForm';
import { useState, useContext } from 'react';
import AuthContext from '../../contexts/AuthContext';
const HomeMain = ({setPoints})=>{
    const {isAuth} = useContext(AuthContext)
    return<>
        <TipsBlock/>
        <AdBlock type={"train"}/>
        <Tips2/>
        <PopularRoute setPoints={setPoints}/>
        <CommentsBlock/>
        {isAuth()?<CommentForm/>:<></>}
    </>
}
export default HomeMain