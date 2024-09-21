"use client";
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
                className={`c-pointer ${activeBtn("fil-link")}`}
                onClick={handleFilterKeyChange("fil-link")}
                data-filter=".fil-link"
              >
                Link
              </a>
            </li>
            <li>
              <a
                href="#"
                data-filter=".fil-gallery"
                className={`c-pointer ${activeBtn("fil-gallery")}`}
                onClick={handleFilterKeyChange("fil-gallery")}
              >
                Gallery
              </a>
            </li>
            <li>
              <a
                href="#"
                data-filter=".fil-image"
                className={`c-pointer ${activeBtn("fil-image")}`}
                onClick={handleFilterKeyChange("fil-image")}
              >
                Image
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container">
        <div className="mil-portfolio-grid mil-mb-30">
          <div className="grid-sizer" />
          <div className="mil-grid-item fil-link">
            <Link legacyBehavior href="/project">
              <div className="mil-portfolio-item mil-square-item mil-mb-60">
                <div className="mil-cover">
                  <img src="/img/portfolio/1.jpg" alt="cover" />
                  <div className="mil-hover-link">
                    <i className="fas fa-link" />
                  </div>
                </div>
                <div className="mil-project-descr">
                  <p className="mil-upper mil-accent mil-mb-15">Link</p>
                  <h4 className="mil-up">The Woman In Red Walking</h4>
                </div>
              </div>
            </Link>
          </div>
          <div className="mil-grid-item fil-gallery">
            <a
              href="#gallery-1"
              className="mil-portfolio-item mil-long-item mil-mb-60 mfp-gallery"
            >
              <div className="mil-cover">
                <img src="/img/portfolio/2.jpg" alt="cover" />
                <div className="mil-hover-link">
                  <i className="fas fa-plus" />
                </div>
              </div>
              <div className="mil-project-descr">
                <p className="mil-upper mil-accent mil-mb-15">Gallery</p>
                <h4 className="mil-up">White Mountains</h4>
              </div>
            </a>
            <div id="gallery-1" className="mfp-hide">
              <a href="img/portfolio/2.jpg" />
              <a href="img/portfolio/3.jpg" />
              <a href="img/portfolio/4.jpg" />
            </div>
          </div>
          <div className="mil-grid-item fil-image">
            <a
              href="img/portfolio/3.jpg"
              className="mil-portfolio-item mil-square-item mil-mb-60 mfp-image"
            >
              <div className="mil-cover">
                <img src="/img/portfolio/3.jpg" alt="cover" />
                <div className="mil-hover-link">
                  <i className="fas fa-search-plus" />
                </div>
              </div>
              <div className="mil-project-descr">
                <p className="mil-upper mil-accent mil-mb-15">Image</p>
                <h4 className="mil-up">Aesthetic Buildings</h4>
              </div>
            </a>
          </div>
          <div className="mil-grid-item fil-link">
            <Link legacyBehavior href="/project">
              <div className="mil-portfolio-item mil-long-item mil-mb-60">
                <div className="mil-cover">
                  <img src="/img/portfolio/4.jpg" alt="cover" />
                  <div className="mil-hover-link">
                    <i className="fas fa-link" />
                  </div>
                </div>
                <div className="mil-project-descr">
                  <p className="mil-upper mil-accent mil-mb-15">Link</p>
                  <h4 className="mil-up">Space Exploration</h4>
                </div>
              </div>
            </Link>
          </div>
          <div className="mil-grid-item fil-gallery">
            <a
              href="#gallery-2"
              className="mil-portfolio-item mil-long-item mil-mb-60 mfp-gallery"
            >
              <div className="mil-cover">
                <img src="/img/portfolio/5.jpg" alt="cover" />
                <div className="mil-hover-link">
                  <i className="fas fa-plus" />
                </div>
              </div>
              <div className="mil-project-descr">
                <p className="mil-upper mil-accent mil-mb-15">Gallery</p>
                <h4 className="mil-up">Aceanic Colors</h4>
              </div>
            </a>
            <div id="gallery-2" className="mfp-hide">
              <a href="img/portfolio/5.jpg" />
              <a href="img/portfolio/3.jpg" />
              <a href="img/portfolio/4.jpg" />
            </div>
          </div>
          <div className="mil-grid-item fil-link">
            <Link legacyBehavior href="/project">
              <div className="mil-portfolio-item mil-square-item mil-mb-60">
                <div className="mil-cover">
                  <img src="/img/portfolio/6.jpg" alt="cover" />
                  <div className="mil-hover-link">
                    <i className="fas fa-link" />
                  </div>
                </div>
                <div className="mil-project-descr">
                  <p className="mil-upper mil-accent mil-mb-15">Link</p>
                  <h4 className="mil-up">Contact Modern</h4>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="mil-pagination-panel">
          <ul className="mil-pagination-numbers">
            <li className="mil-active">
              <a href="#.">01</a>
            </li>
            <li>
              <a href="#.">02</a>
            </li>
            <li>
              <a href="#.">03</a>
            </li>
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
