import {Container, Grid, makeStyles, Typography} from "@material-ui/core";

const useStyles = makeStyles({
    footer: {
        height: "60",
    },
    Typography: {
        fontFamily: "Comfortaa",
    }
});


export function Footer() {
    const classes = useStyles();
    return (
        <Container maxWidth={"xl"} className={classes.footer}>
            <hr/>
            <Grid container direction="row"
                  justify="space-between">
                <Grid item> <Typography variant={"h6"} className={classes.Typography}>номерше1:
                    +839173128779</Typography>
                </Grid>
                <Grid item><Typography variant={"h6"} className={classes.Typography}>номер1:
                    +78976545678</Typography></Grid>
            </Grid>
            <Typography variant={"h5"} align={"center"} className={classes.Typography}>Якась Компанія</Typography>
        </Container>
    )
}
