const Education = () => {
  return (
    <div className="mil-section mil-op-space-90">
      <div
        className="mil-bg-item"
        style={{ bottom: "0%", left: "25%", transform: "rotate(-25deg)" }}
      />
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-xl-5 mil-mb-60">
            <div className="mil-text-right-adapt">
              <p className="mil-upper mil-mb-30">Certificates</p>
              <h2 className="mil-up mil-mb-60">Education</h2>
              <p>
                Extensive education in developing web applications using: HTML5, CSS3,
                JavaScript, MERN Stack (React JS and Node Js), Svelte Js, JQuery, PostgreSQL, MongoDB
                Bootstrap, Wordpress.
              </p>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="mil-icon-box mil-mb-40">
              <div className="mil-text-icon">
                <a href="img/certificate.jpg" className="mfp-image">
                  +
                </a>
              </div>
              <div className="mil-box-text">
                <p className="mil-upper mil-text-lg mil-mb-15">
                  Backend Programming
                </p>
                <p className="mil-upper mil-upper-sm mil-mb-30">
                  2020 <span className="mil-accent">to</span> 2021
                </p>
                <p>
                  It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining unchanged.
                </p>
              </div>
            </div>
            <div className="mil-icon-box mil-mb-40">
              <div className="mil-text-icon">
                <a href="img/certificate.jpg" className="mfp-image">
                  +
                </a>
              </div>
              <div className="mil-box-text">
                <p className="mil-upper mil-text-lg mil-mb-15">
                  Master in Graphic
                </p>
                <p className="mil-upper mil-upper-sm mil-mb-30">
                  2019 <span className="mil-accent">to</span> 2020
                </p>
                <p>
                  It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining unchanged.
                </p>
              </div>
            </div>
            <div className="mil-icon-box">
              <div className="mil-text-icon">
                <a href="img/certificate.jpg" className="mfp-image">
                  +
                </a>
              </div>
              <div className="mil-box-text">
                <p className="mil-upper mil-text-lg mil-mb-15">
                  Bachelors in Electrical Engineering
                </p>
                <p className="mil-upper mil-upper-sm mil-mb-30">
                  NUST, Pakistan 2018 <span className="mil-accent">to</span> 2022
                </p>
                <p>
                  It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining unchanged.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Education;
