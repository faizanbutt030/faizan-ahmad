import React, {useRef} from 'react';
import'./contact.css';
import LinkedIn from '../../assets/linkedin.png';
import Github from '../../assets/github.png';
import TwitteIcon from '../../assets/twitter.png';
import InstagramIcon from '../../assets/instagram.png';
import emailjs from '@emailjs/browser';


export const Contact = () => {
  const form= useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_eot5v5t', 'template_cfxwatf', form.current, 'lLgxVQk9mvmNH9YzC')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert('Email Sent Successfully');
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <>
    <section id="contactPage">
        <div className="contact">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type="text" className="name"  placeholder='Your Name' name='user_name'/>
                <input type="text" className="email" placeholder='Your Email' name='user_email'/>
                <textarea name="message" rows="5" className="msg" placeholder='Your Message'></textarea>
                <button type='submit' value='send' className="submitBtn">Submit</button>
            </form>
        </div>
    </section>
    <div className="links">
        <a href="https://www.linkedin.com/in/faizan-ahmad-0x/"><img src={LinkedIn} alt="LinkedIn" className="link" /></a>
        <a href="https://github.com/faizanbutt030"><img src={Github} alt="Github" className="link" /></a>
        <a href="https://twitter.com/__faizan_ahmad_"><img src={TwitteIcon} alt="Twitter" className="link" /></a>
        <a href="https://instagram.com/___faizan.ahmad?igshid=NzZlODBkYWE4Ng=="><img src={InstagramIcon} alt="Instagram" className="link" /></a>
    </div>
    </>
  )
}
export default Contact;