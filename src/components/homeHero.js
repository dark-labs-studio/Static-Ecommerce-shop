import { Link } from 'gatsby'
import React, { useState } from 'react'
import Img from 'gatsby-image'
import MainLogo from './assets/FutureArchives_Logo.svg'
import CrownLogo from './assets/crownLogo.svg'
import { useSpring, useTransition, a } from 'react-spring'
import './homeHero.css'

function FadeInMid(props) {
  const propsFade = useSpring({
    to: async (next, cancel) => {
      await next({ opacity: 0 })
      await next({ opacity: 1 })
    },
    from: { opacity: 0 },
    delay: 0,
    config: { duration: 1200 }
  })
  return <a.div className='hero-item--container' style={propsFade}>
    <Img
      className='hero-item--image'
      alt={'Legacy Strains Logo Small'} />
      height={'500px'}
      fluid={props.heroImage0}

  </a.div>
}

const homeHero = (props) => {
  return (
    <div className='hero--wrapper'>
      <FadeInMid
        heroImage0={props.heroImage}
      />
    </div>
  )
}

export default homeHero
