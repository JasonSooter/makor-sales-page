import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import PhotoGallery from '../components/PhotoGallery';

import makorHero from '../assets/images/makor_q_one_hero.jpg';
import machine1 from '../assets/images/machinePictures/Makor_Q-ONE_1.jpg';
import machine13 from '../assets/images/machinePictures/Makor_Q-ONE_13.jpg';
import machine22 from '../assets/images/machinePictures/Makor_Q-ONE_22.png';

import pic01 from '../assets/images/machinePictures/makor_q_one_1.jpg';
import pic02 from '../assets/images/pic02.jpg';
import pic03 from '../assets/images/pic03.jpg';
import pic04 from '../assets/images/pic04.jpg';

class Homepage extends React.Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title;

    return (
      <div>
        <Helmet title={siteTitle} />

        <section id="one" className="main style1">
          <div className="grid-wrapper">
            <div className="col-6">
              <header className="major">
                <h2>Excellent shape with light use</h2>
              </header>
              <p>
                Our machine was purchased from Stiles Machinery and put into
                service in February of 2014. We have used it to spray only clear
                on a picture frame line we offer. The finish it provides is of a
                superior quality and is ready for high production and all day
                use. Due to our use being only for clear. It is very clean and
                shows very minimal use compared to common used spray machines
              </p>
            </div>
            <div className="col-6">
              <span className="image fit">
                <img src={makorHero} alt="" />
              </span>
            </div>
          </div>
        </section>

        <section id="two" className="main style2">
          <div className="grid-wrapper">
            <div className="col-6">
              <span className="image fit">
                <img src={pic01} alt="" />
              </span>
            </div>
            <div className="col-6">
              <header className="major">
                <h2>$50,000+ Savings vs. New Machine</h2>
              </header>
              <p>
                The purchase of a new reciprocating spray machine is not as
                straight-forward as it should be. Additional expenses will
                include duct work for ventilation(included), a minimum of 4
                automatic sprayers from Kremlin, etc (included), various
                electrical necessities(480v transformer included along with
                breakers and wiring). You will need to find a source for paper
                rolls (we've included a pallet of 4)
              </p>
            </div>
          </div>
        </section>
        <section id="three" className="main style1 special">
          <div className="grid-wrapper">
            <div className="col-12">
              <header className="major">
                <h2>Highlights</h2>
              </header>
              <p>Here is some more info to help you make your decision</p>
            </div>

            <div className="col-4">
              <span className="image fit">
                <img src={machine22} alt="" />
              </span>
              <h3>Technical Specs</h3>
              <p>Check out the Technical Specs for more information</p>
              <ul className="actions">
                <li>
                  <a
                    href="https://www.stilesmachinery.com/files/assets/files/1306442070_98-993-00029.pdf"
                    className="button"
                    target="_blank"
                  >
                    More
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-4">
              <span className="image fit">
                <img src={machine13} alt="" />
              </span>
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
              <span className="image fit">
                <img src={machine1} alt="" />
              </span>
              <h3>Why we're selling it</h3>
              <p>
                It's the tought but right decision for us. The part of our
                business using it has declined
              </p>
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
        <PhotoGallery />
        <section id="five" className="main style1 special">
          <div className="container">
            <header className="major">
              <h2>Priced at $97,000</h2>
              <h2>Ready to take the next step?</h2>
            </header>
            <p>I'll be happpy to help you with the process.</p>
            <ul className="actions uniform">
              <li>
                <a
                  href="mailto:jason.sooter@gmail.com"
                  className="button special"
                >
                  Contact Me
                </a>
              </li>
              {/* <li>
                <a href="#" className="button">
                  See Actual Quote from Stiles
                </a>
              </li> */}
            </ul>
          </div>
        </section>
      </div>
    );
  }
}

Homepage.propTypes = {
  route: React.PropTypes.object
};

export default Homepage;

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
