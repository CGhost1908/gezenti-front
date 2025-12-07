import HomeStyle from './Home.module.css';

import Topbar from '../../components/Home/Topbar'
import Sidebar from '../../components/Home/Sidebar'
import Map from '../../components/Home/Map'
import ChromaGrid from '../../components/Home/ChromaGrid'

export default function Home(){
    return(
        <div className={HomeStyle['home-page']}>
            <Topbar/>

            <img className={HomeStyle['home-background-image']} src="/background.jpg" />

            <Sidebar />

            <div className={HomeStyle['content']}>
                <Map />
                <ChromaGrid />
            </div>
        </div>
    )
}