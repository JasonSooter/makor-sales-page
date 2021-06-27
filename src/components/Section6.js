import React from 'react';

export default function Section6() {
  return (
    <section id="six" className="main style special">
      <div className="container">
        <header className="major">
          <h1>Priced at $98k obo</h1>
          <br />
          <h3>
            Don't forget the savings from the{' '}
            <a
              style={{ textDecoration: 'underline' }}
              href="http://www.section179.org/section_179_deduction/"
              target="_blank"
              rel="noreferrer"
            >
              Section 179 Tax deduction
            </a>
            ! (up to $35k)
          </h3>
        </header>
        <p>I'm glad to help arrange and package for shipping and pickup</p>
        <h2>Ready to take the next step?</h2>
        <ul className="actions uniform">
          <li>
            <a href="mailto:jason.sooter@gmail.com" className="button special">
              Contact Me
            </a>
          </li>
          <li>
            Jason Sooter
            <br />
            The Organic Bloom
            <br />
            918.770.3878
            <br />
            jason.sooter@gmail.com
          </li>
        </ul>
      </div>
    </section>
  );
}
