"use client";

import { useRef } from "react";
import emailjs from "@emailjs/browser";
import PortfolioLayout from "@/layout/PortfolioLayout";

const page = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_jumfcub",  // EmailJS service ID
      "template_m5guv9i", // EmailJS template ID
      form.current,
      "v_cio44FtDNs83qLs"   // EmailJS public key
    ).then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send the message, please try again.");
        }
      );
  };

  return (
    <PortfolioLayout noFooter>
      <div>
        <div className="mil-page">
          <div
            className="mil-bg-item"
            style={{ top: "3%", right: "15%", transform: "rotate(-45deg)" }}
          />
          <div className="container">
            <div className="mil-top-banner">
              <p className="mil-upper mil-mb-30">
                Contact <span className="mil-accent">me</span>
              </p>
              <h2 className="mil-up mil-mb-30">Let's get you an estimate</h2>
              <p className="mil-left-offset">
                Contact us today for a personalized estimate tailored to your project needs!
              </p>
            </div>
            <div className="mil-contact">
              <div className="row justify-content-between">
                <div className="col-lg-4">
                  <div className="mil-contact-card mil-mb-30">
                    <p className="mil-upper mil-mb-30">
                      About <span className="mil-accent">me</span>
                    </p>
                    <p>
                      Rehman Afzal <br />
                      Full Stack Engineer <br />
                      Lahore, Pakistan
                    </p>
                  </div>
                  <div className="mil-contact-card mil-mb-30">
                    <p className="mil-upper mil-mb-30">Email</p>
                    <p>
                      <a href="mailto:rehmanafzal942@gmail.com">rehmanafzal942@gmail.com</a>
                    </p>
                  </div>
                  <div className="mil-contact-card mil-mb-30">
                    <p className="mil-upper mil-mb-30">Chats</p>
                    <p>
                      <a href="https://wa.me/923249089617" target="_blank">WhatsApp</a> +92 324 9089617
                    </p>
                  </div>
                  <div className="mil-contact-card mil-mb-90">
                    <p className="mil-upper mil-mb-30">Phone</p>
                    +92 324 908 9617
                  </div>
                </div>
                <div className="col-lg-7">
                  <form ref={form} onSubmit={sendEmail} id="cform" className="cform" method="post">
                    <label className="mil-upper">
                      Your full name <span className="mil-accent">*</span>
                    </label>
                    <input type="text" required className="mil-mb-30" name="name" />
                    <label className="mil-upper">
                      Your email address <span className="mil-accent">*</span>
                    </label>
                    <input type="email" required className="mil-mb-30" name="email" />
                    <label className="mil-upper">
                      Your phone number
                    </label>
                    <input type="tel" className="mil-mb-30" name="phone" />
                    <label className="mil-upper">
                      Subject <span className="mil-accent">*</span>
                    </label>
                    <input type="text" required className="mil-mb-30" name="subject" />
                    <label className="mil-upper">
                      Tell me your ideas <span className="mil-accent">*</span>
                    </label>
                    <textarea className="mil-mb-30" name="message" required />
                    <button type="submit" className="mil-button">
                      Submit
                    </button>
                  </form>
                  <div className="alert-success" style={{ display: "none" }}>
                    <h5>Thanks, your message is sent successfully.</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PortfolioLayout>
  );
};
export default page;
