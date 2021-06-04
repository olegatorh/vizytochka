import SimpleSlider from "../Carousel"
import {Footer} from "../Footer"
import {AboutUs} from "./AboutUs"
import {OurAdvantages} from "./OurAdvantages"
import {Contacts} from "../Contacts";


function MainPage() {
    return (
        <>
            <SimpleSlider/>
            <AboutUs/>
            <OurAdvantages/>
            <Contacts/>
            <Footer/>
        </>
    )
}

export default MainPage