import React from 'react'
import  styled ,{keyframes}from 'styled-components'
import { Button } from '@material-ui/core'
import Power from '@material-ui/icons/PowerSettingsNew'
import Social  from './Social'
import FullLoad from "@material-ui/icons/SportsBaseball";
import {Link }from 'react-router-dom'
const Main = () => {
  return (
    <Container>
      <Head>
        <h3>Korla Goutham</h3>
        <Button
          style={{
            position: "fixed",
            left: "50%",
            transform: "translate(-50%,0)",
          }}
        >
          <Power />
        </Button>

        <Link
          target="_blank"
          style={{
            position: "fixed",
            right: "2rem",
            textDecoration: "none",
          }}
          to={{ pathname: "mailto:gouthamkorla1023@gmail.com" }}
        >
          <Button>Contact Me</Button>
        </Link>

        <Work to="/MyWork">
          <Button>My Work</Button>
        </Work>
        <Blogs to="/MyBlogs">
          <Button>My Blogs</Button>
        </Blogs>
      </Head>
      <div style={{ position: "absolute", bottom: ".5rem", zIndex: "3" }}>
        <Social />
        <Line />
      </div>

      <Middle>
        <FullLoad style={{transform:'scale(5)', animation :`${rotate},infinite,1.5s,linear`}}/>
        Click ME
      </Middle>
      <Bottom>
        <About to="/AboutMe">
          <Button>About Me</Button>
        </About>

        <Skills to="/MySkills">
          <Button>MySkills</Button>
        </Skills>
      </Bottom>
    </Container>
  );
}

export default Main


let rotate = keyframes`
0%{
transform:rotate(360deg);

}
100%{
transform:rotate(0deg);

}
`;

let Container=styled.div`


    background: ${props => props.theme.body};

color:${props => props.theme.text};
height:100vh;
width:100vw;
padding:.5rem;;
overflow:hidden;
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
let Middle=styled.div`
position:absolute;
top:50%;
display:flex;
justify-content: center;
align-items:center;
flex-direction:column;
left:50%;
transform:translate(-50%,-50%);
`
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
 
  right: 0px;
  text-decoration: none;
  transform: rotate(90deg);
`;