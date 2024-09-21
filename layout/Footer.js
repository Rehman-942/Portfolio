import { Fragment, useState } from "react";

const Footer = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    const email = "rehmanafzal942@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);

      // Hide the tooltip after 2 seconds
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    });
  };
  return (
    <Fragment>
      <div className="mil-social-panel">
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/rehman-afzal-1285b320b/" target="_blank">Linkedin</a>
          </li>
          <li>
            <a href="https://github.com/Rehman-942" target="_blank" >Github</a>
          </li>
          <li className="email-copy-container">
            <button className="email-button" onClick={copyEmail}>
              Email
            </button>
            <span className="email-tooltip">
             {copied ? 'Email Copied!' : 'rehmanafzal942@gmail.com' }
            </span>
          </li>
        </ul>
      </div>
      <div className="mil-footer">
        <p className="mil-upper">
          © {new Date().getFullYear()}{" "}
          <span className="mil-accent">Rehman Afzal</span> All rights reserved.
        </p>
      </div>
    </Fragment>
  );
};
export default Footer;
