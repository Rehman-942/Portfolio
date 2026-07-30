"use client";

import { useRef, useState } from "react";
import StatusPopup from "@/components/StatusPopup";
import { sendContactEmail } from "@/utility/sendEmail";

const Contact = () => {
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
    <div className="mil-section mil-op-space-90">
      {popup && <StatusPopup type={popup} onClose={() => setPopup(null)} />}

      <div
        className="mil-bg-item"
        style={{ bottom: "-5%", right: 0, transform: "rotate(-25deg)" }}
      />
      <div className="container">
        <p className="mil-upper mil-mb-30">
          Contact <span className="mil-accent">me</span>
        </p>
        <h2 className="mil-up mil-mb-60">Let&apos;s get you an estimate</h2>
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
              <p>+44 7908 717256</p>
            </div>
          </div>
          <div className="col-lg-7">
            <form ref={form} onSubmit={handleSubmit} id="cform-two" className="cform-two" method="post">
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
                  <button
                    type="submit"
                    className="mil-button"
                    disabled={sending}
                    style={{ opacity: sending ? 0.6 : 1, cursor: sending ? "not-allowed" : "pointer" }}
                  >
                    {sending ? "Sending..." : "Submit"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
