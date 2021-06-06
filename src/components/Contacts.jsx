import {Container, makeStyles, Typography} from "@material-ui/core";


const useStyles = makeStyles({
    Contacts: {
        marginBottom: "100px",

    }
});


export function Contacts(){
    const classes = useStyles();

    return(
        <Container width={"75%"} className={classes.Contacts}>
            <Typography variant={"h2"} align={"center"}>Contacts</Typography>

        </Container>
    )
}
