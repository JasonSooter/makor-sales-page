import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <section id="footer">
        <ul className="icons">
          <li>
            <a
              href="https://www.twitter.com/functionalStoic"
              className="icon alt fa-twitter"
              target="_blank"
              rel="noreferrer"
            >
              <span className="label">Twitter</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/jasonsooter"
              className="icon alt fa-instagram"
              target="_blank"
              rel="noreferrer"
            >
              <span className="label">Instagram</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.github.com/functionalStoic"
              className="icon alt fa-github"
              target="_blank"
              rel="noreferrer"
            >
              <span className="label">GitHub</span>
            </a>
          </li>
          <li>
            <a
              href="mailto:jason.sooter@gmail.com"
              className="icon alt fa-envelope"
              target="_blank"
              rel="noreferrer"
            >
              <span className="label">Email</span>
            </a>
          </li>
        </ul>
        <ul className="copyright">
          <li>&copy; The Organic Bloom</li>
          <li>
            Design: <a href="http://www.jasonsooter.com">Jason Sooter</a>
          </li>
        </ul>
      </section>
    );
  }
}

export default Footer;
