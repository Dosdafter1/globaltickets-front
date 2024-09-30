import ApiBlock from './sectinons/api-block/ApiBlock'
import CommentBlock from './sectinons/comment-block/CommentBlock'
import './styles/HomeBody.css'
const HomeBody = () =>{
    return <div className='home-body'>
        <div>
            <CommentBlock/>
        </div>
        <div>
            <ApiBlock/>
        </div>
    </div>
}
export default HomeBody