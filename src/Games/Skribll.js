import styled from 'styled-components'
import React ,{useState,useEffect,useRef}from "react";
import Draw from '../Draw.js'
import Send from '@material-ui/icons/Send'
import {TextField,Grid,Paper,makeStyles,IconButton} from '@material-ui/core'
import { useLocation } from 'react-router-dom'; 

import queryString  from 'query-string'
import io from 'socket.io-client'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    height:'300px',
    
  },
}));
let useStyle=makeStyles((theme)=>(
{

pap:{
    padding: theme.spacing(2),
    height:'300px'
}
}
))
let socket;
export default function FullWidthGrid({ Location }) {
let [name,setname]=useState('solo')
let [room,setroom]=useState('kholo');
let [message ,setmessage] = useState("");
let [messages,setmessages]=useState('')
let [display,setdisplay]=useState(0);
let [pos,setpos]=useState({x:0,y:0});

let [dimensions,setdimensions]=useState({height:100,width:100,});
  let location=useLocation();

  let  ENDPORT='http://localhost:5000'
  
  let params=new URLSearchParams(location.search);
  useEffect(()=>{

    setname(params.get('name'));
    setroom(params.get("room"));

   
  socket = io(ENDPORT,{transports:['websocket','polling']})
   

  socket.emit('join',{name,room},()=>{})


return ()=>{}

},[ENDPORT,location.search,name,room])



useEffect(()=>{
socket.on('message',(message)=>{
setmessages([...messages,message]);
})

},[messages])

let ref=useRef(null);

useEffect(()=>{
  setdimensions({
    height: ref.current.clientHeight,
    width: ref.current.clientWidth,
  });


},[])
window.addEventListener('resize',()=>{

  setdimensions({height:ref.current.clientHeight,width:ref.current.clientWidth});
})
console.log(messages);

let clas=useStyle();
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper}>People</Paper>
        </Grid>

        <Grid item xs={12} sm={6} ref={ref}  style={{ position: "relative" }}>
          <Paper className={clas.pap}>
            <Draw dimensions={dimensions} />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper} style={{ position: "relative" }}>
            <Paper
              style={{
                position: "absolute",
                bottom: "0px",
                width: "100%",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",

                background: " linear-gradient(55deg, orange 30%, pink)",
              }}
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                justifyContent: "spacearound",
              }}
            >
              <TextField
                id="input"
                // label="Multiline Placeholder"
                value={message}
                placeholder="Message"
                multiline
                onChange={(e) => setmessage(e.target.value)}
              />
              <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                <Send
                  onClick={(e) => {
                    e.preventDefault();
                    if (message) {
                      console.log(message);
                      socket.emit("sendMessage", message, () => setmessage(""));
                    }
                  }}
                />
              </IconButton>
            </Paper>
            {messages}
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>Video Chat</Paper>
        </Grid>
      </Grid>
    </div>
  );
}
