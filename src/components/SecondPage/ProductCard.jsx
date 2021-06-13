import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import mozarella from "../../assets/images/slide3.jpg"
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";
import CardDialogs from "../Dialog";


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        marginBottom: 25,
        fontFamily: 'Comfortaa',
        backgroundColor: "#F1F2F2"
    },
    media: {
        height: 140,
    },
    Typography: {
        fontFamily: "Comfortaa"
    }
});

export default function ProductCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={mozarella}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h7" component="h2" className={classes.Typography}>
                        Їда н еїда
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" className={classes.Typography}>
                        вцф в фцлдв фцв джлцфв бджфц вцфжбд вцфбджв бфдцжв бджфц вбджцф в
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" >
                    <CardDialogs/>
                </Button>
            </CardActions>
        </Card>
    );
}