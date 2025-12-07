import React, { useState } from 'react';
import RegisterStyle from '../../pages/Register/Register.module.css'
import Stepper, { Step } from './Stepper';
import Interest from './Interest';
import { Icon } from '@iconify/react';

export default function RegisterForm(){

    const [showPassword, setShowPassword] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, repeatPassword] = useState('');

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [username, setUsername] = useState('');
    const [birthDate, setBirthDate] = useState('');

    const togglePassword = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form gönderildi:', { email, password, password2, name, surname, username, birthDate });
    };

    const [step, setStep] = useState(1);

    const isStep1Valid =
        email.trim() !== '' &&
        password.trim() !== '' &&
        password.trim() === password2.trim();


    const isStep2Valid =
        name?.trim() !== '' &&
        surname?.trim() !== '' &&
        username?.trim() !== '' &&
        birthDate?.trim() !== '';

    const canContinue =
        (step === 1 && isStep1Valid) ||
        (step === 2 && isStep2Valid) ||
        step > 2;


    return(
        <div className={RegisterStyle['register-form']}>
            <Stepper
            initialStep={1}
            onStepChange={setStep}
            nextButtonProps={{
                disabled: !canContinue
            }}
            onFinalStepCompleted={() => console.log("All steps completed!")}
            backButtonText="Önceki"
            nextButtonText="Sonraki"
            >
                <Step>
                    <div className={RegisterStyle['header-section']}>
                        <h1>Gezentiye Hoş Geldiniz</h1>
                        <p>Eşşsiz mekanları, doğa harikalarını keşfedin.</p>
                    </div>
                    <div className={RegisterStyle['form-group']}>
                        <label className={RegisterStyle['form-label']}>Email Adresi</label>

                        <div className={RegisterStyle['input-wrapper']}>
                            <input 
                            type="email"
                            className={RegisterStyle['form-input']}
                            placeholder="ornek@email.com"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className={RegisterStyle['form-group']}>
                        <label className={RegisterStyle['form-label']}>Şifre</label>

                        <div className={RegisterStyle['input-wrapper']}>
                            <input 
                            type={showPassword ? "text" : "password"}
                            className={RegisterStyle['form-input']}
                            placeholder="••••••••••••"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            />

                            <button 
                            type="button"
                            className={RegisterStyle['password-toggle']}
                            onClick={togglePassword}
                            aria-label={showPassword ? "Şifreyi gizle" : "Şifreyi göster"}
                            >
                                <Icon icon={`solar:${showPassword ? 'eye-bold' : 'eye-broken'}`} width="24" height="24" />
                            </button>
                        </div>
                    </div>

                    <div className={RegisterStyle['form-group']}>
                        <label className={RegisterStyle['form-label']}>Şifre Tekrar</label>

                        <div className={RegisterStyle['input-wrapper']}>
                            <input 
                            type={showPassword ? "text" : "password"}
                            className={RegisterStyle['form-input']}
                            placeholder="••••••••••••"
                            required
                            value={password2}
                            onChange={(e) => repeatPassword(e.target.value)}
                            />

                            <button 
                            type="button"
                            className={RegisterStyle['password-toggle']}
                            onClick={togglePassword}
                            aria-label={showPassword ? "Şifreyi gizle" : "Şifreyi göster"}
                            >
                                <Icon icon={`solar:${showPassword ? 'eye-bold' : 'eye-broken'}`} width="24" height="24" />
                            </button>
                        </div>
                    </div>

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
                </Step>
                <Step>
                    <div className={RegisterStyle['header-section']}>
                        <h1>Gezentiye Hoş Geldiniz</h1>
                        <p>Eşşsiz mekanları, doğa harikalarını keşfedin.</p>
                    </div>
        
                    <div className={RegisterStyle['form-group']}>
                        <label className={RegisterStyle['form-label']}>Ad Soyad</label>
    
                        <div style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
                            <div className={RegisterStyle['input-wrapper']} style={{width: 'calc(50% - 5px)'}}>
                                <input 
                                type="text"
                                className={RegisterStyle['form-input']}
                                placeholder="Adınızı girin"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                />
                            </div>
    
                            <div className={RegisterStyle['input-wrapper']} style={{width: 'calc(50% - 5px)'}}>
                                <input 
                                type="text"
                                className={RegisterStyle['form-input']}
                                placeholder="Soyadınızı girin"
                                value={surname}
                                onChange={(e) => setSurname(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={RegisterStyle['form-group']}>
                        <label className={RegisterStyle['form-label']}>Kullanıcı Adı</label>

                        <div className={RegisterStyle['input-wrapper']}>
                            <input 
                            type="text"
                            className={RegisterStyle['form-input']}
                            placeholder="Kendinize benzersiz biz kullanıcı adı seçin"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className={RegisterStyle['form-group']}>
                        <label className={RegisterStyle['form-label']}>Doğum Tarihi</label>

                        <div className={RegisterStyle['input-wrapper']}>
                            <input 
                            type="date"
                            className={RegisterStyle['form-input']}
                            value={birthDate}
                            onChange={(e) => setBirthDate(e.target.value)}
                            />
                        </div>
                    </div>
                </Step>
                <Step>
                    <div className={RegisterStyle['header-section']} style={{margin: '0'}}>
                        <h1>İlgi Alanlarınızı Seçin</h1>
                        <p>Rotanızı zevklerinize göre ayarlayın.</p>
                    </div>
                        <Interest />
                </Step>
                <Step>
                    <div className={RegisterStyle['header-section']} style={{margin: '0'}}>
                        <h1>Tüm adımları tamamladınız.</h1>
                        <p>Harika! Artık Gezenti dünyasına katılmaya hazırsınız.</p>
                    </div>
                </Step>
            </Stepper>
        </div>
    )
}
