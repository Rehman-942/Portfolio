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
              <p className="mil-upper mil-mb-30">Academic Background</p>
              <h2 className="mil-up mil-mb-60">Education</h2>
              <p>
                Formally educated in Computer Science and Electrical Engineering,
                with strong academic grounding in software development, systems
                design, algorithms, and emerging technologies including AI and
                machine learning.
              </p>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="mil-icon-box mil-mb-40">
              <div className="mil-text-icon">
                <span style={{ fontSize: "1.2rem", fontWeight: "bold" }}>MS</span>
              </div>
              <div className="mil-box-text">
                <p className="mil-upper mil-text-lg mil-mb-15">
                  MS Computer Science &amp; Technology
                </p>
                <p className="mil-upper mil-upper-sm mil-mb-30">
                  Ulster University, London &mdash; Sept 2025 <span className="mil-accent">to</span> Sept 2026
                </p>
                <p>
                  Pursuing advanced studies in computer science and technology at the
                  London Campus of Ulster University, with a focus on software engineering,
                  AI, and modern computing systems.
                </p>
              </div>
            </div>
            <div className="mil-icon-box">
              <div className="mil-text-icon">
                <span style={{ fontSize: "1.2rem", fontWeight: "bold" }}>BS</span>
              </div>
              <div className="mil-box-text">
                <p className="mil-upper mil-text-lg mil-mb-15">
                  BS Electrical Engineering
                </p>
                <p className="mil-upper mil-upper-sm mil-mb-30">
                  NUST, Pakistan &mdash; Sept 2018 <span className="mil-accent">to</span> Jun 2022
                </p>
                <p>
                  Completed a Bachelor of Science in Electrical Engineering at the
                  National University of Sciences and Technology (NUST), Pakistan,
                  building a strong foundation in systems, programming, and engineering
                  principles.
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
