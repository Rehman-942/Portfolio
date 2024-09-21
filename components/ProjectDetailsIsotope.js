"use client";
import Isotope from "isotope-layout";
import { useEffect, useRef, useState } from "react";
const ProjectDetailsIsotope = () => {
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

  return (
    <div className="mil-portfolio-grid mil-mb-60">
      <div className="grid-sizer" />
      <div className="mil-grid-item architecture">
        <div className="mil-project-img mil-long mil-mb-30">
          <a href="img/portfolio/1.jpg" className="mfp-image">
            <img src="img/portfolio/1.jpg" alt="cover" />
          </a>
        </div>
      </div>
      <div className="mil-grid-item interior">
        <div className="mil-project-img mil-square mil-mb-30">
          <a href="img/portfolio/2.jpg" className="mfp-image">
            <img src="img/portfolio/2.jpg" alt="cover" />
          </a>
        </div>
      </div>
      <div className="mil-grid-item sustainable">
        <div className="mil-project-img mil-square mil-mb-30">
          <a href="img/portfolio/3.jpg" className="mfp-image">
            <img src="img/portfolio/3.jpg" alt="cover" />
          </a>
        </div>
      </div>
      <div className="mil-grid-item interior">
        <div className="mil-project-img mil-square mil-mb-30">
          <a href="img/portfolio/4.jpg" className="mfp-image">
            <img src="img/portfolio/4.jpg" alt="cover" />
          </a>
        </div>
      </div>
      <div className="mil-grid-item sustainable">
        <div className="mil-project-img mil-square mil-mb-30">
          <a href="img/portfolio/5.jpg" className="mfp-image">
            <img src="img/portfolio/5.jpg" alt="cover" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default ProjectDetailsIsotope;
