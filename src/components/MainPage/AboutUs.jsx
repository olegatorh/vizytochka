import {Container, makeStyles, Typography} from "@material-ui/core";


const useStyles = makeStyles({
    AboutUs: {
        marginBottom: "100px",

    }
});

export function AboutUs() {
    const classes = useStyles();

    return (
        <Container width={"75%"} className={classes.AboutUs}>
            <Typography variant={"h2"} align={"center"}> About Company</Typography>
            <Typography variant={"h5"} align={"space-around"}> Lorem Ipsum is simply dummy text of the pri
                nting and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a typ
                e specimen book. It has survived not only five centuries, but also the leap into electronic typesettin
                g, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
                conta
                ining Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
                PageMaker including versions of Lorem Ipsum.</Typography>

        </Container>
    )
}
