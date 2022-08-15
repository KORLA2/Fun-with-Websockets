import React from 'react'
import styled from 'styled-components'
import Skribll from './Games/Skribll'

import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom'
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/Skribll">
          <Skribll />
        </Route>
        <Route path="*">
          <div>
            <Nav>Welcome To World of Normal Games</Nav>
          </div>
          <Body>
            <div>
              <Link to="/Skribll">Skribll</Link>
            </div>
            <div>
              <Link to="/Skribll">Skribll</Link>
            </div>
          </Body>
        </Route>
      </Switch>
    </Router>
  );
}

export default App
let Nav=styled.div`
height:60px;
background:blue;
text-align: center;
font-size:20px;
`
let Body=styled.div`
background:green;
height:100vh;
position:absolute;
top:60px;
width:100vw;

  display:flex;
  flex-direction:column;
  div{
    height:200px;
  }

`