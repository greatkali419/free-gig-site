import React from 'react'
import { useState } from 'react'
import dropdown from '../img/dropdown.svg'
import dropup from '../img/dropup.svg'

const Faq = () => {
  const [Dropdown1, SetDropdown1] = useState('none')
  const [Dropdown2, SetDropdown2] = useState('none')
  const [Dropdown3, SetDropdown3] = useState('none')
  const [Dropdown4, SetDropdown4] = useState('none')
  const handleDropdown1 = () => {
    SetDropdown1('flex')
  }
  const handleDropdown2 = () => {
    SetDropdown2('flex')
  }
  const handleDropdown3 = () => {
    SetDropdown3('flex')
  }
  const handleDropdown4 = () => {
    SetDropdown4('flex')
  }
  const handleDropup1 = () => {
    SetDropdown1('none')
  }
  const handleDropup2 = () => {
    SetDropdown2('none')
  }
  const handleDropup3 = () => {
    SetDropdown3('none')
  }
  const handleDropup4 = () => {
    SetDropdown4('none')
  }
  return (
    <div id='faqs'>
      <div>
        <h1 className='nowrap'>
          F<span>A</span>Qs
        </h1>
        <p>
          Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us.
        </p>
      </div>
      <article>
        <span className='faq-item nowrap'>
          <p onClick={()=>{handleDropdown1()}}>
            What is M-bazz?
          </p>
          <div>
            {Dropdown1 === "none" ? <img onClick={()=>{handleDropdown1()}} src={dropdown} alt="dropdown" /> :
            <img onClick={()=>{handleDropup1()}} src={dropup} alt="dropup" />}
          </div>
        </span>

        <span style={{ display: Dropdown1 }} className='faq-ans'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia commodi consequuntur magni rerum laborum eligendi tempore voluptate quos et est? Porro repellendus dignissimos, alias a sunt impedit quam tempora vitae!
        </span>
      </article>
      <article>
        <span className='faq-item nowrap'>
          <p onClick={()=>{handleDropdown2()}}>
          How can i request for a meeting?
          </p>
          <div>
          {Dropdown2 === "none" ? <img onClick={()=>{handleDropdown2()}} src={dropdown} alt="dropdown" /> :
            <img onClick={()=>{handleDropup2()}} src={dropup} alt="dropup" /> }
          </div>
        </span>

        <span style={{ display: Dropdown2 }}  className='faq-ans'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia commodi consequuntur magni rerum laborum eligendi tempore voluptate quos et est? Porro repellendus dignissimos, alias a sunt impedit quam tempora vitae!
        </span>
      </article>
      <article>
        <span className='faq-item nowrap'>
          <p onClick={()=>{handleDropdown3()}}>
          Is there a mobile app?
          </p>
          <div>
          {Dropdown3 === "none" ? <img onClick={()=>{handleDropdown3()}} src={dropdown} alt="dropdown" /> :
            <img onClick={()=>{handleDropup3()}} src={dropup} alt="dropup" /> }
          </div>
        </span>

        <span style={{ display: Dropdown3 }}  className='faq-ans'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia commodi consequuntur magni rerum laborum eligendi tempore voluptate quos et est? Porro repellendus dignissimos, alias a sunt impedit quam tempora vitae!
        </span>
      </article>
      <article>
        <span className='faq-item nowrap'>
          <p onClick={()=>{handleDropdown4()}}>
          What makes us different from other agencies?
          </p>
          <div>
          {Dropdown4 === "none" ? <img onClick={()=>{handleDropdown4()}} src={dropdown} alt="dropdown" /> :
            <img onClick={()=>{handleDropup4()}}  src={dropup} alt="dropup" /> }
          </div>
        </span>

        <span style={{ display: Dropdown4 }}  className='faq-ans'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia commodi consequuntur magni rerum laborum eligendi tempore voluptate quos et est? Porro repellendus dignissimos, alias a sunt impedit quam tempora vitae!
        </span>
      </article>
    </div>
  )
}

export default Faq