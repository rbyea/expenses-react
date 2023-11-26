import React from "react";

const Footer = (props) => {
  const data = new Date();
  const year = data.getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-12">
            <p className="copyright-text">
              Copyright © Mini Finance {year} - Design
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
