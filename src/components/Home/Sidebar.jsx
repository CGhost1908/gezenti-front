import HomeStyle from '../../pages/Home/Home.module.css'

export default function Sidebar(){
    return(
        <div className={HomeStyle['left-panel']}>
            <ul className={HomeStyle['category-list']}>
                <li className={HomeStyle['category-item'] + ' ' + HomeStyle['active']}>
                    <span className={HomeStyle['category-icon']}>🌿</span>
                    <span>Doğa</span>
                </li>
                <li className={HomeStyle['category-item']}>
                    <span className={HomeStyle['category-icon']}>🏛️</span>
                    <span>Tarih</span>
                </li>
                <li className={HomeStyle['category-item']}>
                    <span className={HomeStyle['category-icon']}>⛹️</span>
                    <span>Spor</span>
                </li>
                <li className={HomeStyle['category-item']}>
                    <span className={HomeStyle['category-icon']}>🍽️</span>
                    <span>Yemek</span>
                </li>
                <li className={HomeStyle['category-item']}>
                    <span className={HomeStyle['category-icon']}>🎭</span>
                    <span>Sanat</span>
                </li>
                <li className={HomeStyle['category-item']}>
                    <span className={HomeStyle['category-icon']}>🏖️</span>
                    <span>Deniz</span>
                </li>
            </ul>

            <div className={HomeStyle['price-filter']}>
                <h4>Bütçe Aralığı</h4>
                <div className={HomeStyle['price-range']}>
                    <input type="number" placeholder="Min" defaultValue="0"/>
                    <input type="number" placeholder="Max" defaultValue="5000"/>
                </div>
            </div>
        </div>
    )
}
