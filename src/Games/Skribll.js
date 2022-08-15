import styled from 'styled-components'
import React ,{useState}from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Draw from '../Draw.js'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    height:'300px',
    color: theme.palette.text.secondary,
  },
}));

export default function FullWidthGrid() {
let [size,setsize]=useState(0);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper}>People</Paper>
        </Grid>
        <Grid onMouseMove={(e)=>{setsize(e.target.clientWidth)}}  item xs={12} sm={6}>
          <Paper className={classes.paper}>
               <Draw size={size}/>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper}>Chat</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>Video Chat</Paper>
        </Grid>
      </Grid>
    </div>
  );
}
