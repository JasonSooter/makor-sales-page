import React from 'react';
import Link from 'gatsby-link';

class Header extends React.Component {
  render() {
    return (
      <section id="header">
        <div className="inner">
          {/* <Link style={{ textDecoration: 'none' }} to="/">
            <span className="icon major fa-home" />
          </Link> */}
          <h1>
            Hi, I'm <strong>Jason.</strong> I'm selling our
            <br />
            Makor Q-One Reciprocating Spray Machine.
          </h1>
          <h3>
            Lightly used. Clean and in excellent shape. <br />
            Used to spray only 1 product, a pre-cat lacquer clear finish.
            <br />
            <b>$50,000+</b> savings compared with buying a new one
          </h3>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/5pyCRGgRfkc?rel=0"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
          />
          <ul className="actions">
            <li>
              <a href="#one" className="button scrolly" children="Discover" />
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default Header;
