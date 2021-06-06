import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from "@material-ui/core";

const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
        fontFamily: "Comfortaa"
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },


});

const useStyles = makeStyles({
    Typography: {
        fontFamily: "Comfortaa"
    }
})

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);



export default function CardDialogs() {
    const classes = useStyles()
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div >
            <Button variant="outlined" style={{fontFamily: "Comfortaa", textTransform: "none"}} color="#231F20" onClick={handleClickOpen}>
                Читати більше...
            </Button>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} >
                <DialogTitle id="customized-dialog-title" onClose={handleClose} >
                    <Typography variant={"h5"} className={classes.Typography}>Борщ</Typography>
                </DialogTitle>
                <DialogContent dividers >
                    <Typography gutterBottom className={classes.Typography}>
                        Різні версії Lorem Ipsum з'явились за минулі роки, деякі випадково,
                        деякі було створено зумисно (зокрема, жартівливі).
                    </Typography>
                    <Typography gutterBottom className={classes.Typography}>
                        "Тут іде текст. Тут іде текст." Це робить текст схожим на опо
                        відний. Багато програм верстування та веб-дизайну викори
                        стовують Lorem Ipsum як зразок і пошук за терміном "lorem ipsum" відкриє б
                        агато веб-сайтів, які знаходяться ще в зародковому стані.
                    </Typography>
                </DialogContent>
            </Dialog>
        </div>
    );
}