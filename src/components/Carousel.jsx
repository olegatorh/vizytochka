import React from "react";
import Slider from "react-slick";
import {Container, makeStyles} from "@material-ui/core";

import slider1 from "../assets/images/slide1.jpg"
import slider2 from "../assets/images/slide2.jpg"
import slider3 from "../assets/images/slide3.jpg"



const useStyles = makeStyles({
    Carousel: {
        marginBottom: "60px",
        margin: "0px",
        padding: "0px",
        maxWidth: "100%",
        width: "100%"
    }
});


export default function SimpleSlider() {
    const classes = useStyles();

    const settings = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }
    return (
        <Container  className={classes.Carousel}>
            <Slider {...settings}>
                <div>
                    <img src={slider1} style={{maxHeight: "600px", maxWidth: "1920px"}} alt={"food"}/>
                </div>
                <div>
                    <img src={slider2} style={{maxHeight: "600px", maxWidth: "1920px"}} alt={"food"}/>
                </div>
                <div>
                    <img src={slider3} style={{maxHeight: "600px", maxWidth: "1920px"}} alt={"food"}/>
                </div>
            </Slider>
        </Container>
    )
        ;
}
