import {Container, makeStyles, Typography} from "@material-ui/core";

const useStyles = makeStyles({
    footer: {
        height: "50px",
        backgroundColor: "grey"
    }
});


export function Footer(){
    const classes = useStyles();
    return(
        <Container maxWidth={"xl"} className={classes.footer}>
            <Typography variant={"h6"} align={"center"}>copirated Website</Typography>
        </Container>
    )
}
