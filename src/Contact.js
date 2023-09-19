import { useRef, useState } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const form = useRef();
  const [disable, setDisable] = useState(0);

  const sendEmail = (e)=> {
    e.preventDefault();

    emailjs.sendForm('service_glssona', 'template_74vcidl', form.current, 'kmEWi3oG8D-NPRuXS')
    .then((result) => {
        console.log(result.text);
        alert("Form Submitted")
        setDisable(1);
        e.target.reset();
    }, (error) => {
        console.log(error.text);
        setDisable(1);
    });
  }

  return (
    <>
      <form ref={form} onSubmit={sendEmail} className="contact">
        <fieldset className='contact-information'>
          <center><legend>Contact<span className='subName'>Me..</span></legend></center>
          <input type="text" placeholder='Name'  name='user_name'/>
          <input type="email" placeholder='Email' name='user_email'/>
          <input type='tel' placeholder='Phone Number'name='user_phone'/>
          <textarea type='text' placeholder='Your Message' name='message'></textarea>
          {/* <input type='submit' value="Send" /> */}
          <center><button type='submit' disabled={disable}>Submit</button></center>
        </fieldset>
      </form>   
    </>
  )
}
