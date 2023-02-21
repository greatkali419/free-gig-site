import React, {useEffect} from 'react'
import {useInView} from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"

const About = () => {
  const {ref, inView} = useInView({
    threshold: 0.2
  })
  const animation = useAnimation()

  useEffect(()=>{
    if(inView) {
      animation.start({
        y: 0,
        transition: {
          type: 'spring',
          duration: 1.5,
          bounce: 0.3
        }
      })
    }if(!inView) {
      animation.start({
        y: -70
      })

    }
  },[inView])
  return (
    <div ref={ref} id='About'>

    <motion.article 
    id='mission'
    animate={animation}
    >
        <h1><span> Our</span> Mission </h1>
        <p>
          To reachout to the grassroots, nook or cranny of Nigeria to sort out young talents, give them media visibility and empower them through our platform. To present unique, creative and well-refined talents to the world around us. To use our large offline and online media presence cum experience to plan, promote, market and advertise for genuine brands and businesses within and outside Nigeria.
          </p>
      </motion.article>

      <motion.article
          animate={animation}
      >
        <h1> Our <span>Vi</span>sion </h1>
        <p>
        M-bazz Empire envisions transcending the national boundary and becoming its very best in talent haunting and promotion business. We see a future where individuals whose lives had been bettered through our platform would be spread accross many national boundaries and be impacting more lives there. A future where M-bazz will not only be regarded as a giant Media company, but as the best School where talents and creativity are optimally nurtured and empowered. We envision being regarded as the primus inter pares in this industry.
        </p>
      </motion.article>

      <motion.article
       id='about'
       animate={animation}
       >
        <h1> About <span> Us </span></h1>
        <p>
        M-bazz Empire is a child of necessity, birthed on the need to harness and promote talents, entrepreneurship and social values. Seeing the plethora of unique talents that almost wither away due to lack or inadequate nurturing and visibility, we have taken it upon ourselves to harness, promote and empower these talents from the grassroots to the world. Our inspiration was built upon these ideals.

        Before its official certification in 2019, M-bazz as a group of like-minded enterprising individuals had engaged in series of talent hunts, event plannings and socio-cultural promotions, even till this day. As a platform that first had its offshoot in the renowned University of Nigeria, M-bazz constitute individuals of substance from different walks of life. What we do in M-bazz Empire is to nurture talents, and properly channel them where they can gain the needed visibility and reward for their creativity. Our growth today as one of the leading giants in this industry is organic; this is because it followed an evolutionary process while integrating and bonding both the offline and online values of individuals from different places and orientations.
        <br></br>
        In terms of entrepreneurship,  M-bazz with its large audience and media coverage both offline and online, had worked & working with different brands, businesses and cooperations. We use our different media channels and outlets to uniquely advertise and promote genuine brands and businesses. Our promotions' pattern is unique in that, apart from the offline and online campaigns/advertisement, M-bazz also promotes brands through those individuals it has helped to establish. In other words, we have celebrities in Academics, Entertainment such as Music, Skit-making, Movies and what have you, who had soared through the M-bazz platform: getting these personalities and their friends in the industry to promote your brand becomes easier, at little or no cost. M-bazz Empire also plan events, organise contests and road shows for our different brands and clients. 
        <br></br>
         In her untiring quest to positively effect lives and enhance societal values, M-bazz has been honoured with series Dignity Awards of Recognition, ranging from Groups, Associations and Authorities for its impacts and achievements.
        </p>
      </motion.article>
     
    </div>
  )
}

export default About