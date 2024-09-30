import HomeBody from './body/HomeBody';
import './styles/Home.css'
import UserHead from './user-head/UserHead';
const Home = () =>{
    return <div className='home'>
        <UserHead/>
        <HomeBody/>
    </div>
}
export default Home;