import {Footer} from "../Footer"
import {Container} from "@material-ui/core";
import {ProductList} from "./ProductList";


function SecondPage() {
    return (
        <Container maxWidth={"false"} style={{padding: 0}}>
            <ProductList/>
            <Footer/>
        </Container>

    )
}

export default SecondPage