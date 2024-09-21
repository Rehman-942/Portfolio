const Contact = () => {
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
                <a href="mailto:hello@portfolio.co">hello@portfolio.co</a>
                <br />
                <a href="mailto:hello@portfolio.co">projects@portfolio.co</a>
              </p>
            </div>
            <div className="mil-contact-card mil-mb-30">
              <p className="mil-upper mil-mb-30">Phone</p>
              <p>
                <a href="tel+5636366060">+ 56 3636 60 60</a> <br />
                <a href="tel+5663630606">+ 56 6363 06 06</a>
              </p>
            </div>
          </div>
          <div className="col-lg-7">
            <form id="cform-two" className="cform-two" method="post">
              <div className="row">
                <div className="col-lg-6">
                  <label className="mil-upper">
                    Your full name <span className="mil-accent">*</span>
                  </label>
                  <input type="text" className="mil-mb-30" name="name" />
                </div>
                <div className="col-lg-6">
                  <label className="mil-upper">
                    Your email address <span className="mil-accent">*</span>
                  </label>
                  <input type="email" className="mil-mb-30" name="email" />
                </div>
                <div className="col-lg-12">
                  <label className="mil-upper">
                    Your message <span className="mil-accent">*</span>
                  </label>
                  <textarea
                    className="mil-mb-30"
                    name="message"
                    defaultValue={""}
                  />
                </div>
                <div className="col-lg-12 mil-text-row">
                  <label className="mil-checkbox mil-mb-30">
                    by sending, I accept the{" "}
                    <a href="#.">terms and conditions</a>.
                    <input type="checkbox" name="checkmark" defaultChecked="" />
                    <span className="mil-checkmark" />
                  </label>
                  <button type="submit" className="mil-button">
                    Submit
                  </button>
                </div>
              </div>
            </form>
            <div className="alert-success" style={{ display: "none" }}>
              <h5>Thanks, your message is sent successfully.</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
