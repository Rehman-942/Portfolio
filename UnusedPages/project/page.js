import PortfolioLayout from "@/layout/PortfolioLayout";
import dynamic from "next/dynamic";
const ProjectDetailsIsotope = dynamic(
  () => import("@/components/ProjectDetailsIsotope"),
  {
    ssr: false,
  }
);
const page = () => {
  return (
    <PortfolioLayout noFooter>
      <div>
        <div className="mil-page">
          <div className="container">
            <div className="mil-top-banner mil-text-center">
              <p className="mil-upper mil-mb-30">
                <span className="mil-accent">Photography</span>
              </p>
              <h2 className="mil-up mil-mb-60">Commodo Dolor Bibendum</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor <br />
                incididunt ut labore et dolore magna aliqua.{" "}
              </p>
            </div>
            <div className="mil-project mil-mb-60">
              <div className="mil-divider" />
              <div className="row justify-content-between mil-mb-60">
                <div className="col-lg-8">
                  <div className="mil-mb-60" />
                  <p className="mil-mb-30">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </div>
                <div className="col-lg-4">
                  <div className="mil-timeline-nav">
                    <div className="mil-mb-30">
                      <p className="mil-upper mil-mb-10">Date:</p>
                      <p className="mil-text-sm">17 May 2020</p>
                    </div>
                    <div className="mil-mb-30">
                      <p className="mil-upper mil-mb-10">Client Name:</p>
                      <p className="mil-text-sm">PORTFOLIO - Creative Agency</p>
                    </div>
                  </div>
                </div>
              </div>
              <ProjectDetailsIsotope />
              <div className="row">
                <div className="col-lg-12">
                  <h3 className="mil-up mil-mb-30">Quam Mollis</h3>
                </div>
                <div className="col-lg-6">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </p>
                </div>
                <div className="col-lg-6">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries.
                  </p>
                </div>
              </div>
            </div>
            <div className="mil-pagination-panel">
              <a href="#" className="mil-button mil-type-2 mil-mb-30">
                Previous Project
              </a>
              <a href="#" className="mil-button mil-mb-30">
                Next Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </PortfolioLayout>
  );
};
export default page;
