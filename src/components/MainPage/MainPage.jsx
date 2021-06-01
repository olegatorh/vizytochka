import {Carousel} from "../Carousel"
import {Footer} from "../Footer"
import {AboutUs} from "./AboutUs"
import {OurAdvantages} from "./OurAdvantages"
import {Grid, makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    Carousel: {
        background: "darkblue"
    },
    AboutUs: {
        background: "yellowgreen"
    },
    OurAdvantages: {
        background: "hotpink"
    },
    Footer: {
        background: "gold"
    },
}))



function MainPage() {
    const classes = useStyles()
    return (
        <Grid container direction="column" justify="center" >
            <Grid item className={classes.Carousel}>
                <Carousel/>
            </Grid>
            <Grid item className={classes.AboutUs}>
                <AboutUs/>
            </Grid>
            <Grid item className={classes.OurAdvantages}>
                <OurAdvantages/>
            </Grid>
            <Grid item className={classes.Footer}>
                <Footer/>
            </Grid>

        </Grid>

    )
}

export default MainPage