"use client";

import { useRef, useState } from "react";
import PortfolioLayout from "@/layout/PortfolioLayout";
import StatusPopup from "@/components/StatusPopup";
import { sendContactEmail } from "@/utility/sendEmail";

const page = () => {
  const form = useRef();
  const [popup, setPopup] = useState(null);   // null | "success" | "error"
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    const result = await sendContactEmail(form);
    setSending(false);
    setPopup(result);
    if (result === "success") form.current.reset();
  };

  return (
    <PortfolioLayout noFooter>
      {popup && <StatusPopup type={popup} onClose={() => setPopup(null)} />}

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
              <h2 className="mil-up mil-mb-30">Let&apos;s get you an estimate</h2>
              <p>
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
                      Software Engineer <br />
                      London, UK
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
                      <a href="https://wa.me/447908717256" target="_blank">WhatsApp +44 7908 717256</a>
                    </p>
                  </div>
                  <div className="mil-contact-card mil-mb-90">
                    <p className="mil-upper mil-mb-30">Phone</p>
                    +44 7908 717 256
                  </div>
                </div>
                <div className="col-lg-7">
                  <form ref={form} onSubmit={handleSubmit} id="cform" className="cform" method="post">
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
                    <button
                      type="submit"
                      className="mil-button"
                      disabled={sending}
                      style={{ opacity: sending ? 0.6 : 1, cursor: sending ? "not-allowed" : "pointer" }}
                    >
                      {sending ? "Sending..." : "Submit"}
                    </button>
                  </form>
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
