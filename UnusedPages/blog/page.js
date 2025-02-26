"use client";
import PortfolioLayout from "@/layout/PortfolioLayout";
import { portfolioUtility } from "@/utility";
import Link from "next/link";
import { useEffect, useState } from "react";

const blogs = [
  {
    id: 1,
    title: "A Beginners Guide to MERN Stack Development",
    image: "/img/blog/11.png",
    tags: ["Teamwork", "Nature", "Landscape"],
    date: "1 - jan - 2025",
    des: "The world of web development is rapidly evolving, and full-stack development has become more accessible than ever. One of the most popular technology stacks today is MERN — a powerful combination of MongoDB, Express.js, React, and Node.js."
  },
  {
    id: 2,
    title: "Optimizing MERN Applications",
    image: "/img/blog/22.png",
    tags: ["Teamwork", "Nature", "Landscape"],
    date: "1 - Feb - 2025",
    des: "MERN stack applications need to be optimized for performance and scalability to ensure a seamless user experience. Below are some key tips to enhance your MERN applications."
  },
];

const page = () => {
  let sort = 2;
  const [active, setActive] = useState(1);
  const [state, setstate] = useState([]);
  useEffect(() => {
    portfolioUtility.pagination(".mil-blog-card", sort, active);
    let list = document.querySelectorAll(".mil-blog-card");
    setstate(portfolioUtility.getPagination(list.length, sort));
  }, [active]);

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
                News and <span className="mil-accent">articles</span>
              </p>
              <h2 className="mil-up mil-mb-30">Latest Blog</h2>
              <p className="mil-left-offset">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor <br /> incididunt ut labore et dolore magna
                aliqua.
              </p>
            </div>
            <div className="mil-blog-list mil-mb-90">
              {blogs.map((blog) => (
                <div className="mil-blog-card mil-mb-60" key={blog.id}>
                  <div className="mil-cover">
                    <Link legacyBehavior href={`/blog/${blog.id}`}>
                      <a>
                        <img src={blog.image} alt="cover" />
                      </a>
                    </Link>
                    <div className="mil-date mil-upper">{blog.date}</div>
                  </div>
                  <div className="mil-title">
                    <div>
                      <p className="mil-upper mil-mb-30">
                        <span className="mil-accent">
                          {blog.tags && blog.tags[0]}
                        </span>
                      </p>
                      <h3 className="mil-up mil-mb-30">{blog.title}</h3>
                    </div>
                    <div>
                      <Link legacyBehavior href={`/blog/${blog.id}`}>
                        <a className="mil-button mil-type-2">Read more</a>
                      </Link>
                    </div>
                  </div>
                  <div className="mil-card-text">
                    <p>
                    {blog.des}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mil-pagination-panel">
              <ul className="mil-pagination-numbers">
                {state &&
                  state.map((s, i) => (
                    <li className={`${active === s ? "mil-active" : ""}`} key={`paginatio-item-${i}`}>
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setActive(s);
                        }}
                      >
                        {s > 9 ? s : `0${s}`}
                      </a>
                    </li>
                  ))}
              </ul>
              <div className="mil-pagination-nav">
                <div className="mil-slider-nav mil-mb-30">
                  <a
                    href="#."
                    className="mil-prev mil-reviews-prev"
                    onClick={(e) => {
                      e.preventDefault();
                      setActive(active === 1 ? 1 : active - 1);
                    }}
                  >
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
                  <a
                    href="#."
                    className="mil-next mil-reviews-next"
                    onClick={(e) => {
                      e.preventDefault();
                      setActive(
                        active === state.length ? state.length : active + 1
                      );
                    }}
                  >
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
        </div>
      </div>
    </PortfolioLayout>
  );
};
export default page;
