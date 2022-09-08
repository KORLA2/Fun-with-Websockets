import React from 'react'
import Github from "@material-ui/icons/GitHub";
import  Linkedin from "@material-ui/icons/LinkedIn";
import PagesIcon from "@material-ui/icons/Pages";
import Code from "@material-ui/icons/CodeRounded";
import { Button } from '@material-ui/core';
import styled from 'styled-components'
import { Link } from 'react-router-dom';
const Social = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
     <Link target="_blank" to={{pathname:"https://github.com/KORLA2"}}>

     <Button style={{}}>

      <Github style={{ margin: "2px", cursor: "pointer" }} />
     </Button>
     </Link>

     <Link  target="_blank" to={{pathname:"https://linkedin.com/in/korla-goutham-4007701a4"}}>

       <Button>
      <Linkedin style={{ margin: "2px", cursor: "pointer" }} />
        </Button>
     </Link>
     <Link  target="_blank" to={{pathname:"https://korla.hashnode.dev"}}>
        
        <Button>

      <PagesIcon style={{ margin: "2px", cursor: "pointer" }} />
        </Button>
        </Link>

     <Link  target="_blank" to={{pathname:"https://leetcode.com/gouthamkorla1023"}}>
        
        <Button>
      <Code style={{ margin: "2px", cursor: "pointer" }} />
      </Button>
      </Link>

      </div>
  );
}

export default Social
let Line = styled.div`
  width: 2px;
  height: 6.5rem;
  background: black;
`;