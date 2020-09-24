import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

import API from "../../utils/API"

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}


export default function PlayerInfo(props) {
    const useStyles = makeStyles(theme => ({
        paper: {
            position: 'relative',
            width: "80%",
            height: "80%",
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
    }));

    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    const [playerBio, setPlayerBio] = useState([])

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        API.getSinglePlayer(props.playerId)
            .then(res => {
                setPlayerBio(res)
            })

    }, [])

    console.log(playerBio)
    return (
        <div>
            <Button style={{ backgroundColor: "#a30c25", color: "white" }} type="button" onClick={handleOpen}>
                More Info/Stats
      </Button>
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}
            >
                <div style={modalStyle} className={classes.paper}>
                    <div className="container">
                        {/* Row 1 */}
                        <div className="row">
                            <div className="col-3">
                                <img src={props.image} style={{ height: "100px", width: "100px" }}></img>
                            </div>

                            <div className="col-3">
                                <img src={props.logo} style={{ height: "100px", width: "100px" }}></img>
                            </div>
                        </div>

                        <p id="simple-modal-description">
                             mollis, est non commodo luctus, nisi erat porttitor ligula.
          </p>
                        <Button style={{ backgroundColor: "#1c4289", color: "white" }} type="button" onClick={handleClose}>
                            Close
      </Button>
                    </div>
                </div>
            </Modal>
        </div>
    );
}
