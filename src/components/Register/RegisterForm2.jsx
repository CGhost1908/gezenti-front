import React, { useState } from 'react';
import RegisterStyle from '../../pages/Register/Register.module.css'
import { Icon } from '@iconify/react';

export default function RegisterForm(){
    return(
        <div className={RegisterStyle['register-form']}>

            <div className={RegisterStyle['header-section']}>
                <h1>Gezentiye Hoş Geldiniz</h1>
                <p>Eşşsiz mekanları, doğa harikalarını keşfedin.</p>
            </div>

            <form onSubmit={handleSubmit}>
                
                <div className={RegisterStyle['form-group']}>
                    <label className={RegisterStyle['form-label']}>Ad Soyad</label>

                    <div style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
                        <div className={RegisterStyle['input-wrapper']} style={{width: 'calc(50% - 5px)'}}>
                            <input 
                            type="text"
                            className={RegisterStyle['form-input']}
                            placeholder="Adınızı girin"
                            onChange={(e) => setName(e.target.value)}
                            />
                        </div>

                        <div className={RegisterStyle['input-wrapper']} style={{width: 'calc(50% - 5px)'}}>
                            <input 
                            type="text"
                            className={RegisterStyle['form-input']}
                            placeholder="Soyadınızı girin"
                            onChange={(e) => setSurname(e.target.value)}
                            />
                        </div>
                    </div>
                </div>

                <button type="submit" className={RegisterStyle['btn-primary']}>Devam Et</button>
            </form>

            <div className={RegisterStyle['divider']}>
                <span>veya şununla devam et</span>
            </div>

            <div className={RegisterStyle['social-grid']}>

                <button type="button" className={`${RegisterStyle['social-btn']} ${RegisterStyle['btn-google']}`}>
                    <Icon icon="devicon:google" width="24" height="24" />
                </button>

                <button type="button" className={`${RegisterStyle['social-btn']} ${RegisterStyle['btn-facebook']}`}>
                    <Icon icon="ri:facebook-fill" width="24" height="24" />
                </button>

                <button type="button" className={`${RegisterStyle['social-btn']} ${RegisterStyle['btn-instagram']}`}>
                    <Icon icon="mdi:instagram" width="24" height="24" />
                </button>

            </div>

            <p className={RegisterStyle['footer-text']}>
                Zaten hesabın var mı? <a href="/login">Hemen Giriş Yap</a>
            </p>

        </div>
    )
}
