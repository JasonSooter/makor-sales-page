import React from 'react';

import machine1 from '../assets/images/machinePictures/Makor_Q-ONE_1.jpg';
import machine2 from '../assets/images/machinePictures/Makor_Q-ONE_2.jpg';
import machine3 from '../assets/images/machinePictures/Makor_Q-ONE_3.jpg';
import machine4 from '../assets/images/machinePictures/Makor_Q-ONE_4.jpg';
import machine5 from '../assets/images/machinePictures/Makor_Q-ONE_5.jpg';
import machine8 from '../assets/images/machinePictures/Makor_Q-ONE_8.jpg';
import machine9 from '../assets/images/machinePictures/Makor_Q-ONE_9.jpg';
import machine10 from '../assets/images/machinePictures/Makor_Q-ONE_10.jpg';
import machine11 from '../assets/images/machinePictures/Makor_Q-ONE_11.jpg';
import machine12 from '../assets/images/machinePictures/Makor_Q-ONE_12.jpg';
import machine13 from '../assets/images/machinePictures/Makor_Q-ONE_13.jpg';
import machine14 from '../assets/images/machinePictures/Makor_Q-ONE_14.jpg';
import machine15 from '../assets/images/machinePictures/Makor_Q-ONE_15.jpg';
import machine17 from '../assets/images/machinePictures/Makor_Q-ONE_17.jpg';
import machine18 from '../assets/images/machinePictures/Makor_Q-ONE_18.jpg';
import machine20 from '../assets/images/machinePictures/Makor_Q-ONE_20.jpg';
import machine21 from '../assets/images/machinePictures/Makor_Q-ONE_21.jpg';

export default function PhotoGallery() {
  return (
    <section id="four" className="main style1 special">
      <div className="grid-wrapper">
        <div className="col-12">
          <header className="major">
            <h2>Photo Gallery</h2>
          </header>
          <p>Here are some close up photos to show you the machine</p>
        </div>
        <div className="col-4">
          <span className="image fit">
            <img src={machine1} alt="" />
          </span>
          <h3>Machine Model on Infeed side</h3>
          <p>The model is a Makor Q-One.</p>
        </div>
        <div className="col-4">
          <span className="image fit">
            <img src={machine2} alt="" />
          </span>
          <h3>Side of Machine</h3>
          <p>This is the whole machine, infeed on the left</p>
        </div>
        <div className="col-4">
          <span className="image fit">
            <img src={machine3} alt="" />
          </span>
          <h3>Reciprocating Spray Head</h3>
          <p>4 independent Kremlin automatic sprayers</p>
        </div>
        <div className="col-4">
          <span className="image fit">
            <img src={machine4} alt="" />
          </span>
          <h3>Kremlin Automatic Sprayer</h3>
          <p>Kremlin AVX sprayer. Qty 4</p>
        </div>
        <div className="col-4">
          <span className="image fit">
            <img src={machine8} alt="" />
          </span>
          <h3>Filter for Downdraft</h3>
          <p>Includes new filters</p>
        </div>
        <div className="col-4">
          <span className="image fit">
            <img src={machine9} alt="" />
          </span>
          <h3>High precision part reading bar</h3>
          <p>Sprayers use reading bar to spray</p>
        </div>
        <div className="col-4">
          <span className="image fit">
            <img src={machine10} alt="" />
          </span>
          <h3>Control Panel with Touch Screen</h3>
          <p>Control Panel for maintenance and running</p>
        </div>
        <div className="col-4">
          <span className="image fit">
            <img src={machine11} alt="" />
          </span>
          <h3>Outfeed Paper Roll</h3>
          <p>Paper is automatically rolled up for disposal</p>
        </div>
        <div className="col-4">
          <span className="image fit">
            <img src={machine12} alt="" />
          </span>
          <h3>Pallet of Paper Rolls</h3>
          <p>We purchase our rolls from Uline</p>
        </div>
        <div className="col-4">
          <span className="image fit">
            <img src={machine18} alt="" />
          </span>
          <h3>480 Volt Transformer</h3>
          <p>Transformer for 208V to 480V 3 Phase</p>
        </div>
        <div className="col-4">
          <span className="image fit">
            <img src={machine14} alt="" />
          </span>
          <h3>Factory Tag</h3>
          <p>Factory Tag with Serial Number</p>
        </div>
        <div className="col-4">
          <span className="image fit">
            <img src={machine15} alt="" />
          </span>
          <h3>Exhaust Fan</h3>
          <p>Downdraft exhaust fan</p>
        </div>
        <div className="col-4">
          <span className="image fit">
            <img src={machine13} alt="" />
          </span>
          <h3>Inside Machine</h3>
          <p>Controlled Environment produces excellent finish</p>
        </div>
        <div className="col-4">
          <span className="image fit">
            <img src={machine17} alt="" />
          </span>
          <h3>Exhaust Duct Work</h3>
          <p>Included with purchase</p>
        </div>
        <div className="col-4">
          <span className="image fit">
            <img src={machine2} alt="" />
          </span>
          <h3>Side of Machine</h3>
          <p>Glass Door swings up for easy access</p>
        </div>
        <div className="col-4">
          <span className="image fit">
            <img src={machine20} alt="" />
          </span>
          <h3>Breaker & Wiring</h3>
          <p>All Electrical Materials included</p>
        </div>
        <div className="col-4">
          <span className="image fit">
            <img src={machine21} alt="" />
          </span>
          <h3>Kremlin 20-50T Airmix Pump</h3>
          <p>
            Pump included -{' '}
            <a href="https://www.technospray.nl/drawings/20-50_technical_features.pdf">
              View Technical Specs
            </a>
          </p>
        </div>
        <div className="col-4">
          <span className="image fit">
            <img src={machine5} alt="" />
          </span>
          <h3>Enclosed Electrical Components</h3>
          <p>Drives and Machine controls safely enclosed</p>
        </div>
      </div>
    </section>
  );
}
