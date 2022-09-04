import React,{useState} from 'react'
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import {Link} from 'react-router-dom'
import {Card, CardContent,Button} from '@material-ui/core' 
import SendIcon from '@material-ui/icons/Send';
function SkribllJoin({location}) {



    let [sweetname,setsweetname]=useState('');
    let [room,setroom]=useState('');
  return (
    <div>
      <div>
        <Nav>You are Now Playing Skribll</Nav>
      </div>

      <Body>
        <Card>
          <CardContent style={{ display: "flex", flexDirection: "column" }}>
            <TextField
              variant="outlined"
              label="Sweetname"
              InputProps={{
                type: "search",
              }}
              onChange={(event) => {
                setsweetname(event.target.value);
              }}
              style={{ margin: "10px" }}
            />
            <TextField
              variant="outlined"
              label="JoinID"
              InputProps={{
                type: "search",
              }}
              onChange={(event) => {
                setroom(event.target.value);
              }}
              style={{ margin: "10px" }}
            />
            <Link to={`/Skribll?name=${sweetname}&room=${room}`}>
              <Button variant="contained">
                JOIN
              </Button>
            </Link>
          </CardContent>
        </Card>
      </Body>
    </div>
  );
}

export default SkribllJoin
let Nav = styled.div`
  height: 60px;
  background: radial-gradient(closest-side, #3f87a6, #ebf8e1, #f69d3c);
  text-align: center;
  font-size: 20px;
`;
let Body = styled.div`
  background: radial-gradient(circle at center, #3f87a6, #ebf8e1, #f69d3c);
height:100vh;
width:100vw;
display:flex;
justify-content:center;
align-items:center
`;