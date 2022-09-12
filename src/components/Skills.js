import React from 'react'
import styled from 'styled-components'
import Code from '@material-ui/icons/Code'
import  Design  from "@material-ui/icons/DeveloperBoard";
const Skills = () => {
  return (
    <Main>
      <Box>
        <Title>
          <Code />
          <h2>Competetive Programmer</h2>
        </Title>
      </Box>

      <Box>
        <Title>
          <Design />
          <h2>FrontendDeveloper</h2>
        </Title>

        <h3>I enjoy bringing new ideas into life</h3>
        <h2>Skills</h2>
        <p> HTML, CSS,JS,React,Redux,FireBase,Github,Tailwind</p>
        <h2>Tools</h2>
        <p>Vs Code,GitHub,Git</p>
      </Box>
    </Main>
  );
}

export default Skills
let Main = styled.div`
height:100vh;
width:100vw;

display:flex;
justify-content:space-evenly;
align-items: center;

`;


let Box = styled.div`
padding:2rem;
border:2px solid black;
width:30vw;
height:60vh;
&:hover{
h2{
color:pink;

}

}

`;let Title=styled.h2`



`

