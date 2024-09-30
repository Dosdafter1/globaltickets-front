import { Rate } from "antd"
import './styles/Comment.css'
const Comment = ({name, rate, text}) =>{
    return <div className="comment">
        <div className="comment-head">
            <p>{name}</p>
            <Rate className="rate-bar" disabled defaultValue={rate}/>
        </div>
        <div className="comment-body">
            <p>{text}</p>
        </div>
    </div>
}
export default Comment