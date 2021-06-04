import {Container, makeStyles} from "@material-ui/core";


const useStyles = makeStyles({
    Contacts: {
        background: "cornflowerblue",
        marginBottom: "100px",

    }
});


export function Contacts(){
    const classes = useStyles();

    return(
        <Container width={"75%"} className={classes.Contacts}>
            "Contacts"
        </Container>
    )
}
