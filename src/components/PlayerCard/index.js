import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


import PlayerInfo from "../PlayerInfo/index"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

export default function PlayerCard(props) {

  const classes = useStyles();

  const inchesToFeet = (inches, weight) => {

    var feet = Math.floor(inches / 12);
    inches %= 12;


  return <Typography variant="body2" gutterBottom style={{ color: "#1c4289" }}><strong>{feet}</strong> <em>ft</em> <strong>{inches}</strong> <em>in</em> | <strong>{weight}</strong> <em>lbs</em></Typography>
}

  return (
    <div className={classes.root}>
      <br></br>
        <Grid container spacing={2}>
        </Grid>

      <Paper className={classes.paper}>
        <Grid container spacing={4}>
          <Grid item>
 
            <img alt={props.firstName}
          src={props.image}
          //borderRadius style will help us make the Round Shape Image
          style={{ width: 90, height: 100, marginTop: "20%"}}
        />

          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" style={{ color: "#1c4289" }}>
                  <strong>{props.firstName} {props.lastName}</strong> - <em>{props.jerseyNum}</em> - <em>{props.position}</em>
                  <img src={props.logo} alt={props.logo} style={{ height: "50px", width: "50px", marginLeft: "10px", display: "flex", flexDirection: "right" }}></img>
                </Typography>
                <div style={{ height: "2px", width: "100%", backgroundColor: "#c80f2e", marginBottom: "5px" }}></div>
                
                  {inchesToFeet(props.height, props.weight)}
                <br></br>
                <PlayerInfo image={props.image} logo={props.logo} playerId={props.playerId}></PlayerInfo>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      <br></br>
    </div>
  );
}
