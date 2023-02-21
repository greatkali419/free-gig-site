import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import icon2 from '../img/icon2.svg'
import icon1 from '../img/icon.svg'
import icon3 from '../img/icon-instagram.svg'
import { Link, animateScroll as scroll} from 'react-scroll'

const Footer = () => {
  const form = useRef();
  const today = new Date();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_0r5rakr", "template_d3og02m", form.current, "asVG9PUFjNt743JWP")
      .then((result) => {
        e.target.reset()
          alert('email submitted')
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div id='subscribe'>
      <h2>
        Never miss an update
      </h2>
      <p>
        Get updates on our latest marketing deals 
      </p>
      <form  ref={form} onSubmit={sendEmail} action="submit">
          <input
          type="email"
          name="message"
          id='subscribe'
          placeholder='Enter your email' />
          <button>
            Subscribe
          </button>
      </form>
      <section>
          <ul>
            <Link to="about"  spy={true} smooth={true} offset={-100} duration={500} >
            <li>About Us</li>
            </Link>
            <Link to="mission"  spy={true} smooth={true} offset={-100} duration={500}>
            <li>Our Mission</li>
            </Link>
            <Link to="faqs" spy={true} smooth={true} offset={-100} duration={500} >
            <li>FAQs</li>
            </Link>
            <Link to="contact"  spy={true} smooth={true} offset={-100} duration={500}>
            <li>Contact</li>
            </Link>
          </ul> 
          <article>
              <img src={icon1} alt="icon1" />
              <img src={icon2} alt="icon2" />
              <a href="https://instagram.com/official_mbazzempire?igshid=ZDdkNTZiNTM=">
                <img src={icon3} alt="icon3" />
              </a>
          </article>
          <div>
            <p>Copyright &copy; {today.getFullYear()}. All Rights Reserved.</p>
          </div>
      </section>

    </div>
  )
}

export default Footer