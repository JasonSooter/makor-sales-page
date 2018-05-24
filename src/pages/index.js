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

        <section id="two" className="main style1">
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
        <PhotoGallery />
        <section id="five" className="main style1">
          <div className="grid-wrapper">
            <div className="col-6">
              <header className="major">
                <h2>Technical Specs</h2>
              </header>
              <ul>
                <li>Machine Dimensions: 169" x 165" x 102" (l * w * h)</li>
                <li>Workpiece Dimensions (Min): 12" x 1" x .2" (l * w * h)</li>
                <li>
                  Workpiece Dimensions (Max): Infinite x 51" x 2.4" (l * w * h)
                </li>
                <li>Machine Weight: 7800 lb</li>
                <li>Feed Speed: 3 – 20 fpm</li>
                <li>Working Speed: 8 – 16 fpm</li>
                <li>Paper Roll Diameter: 21.5" max (8300 lineal ft) </li>
                <li>Extraction Air: 7950 cfm</li>
                <li>Pressurization Air: 3,900 x 2 cfm</li>
                <li>Feed Motor Power: 1 HP (0.75 kW) </li>
                <li>Vacuum Belt Motor: 2 HP (1.5 kW)</li>
                <li>Paper Rewind Motor: 1/4 HP (0.18 kW)</li>
                <li>Reciprocator Motor: 3 HP (2.2 kW)</li>
                <li>Exhaust Fan Motor: 7.5 HP (5.5 kW)</li>
                <li>Total Installed Power: 17.5 HP (13 kW)</li>
              </ul>
              <ul className="actions uniform">
                <li>
                  <a
                    href="https://www.stilesmachinery.com/files/assets/files/1306442070_98-993-00029.pdf"
                    className="button special"
                  >
                    More Specs
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <header className="major">
                <h2>Key Features</h2>
              </header>
              <ul>
                <li>
                  Spraying enclosure pressurized with filtered air via two
                  intake fans
                </li>
                <li>2 fluid circuits are standard</li>
                <li>Quick change gun mounting allows easy gun changes</li>
                <li>2 gun mounting plates are included</li>
                <li>Internal air flow is adjustable by means of inverters</li>
                <li>
                  Paper feeding and re-wind at ends of the machine for easy
                  access
                </li>
                <li>
                  Paper trolley is on wheels for easy removal from the machine
                </li>
                <li>
                  Paper re-wind has a self adjusting spreader to keep paper flat
                </li>
                <li>
                  Vacuum bed under paper conveyor has an independent blower
                </li>
                <li>
                  Photo diode light bar reads the location and size of part to
                  be sprayed. Conveyor advances only when parts are present
                </li>
                <li>
                  Touch screen PLC includes spraying recipes and production
                  statistics
                </li>
                <li>
                  Easily remove filter boxes on each side of machine for access
                  to conveyor and guns
                </li>
              </ul>
              <ul className="actions uniform">
                <li>
                  <a
                    href="https://www.stilesmachinery.com/files/assets/files/1306442070_98-993-00029.pdf"
                    className="button special"
                  >
                    More Specs
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section id="six" className="main style special">
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
