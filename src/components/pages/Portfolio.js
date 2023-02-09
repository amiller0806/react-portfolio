

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
        name: "Concert Near Me",
        description: "CSS, HTML, JS, Third Party API: Ticketmaster API",
        image: project1,
        link: "https://amiller0806.github.io/java-near-me/",
        repo: "https://github.com/amiller0806/java-near-me",
      },
      {
        name: "Shoppers",
        description:
          "CSS, HTML, JS, RedCircle API, Cypress, Bootstrap, Axios, Sequelize, mySQL, Heroku, unpkg, Express JS, node.js",
        image: project2,
        link: "https://github.com/kabirfaisal1/shoppers",
        // repo: "https://github.com",
      },

      {
        name: "Deployed Skincare",
        description:
          "MERN, CSS, JavaScript, GraphQL, JWT, bcrypt, Axios, CSS Frameworks:  Bootstrap, Third-party API: RedCircle API (Target)",
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
            <h1 class="projects">My Projects</h1>
            {projects.map((projects) => (
                <Card>
                    <Card.Body>
                        <Card.Title className="name-creator">{projects.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{projects.description}</Card.Subtitle>
                  <Card.Text>
                    <a href={ projects.link} target= "_blank" rel="noreferrer">
                      <img class="project" src={projects.image} alt="project pic" />
                      </a>
              
                        
                        </Card.Text>
                        <Card.Link target="_blank" href={projects.repo}>Github Repository</Card.Link>

                    </Card.Body>
                </Card>
            ))}
        </div>
    )
}


export default Portfolio;








// import React from "react";
// import CardGroup from "react-bootstrap/CardGroup";
// import Card from "react-bootstrap/Card";
// import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";
// // import Container from "react-bootstrap/Container";



// import project1 from "../images/concert-catalog.jpg";
// import project2 from "../images/shoppers.jpg";
// import project3 from "../images/deployedSkin.jpg";
// import project4 from "../images/NoSQL-18.jpg";
// import project5 from "../images/ORM-E-Commerce.jpg";

// import project6 from "../images/EmployeeTracker.jpg";
// export default function Portfolio() {
//   return (
//     <main id="portfolio" className="page-content container">
//       <h2 className="page-heading"> Portfolio </h2>

//       <CardGroup>
//         <Row>
//           <Col>
//             {/* PROJECT 1: Concerts Near Me */}
//             <Card>
//               <a href="https://amiller0806.github.io/java-near-me/">
//                 <Card.Img
//                   className="projects"
//                   variant="top"
//                   src={project1}
//                   height="100px"
//                   width="160"
//                 />
//               </a>
//               <Card.Body>
//                 <Card.Title>Concerts Near Me </Card.Title>

//                 <Card.Footer>
//                   <div className="tech">
//                     <div className="techs"> Technologies: </div> CSS, HTML, JS,
//                     Third Party API: Ticketmaster API
//                   </div>
//                   <br></br>

//                   <a
//                     href="https://github.com/amiller0806/java-near-me"
//                     target="_blank"
//                     rel="noreferrer"
//                   >
//                     {" "}
//                     Github Repository
//                   </a>
//                 </Card.Footer>
//               </Card.Body>
//             </Card>
//           </Col>

//           {/* PROJECT 2 :Shoppers */}
//           <Col>
//             <Card>
//               <a href="https://amiller0806.github.io/java-near-me/">
//                 <Card.Img
//                   className="projects"
//                   variant="top"
//                   src={project2}
//                   height="100px"
//                   width="160"
//                 />
//               </a>
//               <Card.Body>
//                 <Card.Title>Shoppers </Card.Title>
//                 <Card.Text>
//                   Group member who hosts/deployed the application seems to have
//                   removed this - Please utilize the appplication via the
//                   repository
//                 </Card.Text>
//                 <Card.Footer>
//                   <div className="tech">
//                     <div className="techs"> Technologies: </div> CSS, HTML, JS,
//                     RedCircle API, Cypress, Bootstrap, Axios, Sequelize, mySQL,
//                     Heroku, unpkg, Express JS, node.js
//                   </div>
//                   <br></br>

//                   <a
//                     href="https://github.com/kabirfaisal1/shoppers"
//                     target="_blank"
//                     rel="noreferrer"
//                   >
//                     {" "}
//                     Github Repository
//                   </a>
//                 </Card.Footer>
//               </Card.Body>
//             </Card>
//           </Col>
//         </Row>

