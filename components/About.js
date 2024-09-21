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
                      src="img/faces/clients/4.jpg"
                      alt="Sophie Miller"
                      className="mil-avatar"
                    />
                  </div>
                  <p className="mil-upper mil-mb-30">
                    Graphic <span className="mil-accent">and</span> Web
                    Developer
                  </p>
                  <h2 className="mil-up mil-mb-30">Devies Byrne</h2>
                  <div className="row justify-content-center">
                    <div className="col-xl-8">
                      <div className="mil-text-center">
                        <p className="mil-mb-30">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries, but also the leap
                          into electronic typesetting, remaining essentially
                          unchanged. It was popularised in the 1960s with the
                          release of Letraset sheets containing Lorem Ipsum
                          passages, and more recently with desktop publishing
                          software like Aldus PageMaker including versions of
                          Lorem Ipsum.
                        </p>
                        <img
                          src="img/signature.png"
                          alt="signature"
                          className="mil-signature"
                        />
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
