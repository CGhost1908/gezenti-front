
import LoginStyle from '../../pages/Login/Login.module.css'

export default function Topbar(){
    return(
        <div className={LoginStyle['topbar']}>
            <img src="/logo.png" alt="logo" className={LoginStyle['logo']} />
        </div>
    )
}