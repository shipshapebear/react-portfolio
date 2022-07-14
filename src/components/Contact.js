import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from "react-hook-form";
const Contact = () => {
  const form = useRef();
  const recaptchaRef = React.createRef();
 
  const [captcha, setCaptcha] = useState(false);
  const [sending, setSending] = useState(false);
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const getColorScheme = () => {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        setIsDark(false)
        
      } else {
        setIsDark(true)
      
      }
      console.log(isDark)
      
    }

    getColorScheme()
  }, [isDark, setIsDark])

 
  

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });
  const [mailer, setMailer] = useState(null);

  const sendEmail = (data) => {
    setSending(true);
    emailjs
      .sendForm(
        "service_s2cq85j",
        "template_u2ziegp",
        form.current,
        "O34BDXb_u6UjV0rI1"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSending(false);
          setCaptcha(false);
          window.grecaptcha.reset();
          reset();
        },
        (error) => {
          console.log(error.text);
        }
      );

  };
  useEffect(() => {
    // reset form with user data
    reset(mailer);
  }, [mailer]);
  return (
    <div id="contact">
      <div className="contact-wrapper">
        <div className="form-wrapper">
          <form ref={form} onSubmit={handleSubmit(sendEmail)} className="form">
            <h1 className="title">Contact Me</h1>
            <div className="formGroup">
             
              <label htmlFor={"name"}>Name</label>
              <input
                className="input"
                type="text"
                id={"name"}
                name="name"
                placeholder="Name"
                autoComplete="off"
                {...register("name", { required: true })}
              />
            </div>
            <div className="formGroup">
              <label htmlFor={"email"}>Email</label>
              <input
                className="input"
                type="email"
                id={"email"}
                name="email"
                autoComplete="off"
                placeholder="johndoe@email.com"
                {...register("email", { required: true })}
              />
            </div>
            <div className="formGroup">
              <label htmlFor={"subject"}>Subject</label>
              <input
                className="input"
                type="text"
                id={"subject"}
                name="subject"
                placeholder="Subject"
                autoComplete="off"
                {...register("subject", { required: true })}
              />
            </div>
            <div className="formGroup">
              <label htmlFor={"message"}>Message</label>
              <textarea
                name="message"
                id={"message"}
                placeholder="Type your message here."
                autoComplete="off"
                {...register("message", { required: true })}
              />
            </div>
            <div className="buttonGroup">
              <ReCAPTCHA
                theme={isDark ?'dark' : 'light'}
                className="reCAPTCHA"
                sitekey="6LfjtIsgAAAAACMI-WUI44eBVPx9GfCaim53kt--"
                onChange={() => setCaptcha((captcha) => !captcha)}
              />
              <button
                style={{ marginTop: "10px" }}
                disabled={!captcha}
                type="submit"
                className="btn-primary sendBtn"
                value="Send"
              >
                {sending ? <div className="loader"></div> : "SEND"}
              </button>
            </div>
          </form>
        </div>
        <div className="right-wrapper">
          <h1>Get in touch!</h1>
          <p>
            My inbox is always open. Either fill out the form with your inquiry
            or send me an email at &nbsp;
            <a className="email" href="mailto:aaronmlbnn@gmail.com">
              aaromlbnn@gmail.com.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
