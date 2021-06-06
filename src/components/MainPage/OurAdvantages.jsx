import {CardContent, Container, Grid, makeStyles, Typography} from "@material-ui/core";


const useStyles = makeStyles({
    OurAdvantages: {
        marginBottom: "150px",
    },
    paper: {
        maxWidth: "50px"
    },
    Typography: {
        fontFamily: "Comfortaa"
    }
});


export function OurAdvantages() {
    const classes = useStyles();

    return (
        <Container width={"75%"} className={classes.OurAdvantages}>
            <Typography variant={"h4"} align={"left"} className={classes.Typography} style={{marginBottom: 20}}>Наші
                Переваги</Typography>
            <Grid container
                  direction="row"
                  justify="space-around"
                  alignItems="center">
                <CardContent>
                    <Typography gutterBottom className={classes.Typography}>
                        Вже давно відомо
                    </Typography>
                    <Typography variant="body2" component="p" className={classes.Typography}>
                        зміст буде заважати
                        <br/>
                        {'"зосередитись людині"'}
                    </Typography>
                </CardContent>
                <CardContent>
                    <Typography gutterBottom className={classes.Typography}>
                        Вже давно відомо
                    </Typography>
                    <Typography variant="body2" component="p" className={classes.Typography}>
                        зміст буде заважати
                        <br/>
                        {'"зосередитись людині"'}
                    </Typography>
                </CardContent>
                <CardContent>
                    <Typography gutterBottom className={classes.Typography}>
                        Вже давно відомо
                    </Typography>
                    <Typography variant="body2" component="p" className={classes.Typography}>
                        зміст буде заважати
                        <br/>
                        {'"зосередитись людині"'}
                    </Typography>
                </CardContent>
                <CardContent>
                    <Typography gutterBottom className={classes.Typography}>
                        Вже давно відомо
                    </Typography>
                    <Typography variant="body2" component="p" className={classes.Typography}>
                        зміст буде заважати
                        <br/>
                        {'"зосередитись людині"'}
                    </Typography>
                </CardContent>
                <CardContent>
                    <Typography gutterBottom className={classes.Typography}>
                        Вже давно відомо
                    </Typography>
                    <Typography variant="body2" component="p" className={classes.Typography}>
                        зміст буде заважати
                        <br/>
                        {'"зосередитись людині"'}
                    </Typography>
                </CardContent>
            </Grid>
            <hr style={{width:"75%"}}/>
        </Container>
    )
}
