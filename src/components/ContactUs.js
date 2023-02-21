import React from 'react'
import { motion } from "framer-motion"
import {AiOutlineMail} from "react-icons/ai"
import {FiPhoneCall} from "react-icons/fi"
import {FaAddressCard} from "react-icons/fa"


const ContactUs = () => {
  return (
    <div id='contact'>
      <div className='contact-header'>
        <h1>
          Contact <span> Us </span>
        </h1>
      </div>

        <motion.div className='contact-main'>
            <section>
                <FiPhoneCall />
                <h3> Call us now</h3>
                <a href='tel: +2347031447386'>
                  +2347031447386
                </a>
                <a href='tel: +2348146462869'>
                  +2348146462869
                </a>
            </section>

            <section>
                <AiOutlineMail />
                <h3> Send us an email</h3>
                <a href='mailto: mbazzempire@gmail.com'>
                mbazzempire@gmail.com
                </a>
            </section>

            <section>
                  <FaAddressCard />
                  <h3>
                      Address
                  </h3>

                  <article>
                      <p>
                        Head Office : 
                      </p>
                      <p>
                      iselle-ukwu Delta State.
                      </p>
                  </article>

                  <article>
                      <p>
                        Branch Office :
                      </p>
                      <p>
                      60 presidential drive onitsha, Anambra State.
                      </p>
                  </article>

                  <article>
                      <p>
                        Corporate Office : 
                      </p>
                      <p>
                      21 bourdilon Road ikoyi Lagos.
                      </p>
                  </article>

            </section>
        </motion.div >
      
    </div>
  )
}

export default ContactUs