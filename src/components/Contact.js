
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha";
import Footer from './Footer';

const Contact = () => {
  const form = useRef();
  const recaptchaRef = React.createRef();

  const [captcha, setCaptcha] = useState(false)
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);
    emailjs.sendForm('service_s2cq85j', 'template_u2ziegp', form.current, 'O34BDXb_u6UjV0rI1')
      .then((result) => {
        console.log(result.text);
        setSending(false);
        setCaptcha(false);
        setName('');
        setEmail('');
        setMessage('');
        setSubject('');
      }, (error) => {
        console.log(error.text);
      });
  };

  const onNameChange = (e) => {
    e.preventDefault();
    setName(e.target.value)
  };

  const onEmailChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value)
  }
  const onSubjectChange = (e) => {
    e.preventDefault();
    setSubject(e.target.value)
  }

  const onMessageChange = (e) => {
    e.preventDefault();
    setMessage(e.target.value)
  }
  return (
    <div id="contact">
      <div className='contact-wrapper'>
        <div className='form-wrapper'>
          <form ref={form} onSubmit={sendEmail} className="form">
            <h1>Contact Me</h1>
            <div className='formGroup'>
              <label htmlFor={'name'}>Name</label>
              <input className="input" type="text" id={'name'} name="name" placeholder='Name' value={name} onChange={onNameChange} />
            </div>
            <div className='formGroup'>
              <label htmlFor={'email'}>Email</label>
              <input className="input" type="email" id={'email'} name="email" value={email} onChange={onEmailChange} placeholder='juandelacruz@email.com' />
            </div>
            <div className='formGroup'>
              <label htmlFor={'subject'}>Subject</label>
              <input className="input" type="text" id={'subject'} name="subject" value={subject} onChange={onSubjectChange} placeholder='Subject' />
            </div>
            <div className='formGroup'>
              <label htmlFor={'message'}>Message</label>
              <textarea name="message" id={'message'} value={message} onChange={onMessageChange} placeholder='Type your message here.' />
            </div>
            <div className='buttonGroup'>
              <ReCAPTCHA
                className='reCAPTCHA'
                sitekey="6LfjtIsgAAAAACMI-WUI44eBVPx9GfCaim53kt--"
                onChange={() => setCaptcha(captcha => !captcha)}
              />
              <button style={{ marginTop: "10px" }} disabled={!captcha} type="submit" className="btn-primary sendBtn" value="Send">{sending ? <div className='loader'></div> : 'SEND'}</button>
            </div>
          </form>
        </div>
        
      </div>
      <Footer />
    </div>
  )
}

export default Contact