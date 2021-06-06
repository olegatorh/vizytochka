import {CardContent, Container, Grid, makeStyles, Typography} from "@material-ui/core";


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
            <Grid container
                  direction="row"
                  justify="space-around"
                  alignItems="center">
                <CardContent>
                    <Typography gutterBottom>
                        Word of the Day
                    </Typography>
                    <Typography variant="body2" component="p">
                        well meaning and kindly.
                        <br/>
                        {'"a benevolent smile"'}
                    </Typography>
                </CardContent>
                <CardContent>
                    <Typography gutterBottom>
                        Word of the Day
                    </Typography>
                    <Typography variant="body2" component="p">
                        well meaning and kindly.
                        <br/>
                        {'"a benevolent smile"'}
                    </Typography>
                </CardContent>
                <CardContent>
                <Typography gutterBottom>
                    Word of the Day
                </Typography>
                <Typography variant="body2" component="p">
                    well meaning and kindly.
                    <br/>
                    {'"a benevolent smile"'}
                </Typography>
            </CardContent>
                <CardContent>
                    <Typography gutterBottom>
                        Word of the Day
                    </Typography>
                    <Typography variant="body2" component="p">
                        well meaning and kindly.
                        <br/>
                        {'"a benevolent smile"'}
                    </Typography>
                </CardContent>
                <CardContent>
                    <Typography gutterBottom>
                        Word of the Day
                    </Typography>
                    <Typography variant="body2" component="p">
                        well meaning and kindly.
                        <br/>
                        {'"a benevolent smile"'}
                    </Typography>
                </CardContent>
                <CardContent>
                    <Typography gutterBottom>
                        Word of the Day
                    </Typography>
                    <Typography variant="body2" component="p">
                        well meaning and kindly.
                        <br/>
                        {'"a benevolent smile"'}
                    </Typography>
                </CardContent>
                <CardContent>
                    <Typography gutterBottom>
                        Word of the Day
                    </Typography>
                    <Typography variant="body2" component="p">
                        well meaning and kindly.
                        <br/>
                        {'"a benevolent smile"'}
                    </Typography>
                </CardContent>
                <CardContent>
                    <Typography gutterBottom>
                        Word of the Day
                    </Typography>
                    <Typography variant="body2" component="p">
                        well meaning and kindly.
                        <br/>
                        {'"a benevolent smile"'}
                    </Typography>
                </CardContent>
                <CardContent>
                    <Typography gutterBottom>
                        Word of the Day
                    </Typography>
                    <Typography variant="body2" component="p">
                        well meaning and kindly.
                        <br/>
                        {'"a benevolent smile"'}
                    </Typography>
                </CardContent>
                <CardContent>
                    <Typography gutterBottom>
                        Word of the Day
                    </Typography>
                    <Typography variant="body2" component="p">
                        well meaning and kindly.
                        <br/>
                        {'"a benevolent smile"'}
                    </Typography>
                </CardContent><CardContent>
                <Typography gutterBottom>
                    Word of the Day
                </Typography>
                <Typography variant="body2" component="p">
                    well meaning and kindly.
                    <br/>
                    {'"a benevolent smile"'}
                </Typography>
            </CardContent>

            </Grid>
        </Container>
    )
}
