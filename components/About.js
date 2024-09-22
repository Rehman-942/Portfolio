const About = () => {
  return (
    <div className="mil-section mil-op-space-90">
      <div
        className="mil-bg-item mil-bg-item-large"
        style={{ top: "-20%", left: "15%", transform: "rotate(-35deg)" }}
      />
      <div
        className="mil-bg-item"
        style={{ top: "25%", right: 0, transform: "rotate(-25deg)" }}
      />
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-xl-12">
            <div className="row">
              <div className="col-xl-12">
                <div className="mil-text-center">
                  <div className="mil-about-person-2 mil-mb-30">
                    <img
                      src="img/faces/about.jpg"
                      alt="Rehman Afzal"
                      className="mil-avatar"
                    />
                  </div>
                  <p className="mil-upper mil-mb-30">
                    Full Stack Engineer
                  </p>
                  <h2 className="mil-up mil-mb-30">Rehman Afzal</h2>
                  <div className="row justify-content-center">
                    <div className="col-xl-8">
                      <div className="mil-text-center">
                        <p className="mil-mb-30">
                        I am a passionate Software Engineer specializing in web application development. 
                        My expertise spans React.js, Svelte.js, and Next.js, allowing me to craft responsive, 
                        high-performance applications. On the backend, I work with Node.js, Golang, and Rust, 
                        leveraging MongoDB and PostgreSQL for seamless integration and efficient data management. 
                        I’ve built a range of solutions, including CRMs, Job Application Platforms, Chrome Extensions, 
                        Article websites and E-commerce stores. Proficient in website hosting and deployment, 
                        I am dedicated to optimizing user experiences through innovative solutions and continuous improvements.
                        </p>
                        {/* <img
                          src="img/signature.png"
                          alt="signature"
                          className="mil-signature"
                        /> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
