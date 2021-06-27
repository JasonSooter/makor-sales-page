import React from 'react';
import makorHero from '../assets/images/makor_q_one_hero.jpg';

export default function Section1() {
  return (
    <section id="one" className="main style1">
      <div className="grid-wrapper">
        <div className="col-6">
          <header className="major">
            <h2>Excellent shape with light use</h2>
          </header>
          <p>
            Our machine was purchased from Stiles Machinery and put into service
            in February of 2014. We have used it to spray only clear on a
            picture frame line we offer. The finish it provides is of a superior
            quality and is ready for high production and all day use. Due to our
            use being only for clear. It is very clean and shows very minimal
            use compared to common used spray machines
          </p>
        </div>
        <div className="col-6">
          <span className="image fit">
            <img src={makorHero} alt="" />
          </span>
        </div>
      </div>
    </section>
  );
}
