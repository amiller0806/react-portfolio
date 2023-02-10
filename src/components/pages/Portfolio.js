

import React from "react";


import { Card } from "react-bootstrap";
import project1 from "../../assets/projects/concert-catalog.jpg";
import project2 from "../../assets/projects/shoppers.jpg";
import project3 from "../../assets/projects/deployedSkin.jpg";
import project4 from "../../assets/projects/NoSQL-18.jpg";
import project5 from "../../assets/projects/ORM-E-Commerce.jpg";

import project6 from "../../assets/projects/EmployeeTracker.jpg"; 


const Portfolio = () => {

    const projects = [
      {
        name: "HTML, CSS, Concert Near Me",
        description: " Ticketmaster API",
        image: project1,
        link: "https://amiller0806.github.io/java-near-me/",
        repo: "https://github.com/amiller0806/java-near-me",
      },
      {
        name: "Shoppers",
        description:"RedCircle API, Cypress, Bootstrap, Axios, mySQL, Heroku, Express.js",
        image: project2,
        link: "https://github.com/kabirfaisal1/shoppers",
        repo: "https://github.com/kabirfaisal1/shoppers",
      },

      {
        name: "Deployed Skincare",
        description:
          "MERN, GraphQL, JWT, bcrypt, Axios, Bootstrap, RedCircle API ",
        image: project3,
        link: "https://whispering-wildwood-03481.herokuapp.com/",
        repo: "https://github.com/valkim55/project-three",
      },

      {
        name: "Social Network API NoSQL",
        description: "Express.js, MongoDB, Mongoose ODM",
        image: project4,
        link: "https://user-images.githubusercontent.com/109996105/216675762-9a0788f4-8f4d-40a0-a5d4-d996b7c89d7e.mp4",
        repo: "https://github.com/amiller0806/Social-Network-API-NoSQL",
      },

      {
        name: "ORM Sql",
        description: " Express.js, Sequelize, MySQL",
        image: project5,
        link: "https://drive.google.com/file/d/1Xss4LJd9OOEwxUQnkr5L9g8iyyCS1w1U/viewm",
        repo: "https://github.com/amiller0806/ORM-E-Commerce-Master",
      },


      {
        name: "Employee Tracker",
        description: "Node.js,  Inquirer, and MySQL",
        image: project6,
        link: "https://drive.google.com/file/d/17jTbWLQb6_P_fsPvk9EDj2ZqUcGw4epn/view",
        repo: "https://github.com/amiller0806/SQL-Employee-Tracker",
      },
    ];



    return (
      <div>
        <h2 className="page-heading"> My Projects </h2>
        <h5 className="all-projects"> Please note that Projects Use HTML, CSS, and Javascript. If these technologies are not
          mentioned in the description, it is for the sake of brevity
        Also note that my group member has deleted the deployed application for the Shoppers project so ALL links go to the github repository instead of the application</h5>
        {projects.map((projects) => (
          <Card className="project-card">
            <Card.Body>
              <Card.Title className="project-title">{projects.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {projects.description}
              </Card.Subtitle>
              <Card.Text>
                <a href={projects.link} target="_blank" rel="noreferrer">
                  <img class="project" src={projects.image} alt="project pic" />
                </a>
              </Card.Text>
              <Card.Link target="_blank" href={projects.repo}>
                Github Repository
              </Card.Link>
            </Card.Body>
          </Card>
        ))}
      </div>
    );
}


export default Portfolio;







