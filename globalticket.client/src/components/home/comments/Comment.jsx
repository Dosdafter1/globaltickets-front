import { Rate } from 'antd'
import './styles/CommentsBlock.css'
const Comment = ({name, avatar,rate,text}) =>{
    return <div className='comment-block'>
        <div className='comment-avatar'>
            <img src={avatar} alt="" />
        </div>
        <div className='comment-box'>
            <div className='comment-box-title'>
                <p>{name}</p>
                <Rate className='rate-bar rate-bar-margin' disabled size='small' allowHalf value={rate}/>
            </div>
            <div className='comment-box-body'>
                <p>{text}</p>
            </div>
        </div>
    </div>
}
export default Comment