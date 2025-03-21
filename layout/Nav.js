"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, useState } from "react";
import { Poppins } from "next/font/google";

// Poppins font import
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["900", "700"],
  display: "swap",
});

const Nav = () => {
  const pathname = usePathname();
  const [toggle, setToggle] = useState(false);

  const handleHomeClick = (e) => {
    e.preventDefault(); // Next.js default navigation roknay k liye
    window.location.href = "/"; // Home page par le janay k liye
  };

  return (
    <Fragment>
      <nav className={`${toggle ? "mil-active" : ""} ${poppins.className}`}>
        <ul>
          <li className={pathname === "/" ? "mil-active" : ""}>
            <a href="/" onClick={handleHomeClick}>Home</a>
          </li>
          <li className={pathname === "/portfolio" ? "mil-active" : ""}>
            <Link legacyBehavior href="/portfolio">
              <a>Portfolio</a>
            </Link>
          </li>
          <li className={pathname === "/contact" ? "mil-active" : ""}>
            <Link legacyBehavior href="/contact">
              <a>Contact Me</a>
            </Link>
          </li>
          <a
            className="mil-button"
            href="https://drive.google.com/file/d/1aSDSMdbiFJnDYgACL8T9A544YGr1pdlC/view?usp=sharing"
            target="_blank"
          >
            Download CV
          </a>
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
