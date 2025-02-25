import PortfolioLayout from "@/layout/PortfolioLayout";
import Link from "next/link";
const page = () => {
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
                Pricing <span className="mil-accent">table</span>
              </p>
              <h2 className="mil-up mil-mb-30">Pricing and Plan</h2>
              <p className="mil-left-offset">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum <br />
                has been the industry's standard dummy text ever since the
                1500s.
              </p>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="mil-price-card mil-mb-60">
                  <div className="mil-card-head">
                    <p className="mil-upper mil-upper-sm mil-mb-30">
                      Basic Plan
                    </p>
                    <h2 className="mil-up mil-mb-15">
                      39${" "}
                      <sup>
                        per <br />
                        hour
                      </sup>
                    </h2>
                    <p style={{ opacity: "0.5" }}>10% tax and fixed price</p>
                  </div>
                  <div className="mil-proces-body">
                    <ul>
                      <li>Branding Design &amp; Logo Creation</li>
                      <li>Web Development + Hosting, Domain</li>
                      <li>Advertising on Google Ads &amp; Facebook</li>
                    </ul>
                    <Link legacyBehavior href="/publication">
                      <a className="mil-button mil-type-2">Start My Project</a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="mil-price-card mil-mb-60">
                  <div className="mil-card-head">
                    <div className="mil-label mil-upper mil-upper-sm">
                      Popular
                    </div>
                    <p className="mil-upper mil-upper-sm mil-mb-30">
                      Premium Plan
                    </p>
                    <h2 className="mil-up mil-mb-15">
                      69${" "}
                      <sup>
                        per <br />
                        hour
                      </sup>
                    </h2>
                    <p style={{ opacity: "0.5" }}>10% tax and fixed price</p>
                  </div>
                  <div className="mil-proces-body">
                    <ul>
                      <li>Branding Design &amp; Logo Creation</li>
                      <li>Web Development + Hosting, Domain</li>
                      <li>Advertising on Google Ads &amp; Facebook</li>
                      <li>Content Writing &amp; Social Media</li>
                    </ul>
                    <Link legacyBehavior href="/publication">
                      <a className="mil-button">Start My Project</a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="mil-price-card mil-mb-60">
                  <div className="mil-card-head">
                    <p className="mil-upper mil-upper-sm mil-mb-30">
                      Ultimate Plan
                    </p>
                    <h2 className="mil-up mil-mb-15">
                      99${" "}
                      <sup>
                        per <br />
                        hour
                      </sup>
                    </h2>
                    <p style={{ opacity: "0.5" }}>10% tax and fixed price</p>
                  </div>
                  <div className="mil-proces-body">
                    <ul>
                      <li>Branding Design &amp; Logo Creation</li>
                      <li>Web Development + Hosting, Domain</li>
                      <li>Advertising on Google Ads &amp; Facebook</li>
                      <li>Content Writing &amp; Social Media</li>
                      <li>Server Managment, Security services</li>
                    </ul>
                    <Link legacyBehavior href="/publication">
                      <a className="mil-button mil-type-2">Start My Project</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mil-call-to-action">
            <div className="container">
              <div className="mil-text-center">
                <h3 className="mil-up mil-mb-30">
                  You have alarge <span className="mil-accent">team</span>?
                </h3>
                <p className="mil-mb-30">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum <br />
                  has been the industry's standard dummy text ever since the
                  1500s.
                </p>
                <Link legacyBehavior href="/contact">
                  <a className="mil-button mil-type-2">Contact me</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PortfolioLayout>
  );
};
export default page;
