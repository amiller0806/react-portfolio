import React from 'react';
import profilePic from '../../assets/images/ariel-miller.jpeg';


export default function About() {
    return (
      <main id="contact" className="page-content container">
        <h2 className="page-heading">About Me</h2>
        <div>
            <img className="profile" src={profilePic} alt="woman in black dress smiling"/>
        </div>
        <div className= "about-container">
          <p className = "about-text">
            Ariel Miller is a full stack web developer with a strong proficiency in HTML, CSS,
            JS, REACT, MERN stack, Sequelize, MySQL, NoSQL, MongoDB, Mongoose,
            Bootstrap, and MaterializeCSS.
          </p>
        </div>
      </main>
    );
}
