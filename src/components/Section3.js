import React from 'react';

export default function SectionThree() {
  return (
    <section id="three" className="main style1 special">
      <div className="grid-wrapper">
        <div className="col-12">
          <header className="major">
            <h2>Highlights</h2>
          </header>
          <p>Here is more info to help you make your decision</p>
        </div>

        <div className="col-4">
          <h3>Technical Specs</h3>
          <p>Check out the Technical Specs for more information</p>
          <ul className="actions">
            <li>
              <a href="#five" className="button">
                More
              </a>
            </li>
          </ul>
        </div>
        <div className="col-4">
          <h3>Photo Gallery</h3>
          <p>I've taken photos of all the major aspects of the machine.</p>
          <ul className="actions">
            <li>
              <a href="#four" className="button">
                More
              </a>
            </li>
          </ul>
        </div>
        <div className="col-4">
          <h3>Key Features</h3>
          <p>Features that really shine and show up in production</p>
          <ul className="actions">
            <li>
              <a href="#five" className="button">
                More
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
