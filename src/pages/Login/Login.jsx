
import LoginStyle from './Login.module.css';
import Topbar from '../../components/Login/Topbar'
import LoginForm from '../../components/Login/LoginForm'
import Carousel from '../../components/Login/Carousel'

export default function Login(){
    return(
        <div className={LoginStyle['login-page']}>
            <Topbar />
            <div className={LoginStyle['content']}>
                <div className={LoginStyle['left-section']}>
                    <img className={LoginStyle['background']} src="/login.jpg" />
                    <Carousel
                        autoplay={true}
                        autoplayDelay={3000}
                        pauseOnHover={true}
                        loop={true}
                        round={false}
                    />
                    </div>
                <LoginForm />
            </div>
        </div>
    )
}