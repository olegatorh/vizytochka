import {Container, Grid, makeStyles, Typography} from "@material-ui/core";
import AnotherProductCard from "./AnotherProductCard";

const useStyles = makeStyles({
        ProductList: {
            marginBottom: "150px",
        },
    Typography: {
        fontFamily: "Comfortaa",
        marginBottom: 30
    }
    }
)

export default function ProductList() {
    const classes = useStyles()
    return (
        <Container className={classes.ProductList} >
            <Typography variant={"h4"}  align={"right"} className={classes.Typography}>Список Продукції</Typography>
            <Grid container direction="row" justify="space-around"   alignItems="baseline">
                <AnotherProductCard/>
                <AnotherProductCard/>
                <AnotherProductCard/>
                <AnotherProductCard/>
                <AnotherProductCard/>
                <AnotherProductCard/>
                <AnotherProductCard/>
                <AnotherProductCard/>
                <AnotherProductCard/>
                <AnotherProductCard/>
                <AnotherProductCard/>
                <AnotherProductCard/>
                <AnotherProductCard/>
                <AnotherProductCard/>
                <AnotherProductCard/>
                <AnotherProductCard/>
                <AnotherProductCard/>
                <AnotherProductCard/>
                <AnotherProductCard/>
                <AnotherProductCard/>
                <AnotherProductCard/>
                <AnotherProductCard/>
                <AnotherProductCard/>
                <AnotherProductCard/>
            </Grid>
            <hr />
        </Container>
    )
}