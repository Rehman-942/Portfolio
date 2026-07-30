const Services = () => {
  return (
    <div className="mil-section mil-op-space-90">
      <div
        className="mil-bg-item mil-bg-item-large"
        style={{ top: "-10%", right: "20%", transform: "rotate(-25deg)" }}
      />
      <div
        className="mil-bg-item"
        style={{ bottom: "20%", left: "-5%", transform: "rotate(-25deg)" }}
      />
      <div className="container">
        <p className="mil-upper mil-mb-30">Freelance</p>
        <h2 className="mil-up mil-mb-60">Services</h2>
        <div className="row">
          <div className="col-xl-4">
            <div className="mil-icon-box mil-mb-60">
              <div className="mil-text-icon">
                <i className="fas fa-code" />
              </div>
              <div className="mil-box-text">
                <p className="mil-upper mil-text-lg mil-mb-15">
                  Web App Development
                </p>
                <p>
                  Creating responsive and high-performance full-stack web applications
                  using React, Next.js, Node.js, and NestJS tailored to your needs.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-4">
            <div className="mil-icon-box mil-mb-60">
              <div className="mil-text-icon">
                <i className="fas fa-robot" />
              </div>
              <div className="mil-box-text">
                <p className="mil-upper mil-text-lg mil-mb-15">AI Integration</p>
                <p>
                  Integrating OpenAI and custom ML models to build intelligent chat assistants,
                  automated content generation pipelines, and recommendation systems.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-4">
            <div className="mil-icon-box mil-mb-30">
              <div className="mil-text-icon">
                <i className="fas fa-comments" />
              </div>
              <div className="mil-box-text">
                <p className="mil-upper mil-text-lg mil-mb-15">
                  AI Chatbot
                </p>
                <p>
                  Building intelligent chatbots to streamline customer interactions,
                  automate support workflows, and improve engagement.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-4">
            <div className="mil-icon-box mil-mb-30">
              <div className="mil-text-icon">
                <i className="fas fa-puzzle-piece" />
              </div>
              <div className="mil-box-text">
                <p className="mil-upper mil-text-lg mil-mb-15">
                  Chrome Extensions
                </p>
                <p>
                  Create custom Chrome extensions to enhance browser functionality
                  and improve user experience with production-grade quality.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-4">
            <div className="mil-icon-box mil-mb-30">
              <div className="mil-text-icon">
                <i className="fas fa-server" />
              </div>
              <div className="mil-box-text">
                <p className="mil-upper mil-text-lg mil-mb-15">
                  Backend &amp; APIs
                </p>
                <p>
                  Designing scalable REST APIs and backend architectures with Node.js,
                  NestJS, PostgreSQL, MongoDB, and Firebase for robust performance.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-4">
            <div className="mil-icon-box mil-mb-30">
              <div className="mil-text-icon">
                <i className="fas fa-cloud-upload-alt" />
              </div>
              <div className="mil-box-text">
                <p className="mil-upper mil-text-lg mil-mb-15">
                  Deployment &amp; DevOps
                </p>
                <p>
                  Managing end-to-end deployment workflows using Docker, GitHub Actions,
                  Vercel, Cloudflare Workers, and Firebase Functions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Services;
