import React from 'react'
import ParticleBackground from 'react-particle-backgrounds'

const Background = () => {

  const settings = {
    canvas: {
      canvasFillSpace: true,
      width: true,
      height: true,
      useBouncyWalls: false
    },
    particle: {
      particleCount: 40,
      color: '#5dc1b9',
      minSize: 2,
      maxSize: 5
    },
    velocity: {
      directionAngle: 0,
      directionAngleVariance: 200,
      minSpeed: null,
      maxSpeed: 0.1
    },
    opacity: {
      minOpacity: 0,
      maxOpacity: 0.5,
      opacityTransitionTime: 300000
    }
  }

  return (
    
      <ParticleBackground settings={settings} />
    
  )
}
export default Background;