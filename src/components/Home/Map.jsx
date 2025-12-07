
import HomeStyle from '../../pages/Home/Home.module.css'

export default function Map(){
    return(
        <iframe
            className={HomeStyle['map']}
            frameborder="0" 
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyB2NIWI3Tv9iDPrlnowr_0ZqZWoAQydKJU&q=Ke%C5%9Fan%2C%20Edirne%2C%20T%C3%BCrkiye&maptype=roadmap" 
            allowfullscreen>
        </iframe>
    )
}