import {Carousel} from "../Carousel"
import {Footer} from "../Footer"
import {ProductList} from "./ProductList"
import {AboutProduct} from "./AboutProduct"


function SecondPage() {
    return (
        <>
            <Carousel/>
            <AboutProduct/>
            <ProductList/>
            <Footer/>
        </>

    )
}

export default SecondPage