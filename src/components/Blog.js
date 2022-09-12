import React from 'react'
import styled from 'styled-components'
import Powers from './Power'
import Photo from "./logo192.png";
import { MyBlogs } from './MyBlogs';
import BlogComponent from './BlogComponent'
const Blog = () => {
  console.log(MyBlogs)
  return (
    <Container>
      <Head>
        <Powers />
      </Head>
      <Center>
        <Grid>
          {
MyBlogs.map(blog=>
<BlogComponent key={blog.id} blog={blog}/>
)

          }
        </Grid>
      </Center>
    </Container>
  );
}

export default Blog
let Container=styled.div`

height:100vh;
width:100vw;
background: url(${Photo});
background-repeat:no-repeat;
background-position: center;
background-attachment: fixed;  ;
`
let Head=styled.div`
padding:2rem;
`
let Center=styled.div`
display:flex;
justify-content:center;
align-items:center;
padding-top:10rem;

`
let Grid =styled.div`

display:grid;
grid-template-columns: repeat(2,minmax(15vw,1fr));
grid-gap:2vw;
`