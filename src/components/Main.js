import React,{useState} from 'react'
import  styled ,{keyframes}from 'styled-components'
import { Button } from '@material-ui/core'
import Powers from './Power'
import Social  from './Social'
import FullLoad from "@material-ui/icons/SportsBaseball";
import {Link }from 'react-router-dom'
import Intro from './Intro';
import {motion } from 'framer-motion'
const Main = () => {
  let [Click,setClick]=useState(0);
  return (
    <Container click={Click}>
      <Head>
        <h3>Korla Goutham</h3>
      
  <Powers/>
        <Link
          target="_blank"
          style={{
            position: "fixed",
            right: "2rem",
            zIndex: "2",
            textDecoration: "none",
          }}
          to={{ pathname: "mailto:gouthamkorla1023@gmail.com" }}
        >
          <motion.div whileHover={{ scale:1.1 }}
           whileTap={{ scale: .9 }}>
            <Button className="ball">Contact Me</Button>
          </motion.div>
        </Link>

        <Work to="/MyWork">
         <motion.div whileHover={{ scale:1.1 }}
           whileTap={{ scale: .9 }}>

          <Button>My Work</Button>
           </motion.div>
        </Work>
        
        <Blogs to="/MyBlogs">
         <motion.div whileHover={{ scale:1.1 }}
           whileTap={{ scale: .9 }}>

          <Button className="ball">My Blogs</Button>
           </motion.div>
        </Blogs>
      </Head>
      <div style={{ position: "absolute", bottom: ".5rem", zIndex: "3" }}>
        <Social />
        <Line />
      </div>
      <Move click={Click} />
      <Middle click={Click}>
        {/* <Link> */}
        <FullLoad
          onClick={() => {
            setClick(!Click);
          }}
          className="ball"
          style={{ transform: "scale(5)", cursor: "pointer", border: "none" }}
        />
        {!Click ? <h3>Click on the ball</h3> : null}
        {/* </Link> */}
      </Middle>
      <Bottom>
        <About to="/AboutMe">
         <motion.div whileHover={{ scale:1.1 }}
           whileTap={{ scale: .9 }}>

          <Button>About Me</Button>
           </motion.div>
        </About>

        <Skills to="/MySkills">
         <motion.div whileHover={{ scale:1.1 }}
           whileTap={{ scale: .9 }}>

          <Button className="ball">MySkills</Button>
           </motion.div>
        </Skills>
      </Bottom>
 
      {!Click ? null : <Intro />}
    </Container>
  );
}

export default Main


let rotate = keyframes`

0%{
transform:rotate(-360deg)  scale(5);
}

50%{
transform:rotate(0deg) scale(.5);

}
100%{
transform:rotate(360deg) scale(5);


}

`;
let Move = styled.div`
  position: absolute;
  /* z-index:; */
  width: ${(props) => (props.click ? "50%" : "0%")};
  height: 100%;
  left: 60%;
  top: 0%;
  transition: height .5s ease-in, width 1.5s ease-out;
  bottom: 0%;
  background: ${props=>props.theme.text}
`
let Container = styled.div`
  background: ${(props) => props.theme.body};
  .ball {
    transition: all 2s linear;
    border: ${(props) => (props.click ? "2px solid white" : "none")};
    /* padding: 0.2rem; */
    color: ${(props) => (props.click ? "white" : "black")};
  }
  color: ${(props) => props.theme.text};
  height: 100vh;
  width: 100vw;
  padding: 0.5rem;
  overflow: hidden;
`
let Head = styled.div`
  /* position:relative; */
  button {
    color: ${(props) => props.theme.text};
  }
  padding: 2rem;
  /* border:2px solid red; */
  h3 {
    position: fixed;
    left: 2.5rem;
  }
  display: flex;
  align-items: center;
  justify-content: center;
`;
let Line = styled.div`
  width: 2px;
  height: 8rem;
margin-left:2rem;
  background: ${props=>props.theme.text};
`;

let Skills=styled(Link)`

`
let About=styled(Link)`

`
let Middle = styled.div`
  position: absolute;
display:flex;
flex-direction:column;
  .ball {
    animation: ${rotate} infinite 2s linear;
  }

  top: ${(props) => (props.click ? "90%" : "50%")};
  justify-content: center;
  /* border:2px solid red; */
  transition: all 2s linear;
  align-items: center;
  flex-direction: column;

  left: ${(props) => (props.click ? "90%" : "50%")};
  transform: translate(-50%, -50%);
`;
let Bottom = styled.div`
  a {
    text-decoration: none;
  }
  position: absolute;

  button {
    color: ${(props) => props.theme.text};
  }
  width: 100%;
  display: flex;
  left: 0%;
  right: 0%;
  bottom: 1rem;
  justify-content: space-evenly;
  align-items: center;
`;
let Work=styled(Link)`
position:absolute;
top:30%;

left:0px;
text-decoration: none;
transform:rotate(-90deg);
`
let Blogs = styled(Link)`
  position: absolute;
  top: 30%;
 z-index:2;
  right: 0px;
  text-decoration: none;
  transform: rotate(90deg);
`;