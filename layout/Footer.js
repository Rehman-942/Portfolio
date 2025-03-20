import { Fragment, useState } from "react";
import { Poppins } from "next/font/google";

// Import Poppins Font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["900", "700"], 
  display: "swap",
});

const Footer = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    const email = "rehmanafzal942@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Hide tooltip after 2 seconds
    });
  };

  return (
    <Fragment>
      <div className={`mil-social-panel ${poppins.className}`}>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/rehman-afzal-1285b320b/" target="_blank">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com/Rehman-942" target="_blank">
              GitHub
            </a>
          </li>
          <li className="email-copy-container">
            <button className="email-button" onClick={copyEmail}>
              Email
            </button>
            <span className="email-tooltip">
              {copied ? "Email Copied!" : "rehmanafzal942@gmail.com"}
            </span>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default Footer;
