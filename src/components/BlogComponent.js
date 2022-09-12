import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import styled from 'styled-components'
const BlogComponent = ({blog}) => {
    
    return (
   <Blog to={{pathname:'/'}}>
{blog.desc}
   </Blog>
  )
}

export default BlogComponent
let Blog=styled(Link)`
/* width:calc(10rem+15vw); */
background: red;
/* height:20rem; */
color:black;
text-decoration:none;
border:2px solid red;
padding:1rem;
`