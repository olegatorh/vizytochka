import {Container, makeStyles, Typography} from "@material-ui/core";


const useStyles = makeStyles({
    AboutUs: {
        marginBottom: "150px"
    },
    Typography: {
        fontFamily: "Comfortaa"
    }
});

export function AboutUs() {
    const classes = useStyles();

    return (
        <Container width={"75%"} className={classes.AboutUs}>

            <Typography variant={"h4"} align={"right"} className={classes.Typography} style={{marginBottom: 20}}>Про
                нас</Typography>
            <Typography variant={"h6"} align={"space-around"} className={classes.Typography}> Lorem Ipsum is simply
                Вже давно відомо, що читабельний зміст буде заважати зосередитись
                людині, яка оцінює композицію сторінки. Сенс використання Lorem Ipsum полягає в
                у використовують Lorem Ipsum як зразок і пошук за терміном "lorem ipsum" відкриє багато веб-сайтів, які знаходяться ще в зародковому
                стані. Різні версії Lorem Ipsum з'явились за минулі роки, деякі випадково, деякі було створено зумисно (зокрема, жартівливі).
            </Typography>
            <hr style={{width:"50%"}} />
        </Container>
    )
}
