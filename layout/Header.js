"use client";

import Link from "next/link";
import Nav from "./Nav";

const Header = () => {
  return (
    <div className="mil-top-panel" style={{ backgroundColor: "#ffffff", padding: "10px 20px" }}>
    <Link legacyBehavior href="/">
      <a className="mil-logo">
        <img src="/img/logo.png" alt="logo" />
      </a>
    </Link>
    <Nav />
  </div>
  );
};
export default Header;
