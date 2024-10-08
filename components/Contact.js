"use client"; // Ensures this is treated as a Client Component

import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const Contact = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);

  // Handle form submission
  const sendEmail = (e) => {
    e.preventDefault();
    console.log('form.current', form.current);

    // Send form data via EmailJS
    // emailjs
    //   .sendForm(
    //     "service_jumfcub",    // EmailJS service ID
    //     "template_m5guv9i",   // EmailJS template ID
    //     form.current,
    //     "v_cio44FtDNs83qLs"     // EmailJS public key
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //       setMessageSent(true); // Show success message
    //     },
    //     (error) => {
    //       console.log(error.text);
    //       alert("Failed to send the message. Please try again.");
    //     }
    //   );
  };

  return (
    <div className="mil-section mil-op-space-90">
      <div
        className="mil-bg-item"
        style={{ bottom: "-5%", right: 0, transform: "rotate(-25deg)" }}
      />
      <div className="container">
        <p className="mil-upper mil-mb-30">
          Contact <span className="mil-accent">me</span>
        </p>
        <h2 className="mil-up mil-mb-60">Let's get you an estimate</h2>
        <div className="row justify-content-between">
          <div className="col-lg-4">
            <div className="mil-contact-card mil-mb-30">
              <p className="mil-upper mil-mb-30">Email</p>
              <p>
                <a href="mailto:rehmanafzal942@gmail.com">rehmanafzal942@gmail.com</a>
              </p>
            </div>
            <div className="mil-contact-card mil-mb-30">
              <p className="mil-upper mil-mb-30">Phone</p>
              <p>+92 324 908 9617</p>
            </div>
          </div>
          <div className="col-lg-7">
            {/* Contact form */}
            <form ref={form} onSubmit={sendEmail} id="cform-two" className="cform-two" method="post">
              <div className="row">
                <div className="col-lg-6">
                  <label className="mil-upper">
                    Your full name <span className="mil-accent">*</span>
                  </label>
                  <input type="text" required className="mil-mb-30" name="name" />
                </div>
                <div className="col-lg-6">
                  <label className="mil-upper">
                    Your email address <span className="mil-accent">*</span>
                  </label>
                  <input type="email" required className="mil-mb-30" name="email" />
                </div>
                <div className="col-lg-12">
                  <label className="mil-upper">
                    Your message <span className="mil-accent">*</span>
                  </label>
                  <textarea
                    className="mil-mb-30"
                    required
                    name="message"
                    defaultValue={""}
                  />
                </div>
                <div className="col-lg-12 mil-text-row">
                  <button type="submit" className="mil-button">
                    Submit
                  </button>
                </div>
              </div>
            </form>
            {/* Success message */}
            {messageSent && (
              <div className="alert-success">
                <h5>Thanks, your message is sent successfully.</h5>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
