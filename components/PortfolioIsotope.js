"use client";
import Footer from "@/layout/Footer";
import Isotope from "isotope-layout";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";
const PortfolioIsotope = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".mil-portfolio-grid", {
        itemSelector: ".mil-grid-item",
        percentPosition: true,
        masonry: {
          columnWidth: ".mil-grid-item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 500);
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "mil-current" : "");
  return (
    <Fragment>
      <div className="mil-filter">
        <div className="container">
          <ul className="mil-filter-links mil-mb-30">
            <li>
              <a
                href="#"
                className={`c-pointer ${activeBtn("*")}`}
                onClick={handleFilterKeyChange("*")}
              >
                All
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`c-pointer ${activeBtn("saas")}`}
                onClick={handleFilterKeyChange("saas")}
                data-filter=".saas"
              >
                SAAS
              </a>
            </li>
            <li>
              <a
                href="#"
                data-filter=".website"
                className={`c-pointer ${activeBtn("website")}`}
                onClick={handleFilterKeyChange("website")}
              >
                Wesite
              </a>
            </li>
            <li>
              <a
                href="#"
                data-filter=".extention"
                className={`c-pointer ${activeBtn("extention")}`}
                onClick={handleFilterKeyChange("extention")}
              >
                Crome Extention
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container">
        <div className="mil-portfolio-grid mil-mb-30">
          <div className="grid-sizer" />

          <div className="mil-grid-item website">
            <Link legacyBehavior href="https://opus.ai/" passHref>
            <a target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
              <div className="mil-portfolio-item mil-square-item mil-mb-60">
                <div className="mil-cover">
                  <img src="/img/portfolio/1.png" alt="Opus.ai" />
                  <div className="mil-hover-link">
                    <i className="fas fa-link" />
                  </div>
                </div>
                <div className="mil-project-descr">
                  <p className="mil-upper mil-accent mil-mb-15">AI based Website</p>
                  <h4 className="mil-up">OPUS.ai</h4>
                </div>
              </div>
              </a>
            </Link>
          </div>
          <div className="mil-grid-item extention">
            <Link legacyBehavior href="https://chromewebstore.google.com/detail/comn/bohnipoebbbnfangppfemibbahldcalp?hl=en-GB&utm_source=ext_sidebar" passHref>
            <a target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
              <div className="mil-portfolio-item mil-long-item mil-mb-60">
                <div className="mil-cover">
                  <img src="/img/portfolio/4.png" alt="cover" />
                  <div className="mil-hover-link">
                    <i className="fas fa-link" />
                  </div>
                </div>
                <div className="mil-project-descr">
                  <p className="mil-upper mil-accent mil-mb-15">Crome Extention</p>
                  <h4 className="mil-up">COMN</h4>
                </div>
              </div>
              </a>
            </Link>
          </div>
          
          <div className="mil-grid-item saas">
            <Link legacyBehavior href="https://www.zolaratechsystem.com/" passHref>
            <a target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
              <div className="mil-portfolio-item mil-square-item mil-mb-60">
                <div className="mil-cover">
                  <img src="/img/portfolio/33.png" alt="cover" />
                  <div className="mil-hover-link">
                    <i className="fas fa-link" />
                  </div>
                </div>
                <div className="mil-project-descr">
                  <p className="mil-upper mil-accent mil-mb-15">CRM - SAAS</p>
                  <h4 className="mil-up">Zolara Tech System</h4>
                </div>
              </div>
            </a>
            </Link>
          </div>
          <div className="mil-grid-item website">
            <Link legacyBehavior target="_blanck" href="https://draperuniversity.com/" passHref>
            <a target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
              <div className="mil-portfolio-item mil-long-item mil-mb-60">
                <div className="mil-cover">
                  <img src="/img/portfolio/2.jpg" alt="cover" />
                  <div className="mil-hover-link">
                    <i className="fas fa-link" />
                  </div>
                </div>
                <div className="mil-project-descr">
                  <p className="mil-upper mil-accent mil-mb-15">Educational website</p>
                  <h4 className="mil-up">DraperUniversity</h4>
                </div>
              </div>
              </a>
            </Link>
          </div>


          <div className="mil-grid-item website">
            <Link legacyBehavior target="_blanck" href="https://parsecinstitute.org/" passHref>
            <a target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
              <div className="mil-portfolio-item mil-long-item mil-mb-60">
                <div className="mil-cover">
                  <img src="/img/portfolio/55.jpg" alt="cover" />
                  <div className="mil-hover-link">
                    <i className="fas fa-link" />
                  </div>
                </div>
                <div className="mil-project-descr">
                  <p className="mil-upper mil-accent mil-mb-15">WebSite</p>
                  <h4 className="mil-up">ParsecInstitute</h4>
                </div>
              </div>
              </a>
            </Link>
          </div>
          <div className="mil-grid-item saas">
            <Link legacyBehavior href="https://aidream.work/" passHref>
            <a target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
              <div className="mil-portfolio-item mil-square-item mil-mb-60">
                <div className="mil-cover">
                  <img src="/img/portfolio/44.jpg" alt="cover" />
                  <div className="mil-hover-link">
                    <i className="fas fa-link" />
                  </div>
                </div>
                <div className="mil-project-descr">
                  <p className="mil-upper mil-accent mil-mb-15">SAAS Web App</p>
                  <h4 className="mil-up">AIdream</h4>
                </div>
              </div>
              </a>
            </Link>
          </div>
        </div>
        <div className="mil-pagination-panel">
          <ul className="mil-pagination-numbers">
            <li className="mil-active">
              <a href="#.">01</a>
            </li>
            {/* <li>
              <a href="#.">02</a>
            </li>
            <li>
              <a href="#.">03</a>
            </li> */}
          </ul>
          <div className="mil-pagination-nav">
            <div className="mil-slider-nav mil-mb-30">
              <a href="#." className="mil-prev mil-reviews-prev">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </a>
              <a href="#." className="mil-next mil-reviews-next">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </a>
            </div>
            <div className="mil-reviews-pagination mil-upper mil-mb-30" />
          </div>
        </div>
      </div>
      
    </Fragment>
  );
};
export default PortfolioIsotope;
