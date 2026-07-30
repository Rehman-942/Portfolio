"use client";
import Link from "next/link";
import { Fragment, useState } from "react";

/* ─── All projects ───────────────────────────────────────────────────────── */
const ALL_PROJECTS = [
  {
    category: "website",
    href: "https://opus.ai/",
    img: "/img/portfolio/1.png",
    imgAlt: "Opus.ai",
    label: "AI based Website",
    title: "OPUS.ai",
  },
  {
    category: "extention",
    href: "https://chromewebstore.google.com/detail/comn/bohnipoebbbnfangppfemibbahldcalp?hl=en-GB&utm_source=ext_sidebar",
    img: "/img/portfolio/4.png",
    imgAlt: "COMN",
    label: "Chrome Extension",
    title: "COMN",
  },
  {
    category: "saas",
    href: "https://www.zolaratechsystem.com/",
    img: "/img/portfolio/33.png",
    imgAlt: "Zolara",
    label: "CRM - SAAS",
    title: "Zolara Tech System",
  },
  {
    category: "website",
    href: "https://draperuniversity.com/",
    img: "/img/portfolio/2.jpg",
    imgAlt: "DraperUniversity",
    label: "Educational Website",
    title: "DraperUniversity",
  },
  {
    category: "website",
    href: "https://parsecinstitute.org/",
    img: "/img/portfolio/55.jpg",
    imgAlt: "ParsecInstitute",
    label: "Website",
    title: "ParsecInstitute",
  },
  {
    category: "Animation",
    href: "https://www.upwork.com/freelancers/~01d189b12f39474084?p=1892244867826491392",
    img: "/img/portfolio/image (2).png",
    imgAlt: "Automated Data Processing",
    label: "Automation",
    title: "Automated Data Processing",
  },
  {
    category: "Animation",
    href: "https://www.upwork.com/freelancers/~01d189b12f39474084?p=1894790776275922944",
    img: "/img/portfolio/image (1).png",
    imgAlt: "Automated Lead Management",
    label: "Automation",
    title: "Automated Lead Management",
  },
  {
    category: "Animation",
    href: "https://www.upwork.com/freelancers/~01d189b12f39474084?p=1894770979516788736",
    img: "/img/portfolio/image (2).png",
    imgAlt: "Social Media Automation",
    label: "Automation",
    title: "Social Media Automation",
  },
  {
    category: "saas",
    href: "https://aidream.work/",
    img: "/img/portfolio/44.jpg",
    imgAlt: "AIdream",
    label: "SAAS Web App",
    title: "AIdream",
  },
];

const PAGE_SIZE = 6;

/*
  Offset pattern: positions 2, 5, 8, 11... (always the middle column in a 3-col grid)
  Formula: globalIndex % 3 === 1
*/
const shouldOffset = (globalIndex) => globalIndex % 3 === 1;

/* ─── Responsive CSS injected once ─────────────────────────────────────── */
if (typeof document !== "undefined") {
  // Always remove and recreate so hot-reloads pick up the latest CSS
  const existing = document.getElementById("pf-grid-styles");
  if (existing) existing.remove();
  const s = document.createElement("style");
  s.id = "pf-grid-styles";
  s.textContent = `
      .pf-stagger-grid {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        column-gap: 30px;
        row-gap: 10px;
        align-items: start;
      }
      .pf-card-offset {
        margin-top: 30px;
        transition: margin 0.3s ease;
      }
      @media (max-width: 767px) {
        .pf-stagger-grid {
          grid-template-columns: 1fr;
          column-gap: 0;
          row-gap: 10px;
        }
        .pf-card-offset {
          margin-top: 0;
        }
        .pf-pagination-numbers {
          display: none !important;
        }
      }
    `;
  document.head.appendChild(s);
}

/* ─── Single project card ────────────────────────────────────────────────── */
const ProjectCard = ({ project, globalIndex }) => (
  <div className={shouldOffset(globalIndex) ? "pf-card-offset" : ""}>
    <Link legacyBehavior href={project.href} passHref>
      <a
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <div className={`mil-portfolio-item mil-long-item mil-mb-60 ${project.category}`}>
          <div className="mil-cover">
            <img src={project.img} alt={project.imgAlt} />
            <div className="mil-hover-link">
              <i className="fas fa-link" />
            </div>
          </div>
          <div className="mil-project-descr">
            {project.label && (
              <p className="mil-upper mil-accent mil-mb-15">{project.label}</p>
            )}
            <h4 className="mil-up">{project.title}</h4>
          </div>
        </div>
      </a>
    </Link>
  </div>
);

/* ─── Main component ─────────────────────────────────────────────────────── */
const PortfolioIsotope = () => {
  const [filterKey, setFilterKey] = useState("*");
  const [currentPage, setCurrentPage] = useState(1);

  /* Filter */
  const filtered =
    filterKey === "*"
      ? ALL_PROJECTS
      : ALL_PROJECTS.filter((p) => p.category === filterKey);

  /* Paginate */
  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const pageStart = (currentPage - 1) * PAGE_SIZE;
  const paginated = filtered.slice(pageStart, pageStart + PAGE_SIZE);

  /* Handlers */
  const handleFilterChange = (key) => (e) => {
    e.preventDefault();
    setFilterKey(key);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => (e) => {
    e.preventDefault();
    setCurrentPage(page);
    document
      .querySelector(".mil-portfolio-stagger-grid")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const activeBtn = (value) => (value === filterKey ? "mil-current" : "");
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <Fragment>
      {/* ── Filter bar ── */}
      <div className="mil-filter">
        <div className="container">
          <ul className="mil-filter-links mil-mb-30">
            {[
              { key: "*",         label: "All" },
              { key: "saas",      label: "SAAS" },
              { key: "website",   label: "Website" },
              { key: "extention", label: "Chrome Extension" },
              { key: "Animation", label: "Automation" },
            ].map(({ key, label }) => (
              <li key={key}>
                <a
                  href="#"
                  className={`c-pointer ${activeBtn(key)}`}
                  onClick={handleFilterChange(key)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── 3-column stagger grid ── */}
      <div className="container">
        <div className="pf-stagger-grid mil-portfolio-stagger-grid mil-mb-30">
          {paginated.map((project, i) => {
            const globalIndex = pageStart + i;
            return (
              <ProjectCard
                key={`${project.href}-${globalIndex}`}
                project={project}
                globalIndex={globalIndex}
              />
            );
          })}
        </div>

        {/* ── Pagination ── */}
        <div className="mil-pagination-panel">
          <ul
            className="mil-pagination-numbers pf-pagination-numbers"
            style={{ display: undefined }}
          >
            {pages.map((page) => (
              <li key={page} className={page === currentPage ? "mil-active" : ""}>
                <a href="#" onClick={handlePageChange(page)}>
                  {String(page).padStart(2, "0")}
                </a>
              </li>
            ))}
          </ul>

          <div className="mil-pagination-nav">
            <div className="mil-slider-nav mil-mb-30">
              <a
                href="#"
                className="mil-prev mil-reviews-prev"
                onClick={handlePageChange(Math.max(1, currentPage - 1))}
                style={{
                  opacity: currentPage === 1 ? 0.35 : 1,
                  pointerEvents: currentPage === 1 ? "none" : "auto",
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </a>
              <a
                href="#"
                className="mil-next mil-reviews-next"
                onClick={handlePageChange(Math.min(totalPages, currentPage + 1))}
                style={{
                  opacity: currentPage === totalPages ? 0.35 : 1,
                  pointerEvents: currentPage === totalPages ? "none" : "auto",
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
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
