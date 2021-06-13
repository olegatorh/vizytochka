import {Container, Grid, makeStyles, Typography} from "@material-ui/core";
import ProductCard from "./ProductCard";


const useStyles = makeStyles({
        ProductList: {
            marginBottom: "150px",
            marginTop: "30px"
        },
        Typography: {
            fontFamily: "Comfortaa",
            marginBottom: 30
        }
    }
)

export function ProductList(){
    const classes = useStyles()
    return(
        <Container className={classes.ProductList} >
            <Typography variant={"h4"}  align={"right"} className={classes.Typography}>Список Товарів</Typography>
            <Grid container direction="row" justify="space-around"   alignItems="baseline">
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </Grid>
            <hr />
        </Container>
    )
}
