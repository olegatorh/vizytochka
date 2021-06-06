import SimpleSlider from "../Carousel"
import {Footer} from "../Footer"
import {AboutUs} from "./AboutUs"
import {OurAdvantages} from "./OurAdvantages"
import {MapPoint} from "../MapPoint";
import {Container} from "@material-ui/core";
import ProductList from "../ProductList";

function MainPage() {
    return (
            <Container maxWidth={"false"} style={{padding: 0,}} >
                <SimpleSlider/>
                <AboutUs/>
                <OurAdvantages/>
                <ProductList/>
                <MapPoint/>
                <Footer/>
            </Container>
    )
}

export default MainPage