import { Icon } from '@iconify/react'
import HomeStyle from '../../pages/Home/Home.module.css'

export default function Topbar(){
    return(
        <div className={HomeStyle['topbar']}>
            <img src="/logo.png" alt="logo" className={HomeStyle['home-logo']} />

            <div className={HomeStyle['button-bar']}>
                <a href="/" className={HomeStyle['topbar-button'] + ' ' + HomeStyle['active']}>Anasayfa</a>
                <a href="/explore" className={HomeStyle['topbar-button']}>Keşfet</a>
                <a href="/map" className={HomeStyle['topbar-button']}>Harita</a>
                <a href="/guides" className={HomeStyle['topbar-button']}>Rehberler</a>
                <a href="/contact" className={HomeStyle['topbar-button']}>İletişim</a>
            </div>

            <div className={HomeStyle['user-button-bar']}>
                <a className={HomeStyle['topbar-user-button']} href="/login">
                    Giriş Yap
                </a>

                <div className={HomeStyle['user-button-bar-seperator']}></div>

                <a className={HomeStyle['topbar-user-button'] + ' ' + HomeStyle['signup-button']} href="/signup">
                    Kayıt Ol
                </a>
            </div>
        </div>
    )
}
