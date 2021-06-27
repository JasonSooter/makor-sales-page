import React from 'react';

export default function Header() {
  return (
    <section id="header">
      <div className="inner">
        <span className="icon major fa-home" />
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
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="demo video"
        />
        <ul className="actions">
          <li>
            <a
              aria-label="discover"
              href="#one"
              className="button scrolly"
              children="Discover"
            />
          </li>
        </ul>
      </div>
    </section>
  );
}
