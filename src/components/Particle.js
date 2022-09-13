import React from 'react'
import Particles from 'react-particles'
import {Nasa} from './particlesjs-config'
const Particle = () => {
  return (
    <div ><Particles  style={{position:'absolute',zIndex:'1'}} params={Nasa}/></div>
  )
}

export default Particle