//         {/* PROJECT 3: Deployed Skincare */}
//         <Row>
//           <Col>
//             <Card>
//               <a href="https://whispering-wildwood-03481.herokuapp.com/">
//                 <Card.Img
//                   className="projects"
//                   variant="top"
//                   src={project3}
//                   height="100px"
//                   width="160"
//                 />
//               </a>
//               <Card.Body>
//                 <Card.Title>Deployed Skincare </Card.Title>
//                 <Card.Text>
//                   NOTE: Some features on the deployed version do not work at the
//                   moment, but work locally. These features are in the process of
//                   being re-fixed
//                 </Card.Text>
//                 <Card.Footer>
//                   <div className="tech">
//                     <div className="techs"> Technologies: </div> MERN, CSS,
//                     JavaScript, GraphQL, JWT, bcrypt, Axios, CSS Frameworks:
//                     Bootstrap, Third-party API: RedCircle API (Target)
//                   </div>
//                   <br></br>

//                   <a
//                     href="https://github.com/valkim55/project-three"
//                     target="_blank"
//                     rel="noreferrer"
//                   >
//                     {" "}
//                     Github Repository
//                   </a>
//                 </Card.Footer>
//               </Card.Body>
//             </Card>
//           </Col>
//           <br></br>

//           {/* PROJECT 4: Social Network API NoSQL */}
//           <Col>
//             <Card>
//               <a href="https://user-images.githubusercontent.com/109996105/216675762-9a0788f4-8f4d-40a0-a5d4-d996b7c89d7e.mp4">
//                 <Card.Img
//                   className="projects"
//                   variant="top"
//                   src={project4}
//                   height="100px"
//                   width="160"
//                 />
//               </a>
//               <Card.Body>
//                 <Card.Title>Social Network API(NoSQL) </Card.Title>
//                 <Card.Text>
//                   Please click the picture to see a video demonstration that
//                   illustrates the application's functionality
//                 </Card.Text>
//                 <Card.Footer>
//                   <div className="tech">
//                     <div className="techs"> Technologies: </div> Express.js,
//                     MongoDB, Mongoose ODM
//                   </div>
//                   <br></br>

//                   <a
//                     href="https://github.com/amiller0806/Social-Network-API-NoSQL"
//                     target="_blank"
//                     rel="noreferrer"
//                   >
//                     {" "}
//                     Github Repository
//                   </a>
//                 </Card.Footer>
//               </Card.Body>
//             </Card>
//           </Col>
//         </Row>

//         {/* PROJECT 5: ORM Sql */}
//         <Row>
//           <Col>
//             <Card>
//               <a href="https://drive.google.com/file/d/1Xss4LJd9OOEwxUQnkr5L9g8iyyCS1w1U/view">
//                 <Card.Img
//                   className="projects"
//                   variant="top"
//                   src={project5}
//                   height="100px"
//                   width="160"
//                 />
//               </a>
//               <Card.Body>
//                 <Card.Title>ORM E-Commerce </Card.Title>

//                 <Card.Footer>
//                   <div className="tech">
//                     <div className="techs"> Technologies: </div> Express.js,
//                     Sequelize, MySQL
//                   </div>
//                   <br></br>

//                   <a
//                     href="https://github.com/amiller0806/ORM-E-Commerce-Master"
//                     target="_blank"
//                     rel="noreferrer"
//                   >
//                     {" "}
//                     Github Repository
//                   </a>
//                 </Card.Footer>
//               </Card.Body>
//             </Card>
//           </Col>

//           {/* PROJECT 6: Employee Tracker */}
//           <Col>
//             <Card>
//               <a href="https://drive.google.com/file/d/17jTbWLQb6_P_fsPvk9EDj2ZqUcGw4epn/view">
//                 <Card.Img
//                   className="projects"
//                   variant="top"
//                   src={project6}
//                   height="100px"
//                   width="160"
//                 />
//               </a>
//               <Card.Body>
//                 <Card.Title>Employee Tracker</Card.Title>

//                 <Card.Footer>
//                   <div className="tech">
//                     <div className="techs"> Technologies: </div> CNode.js,
//                     Inquirer, and MySQL
//                   </div>
//                   <br></br>

//                   <a
//                     href="https://github.com/amiller0806/SQL-Employee-Tracker "
//                     target="_blank"
//                   >
//                     {" "}
//                     Github Repository
//                   </a>
//                 </Card.Footer>
//               </Card.Body>
//             </Card>
//           </Col>
//         </Row>
//       </CardGroup>
//     </main>
//   );
// }
