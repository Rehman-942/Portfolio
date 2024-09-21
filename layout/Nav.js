"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, useState } from "react";

const Nav = () => {
  const pathname = usePathname();
  const [toggle, setToggle] = useState(false);
  return (
    <Fragment>
      <nav className={toggle ? "mil-active" : ""}>
        <ul>
          <li
            className={
              pathname.includes("index") || pathname == "/" ? "mil-active" : ""
            }
          >
            <Link legacyBehavior href="/">Home</Link>
          </li>
          {/* <li className={pathname == "/prices" ? "mil-active" : ""}>
            <Link legacyBehavior href="/prices">
              Prices
            </Link>
          </li> */}
          {/* <li className={pathname == "/portfolio" ? "mil-active" : ""}>
            <Link legacyBehavior href="/portfolio">
              Portfolio
            </Link>
          </li> */}
          {/* <li className={pathname == "/blog" ? "mil-active" : ""}>
            <Link legacyBehavior href="/blog">
              Blog
            </Link>
          </li> */}
          <li className={pathname == "/contact" ? "mil-active" : ""}>
            <Link legacyBehavior href="/contact">
              Contact Me
            </Link>
          </li>
            <a className="mil-button" href="https://drive.google.com/file/d/1aSDSMdbiFJnDYgACL8T9A544YGr1pdlC/view?usp=sharing" target="_blank">Download CV</a>
        </ul>
      </nav>
      <div
        className={`mil-menu-btn ${toggle ? "mil-active" : ""}`}
        onClick={() => setToggle(!toggle)}
      >
        <span />
      </div>
    </Fragment>
  );
};
export default Nav;
