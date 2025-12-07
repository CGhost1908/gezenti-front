import React, { useState } from 'react';
import LoginStyle from '../../pages/Login/Login.module.css'
import { Icon } from '@iconify/react';

export default function LoginForm(){

    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const togglePassword = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form gönderildi:', { email, password });
    };

    return(
        <div className={LoginStyle['login-form']}>

            <div className={LoginStyle['header-section']}>
                <h1>Tekrar Hoş Geldiniz</h1>
                <p>Hesabınıza giriş yapmak için bilgilerinizi girin.</p>
            </div>

            <form onSubmit={handleSubmit}>

                <div className={LoginStyle['form-group']}>
                    <label className={LoginStyle['form-label']}>Email Adresi</label>

                    <div className={LoginStyle['input-wrapper']}>
                        <input 
                        type="email"
                        className={LoginStyle['form-input']}
                        placeholder="ornek@email.com"
                        value={email}
                        required
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                </div>

                <div className={LoginStyle['form-group']}>
                    <label className={LoginStyle['form-label']}>Şifre</label>

                    <div className={LoginStyle['input-wrapper']}>
                        <input 
                        type={showPassword ? "text" : "password"}
                        className={LoginStyle['form-input']}
                        placeholder="••••••••••••"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                        />

                        <button 
                        type="button"
                        className={LoginStyle['password-toggle']}
                        onClick={togglePassword}
                        aria-label={showPassword ? "Şifreyi gizle" : "Şifreyi göster"}
                        >
                            <Icon icon={`solar:${showPassword ? 'eye-bold' : 'eye-broken'}`} width="24" height="24" />
                        </button>
                    </div>
                </div>

                <div className={LoginStyle['form-actions']}>
                    <label className={LoginStyle['checkbox-container']}>
                        <input type="checkbox" />
                        Beni Hatırla
                    </label>
                    <a href="#" className={LoginStyle['forgot-password']}>Şifremi Unuttum?</a>
                </div>

                <button type="submit" className={LoginStyle['btn-primary']}>
                    Giriş Yap
                </button>
            </form>

            <div className={LoginStyle['divider']}>
                <span>veya şununla devam et</span>
            </div>

            <div className={LoginStyle['social-grid']}>

                <button type="button" className={`${LoginStyle['social-btn']} ${LoginStyle['btn-google']}`}>
                    <Icon icon="devicon:google" width="24" height="24" />
                </button>

                <button type="button" className={`${LoginStyle['social-btn']} ${LoginStyle['btn-facebook']}`}>
                    <Icon icon="ri:facebook-fill" width="24" height="24" />
                </button>

                <button type="button" className={`${LoginStyle['social-btn']} ${LoginStyle['btn-instagram']}`}>
                    <Icon icon="mdi:instagram" width="24" height="24" />
                </button>

            </div>

            <p className={LoginStyle['footer-text']}>
                Hesabın yok mu? <a href="/register">Hemen Kayıt Ol</a>
            </p>

        </div>
    )
}
