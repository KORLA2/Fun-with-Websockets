import React from 'react'
import styled from 'styled-components'
import Skribll from './Games/Skribll'
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import SkribllJoin from './SkribllJoin'
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));
function App() {

    const classes = useStyles();
  return (
    <Router>
      <Switch>
        <Route path="/SkribllJoin">
          <SkribllJoin/>
        </Route>
        <Route path="/Skribll">
          <Skribll />
        </Route>
        <Route path="/">
          <div>
            <Nav>Welcome To World of MultiPlayer Games</Nav>
          </div>
          <Body>
            <Paper className={classes.paper}>
              <div>
                <Link to="/SkribllJoin">Skribll</Link>
              </div>
              <div>
                <Link to="/Skribll">TowerDefense</Link>
              </div>
              <div>
                <Link to="/skribll">Paint Brush</Link>
              </div>
              <div>
                <Link to="/Skribll">Fish Game</Link>
              </div>
            </Paper>
          </Body>
        </Route>
      </Switch>
    </Router>
  );
}

export default App
let Nav = styled.div`
  height: 60px;
  background: radial-gradient(closest-side, #3f87a6, #ebf8e1, #f69d3c);
  text-align: center;
  font-size: 20px;
`;
let Body=styled.div`
background: radial-gradient(circle at center, #3f87a6, #ebf8e1, #f69d3c);
position:absolute;
top:60px;
width:100vw;
height:100vh;
  display:flex;
  flex-direction:column;
  div{
    height:200px;
  }

`