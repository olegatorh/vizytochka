import SimpleSlider from "../Carousel"
import {Footer} from "../Footer"
import {AboutUs} from "./AboutUs"
import {OurAdvantages} from "./OurAdvantages"
import {MapPoint} from "../MapPoint";


function MainPage() {
    return (
        <>
            <SimpleSlider/>
            <AboutUs/>
            <OurAdvantages/>
            <MapPoint/>
            <Footer/>
        </>
    )
}

export default MainPage