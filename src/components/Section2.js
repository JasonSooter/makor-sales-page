import React from 'react';
import pic01 from '../assets/images/machinePictures/makor_q_one_1.jpg';

export default function SectionTwo() {
  return (
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
            straight-forward as it should be. Additional expenses will include
            duct work for ventilation(included), a minimum of 4 automatic
            sprayers from Kremlin, etc (included), various electrical
            necessities(480v transformer included along with breakers and
            wiring). You will need to find a source for paper rolls (we've
            included a pallet of 4)
          </p>
        </div>
      </div>
    </section>
  );
}
