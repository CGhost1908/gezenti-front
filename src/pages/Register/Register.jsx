
import RegisterStyle from './Register.module.css';
import Topbar from '../../components/Register/Topbar'
import RegisterForm from '../../components/Register/RegisterForm'
import Carousel from '../../components/Register/Carousel'

export default function Register(){
    return(
        <div className={RegisterStyle['register-page']}>
            <Topbar />
            <div className={RegisterStyle['content']}>
                <div className={RegisterStyle['left-section']}>
                    <img className={RegisterStyle['background']} src="/register.jpg" />
                    <Carousel
                        autoplay={true}
                        autoplayDelay={3000}
                        pauseOnHover={true}
                        loop={true}
                        round={false}
                    />
                    </div>
                <RegisterForm />
            </div>
        </div>
    )
}