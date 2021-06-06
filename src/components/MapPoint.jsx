import {Container, Grid, makeStyles, Typography} from "@material-ui/core";


const useStyles = makeStyles({
    MapPoint: {
        marginBottom: "100px",

    }
});


export function MapPoint(){
    const classes = useStyles();

    return(
        <Container width={"75%"} className={classes.MapPoint}>
            <Typography variant={"h2"} align={"center"}>We on Map</Typography>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1233.2965685601193!2d19.969167828965556!3d51.813594498441056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471bd7d8076ab53b%3A0xcf69d7d1eeaf2d59!2sRoma%20sp.j.%20Sklep%20spo%C5%BCywczo%20-%20przemys%C5%82owy!5e0!3m2!1suk!2sua!4v1622804339079!5m2!1suk!2sua"
                width="100%" height="450" style={{border:0}} allowFullScreen="" title={"we are here"} loading="lazy"/>
            <Grid  container direction="row" justify="space-between"  alignItems="flex-start">
                <Typography variant={"h6"} align={"Left"}>price: +839173128779</Typography>
                <Typography variant={"h6"} align={"right"}>director: +78976545678</Typography>
            </Grid>

        </Container>
    )
}
