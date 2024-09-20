import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/tianhao.jpeg`} alt="" />
      </Link>
      <header>
        <h2>Tianhao Yang</h2>
        <p>
          <a href="mailto:tianhaocareers@gmail.com">tianhaocareers@gmail.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I am Tianhao Yang,
        a React Developer with 4 years of experience in front-end development.
        I have worked at Tesla on the energy fulfillment team,
        where I contributed to innovative projects.
        I specialize in React, Javascript and Typescript,
        focusing on creating seamless user experiences.
      </p>
      <ul className="actions">
        <li>
          <Link to="/resume" className="button">
            Learn More
          </Link>
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
    </section>
  </section>
);

export default SideBar;
