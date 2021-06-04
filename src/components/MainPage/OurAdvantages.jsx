import {Container, Grid, makeStyles, Paper, Typography} from "@material-ui/core";


const useStyles = makeStyles({
    OurAdvantages: {
        marginBottom: "100px",


    },
    paper: {
        maxWidth: "50px"
    }
});


export function OurAdvantages() {
    const classes = useStyles();

    return (
        <Container width={"75%"} className={classes.OurAdvantages}>
            <Typography variant={"h2"} align={"center"}>Our Advantages</Typography>
            <Grid   container
                    direction="row"
                    justify="space-around"
                    alignItems="center">
                <Paper variant="outlined" elevation={3} className={classes.paper} >dwadw ahjkjbhkjl kjbnlnmdmkkkk kkkkkkkk kdwad</Paper>
                <Paper variant="outlined" elevation={3} className={classes.paper} >dwadwadwad dwadw ahjkjbhkjl kjbnlnmdmkkkk kkkkkkkk</Paper>
                <Paper variant="outlined" elevation={3} className={classes.paper} >dwadwadwadvdwadw ahjkjbhkjl kjbnlnmdmkkkk kkkkkkkk</Paper>
                <Paper variant="outlined" elevation={3} className={classes.paper} >dwadwadwaddwadw ahjk jbhkjl kjbnln mdmkkkk kkk kkkkk</Paper>
            </Grid>
        </Container>
    )
}
