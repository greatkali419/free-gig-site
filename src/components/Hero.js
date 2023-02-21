import React, {useEffect} from 'react'
import { Link, animateScroll as scroll} from 'react-scroll'
import { motion, useAnimation } from "framer-motion"
import {useInView} from "react-intersection-observer"

const Hero = () => {
  const {ref, inView} = useInView({
    threshold: 0.2
  })
  const animation = useAnimation()

  
  useEffect(()=>{
    if(inView) {
      animation.start({
        y: 0,
        transition: {
          duration: 1.5,
        }
      })
    }if(!inView) {
      animation.start({
        y: -50
      })

    }
  },[inView])
  return (
    <div id='hero' ref={ref}>
        <motion.div
        animate={animation}
        >
            <h1> Discover and explore The world of digital media marketing</h1>
            <h2>
              Our aim is to provide a platform for youngsters who are into entertainment and needs a platform to publicize themselves into the society
            </h2>
            <Link to="about"  spy={true} smooth={true} offset={-100} duration={500}>
            <button>
              Read More...
            </button>
            </Link>
        </motion.div>
    </div>
  )
}

export default Hero