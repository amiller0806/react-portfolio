import React from "react";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
// import Container from "react-bootstrap/Container";



import project1 from "../images/concert-catalog.jpg";
import project2 from "../images/shoppers.jpg";

export default function Portfolio() {
  return (
    <main id="portfolio" className="page-content container">
      <h2 className="page-heading"> Portfolio </h2>

      <CardGroup>
        <Row>
          <Col>
            {/* PROJECT 1: Concerts Near Me */}
            <Card>
              <a href="https://amiller0806.github.io/java-near-me/">
                <Card.Img
                  className="projects"
                  variant="top"
                  src={project1}
                  height="100px"
                  width="160"
                />
              </a>
              <Card.Body>
                <Card.Title>Concerts Near Me </Card.Title>

                <Card.Footer>
                  <div className="tech">
                    <div className="techs"> Technologies: </div> CSS, HTML, JS,
                    Third Party API: Ticketmaster API
                  </div>
                  <br></br>

                  <a
                    href="https://github.com/amiller0806/java-near-me"
                    target="_blank"
                  >
                    {" "}
                    Github Repository
                  </a>
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>
          {/* PROJECT 2 :Shoppers */}
          <Col>
            <Card>
              <a href="https://amiller0806.github.io/java-near-me/">
                <Card.Img
                  className="projects"
                  variant="top"
                  src={project1}
                  height="100px"
                  width="160"
                />
              </a>
              <Card.Body>
                <Card.Title>Shoppers </Card.Title>
                <Card.Text>
                  NOTE: Some features on the deployed version do not work at the
                  moment, but work locally. These features are in the process of
                  being fixed
                </Card.Text>
                <Card.Footer>
                  <div className="tech">
                    <div className="techs"> Technologies: </div> CSS, HTML, JS,
                    Third Party API
                  </div>
                  <br></br>

                  <a
                    href="https://github.com/amiller0806/java-near-me"
                    target="_blank"
                  >
                    {" "}
                    Github Repository
                  </a>
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* PROJECT 3: Shoppers */}
        <Row>
          <Col>
            <Card>
              <a href="https://amiller0806.github.io/java-near-me/">
                <Card.Img
                  className="projects"
                  variant="top"
                  src={project1}
                  height="100px"
                  width="160"
                />
              </a>
              <Card.Body>
                <Card.Title>Deployed Skincare </Card.Title>
                <Card.Text>
                  NOTE: Some features on the deployed version do not work at the
                  moment, but work locally. These features are in the process of
                  being fixed
                </Card.Text>
                <Card.Footer>
                  <div className="tech">
                    <div className="techs"> Technologies: </div> CSS, HTML, JS,
                    Third Party API
                  </div>
                  <br></br>

                  <a
                    href="https://github.com/amiller0806/java-near-me"
                    target="_blank"
                  >
                    {" "}
                    Github Repository
                  </a>
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>
          <br></br>

          {/* PROJECT 4: ORM Sql */}
          <Col>
            <Card>
              <a href="https://amiller0806.github.io/java-near-me/">
                <Card.Img
                  className="projects"
                  variant="top"
                  src={project1}
                  height="100px"
                  width="160"
                />
              </a>
              <Card.Body>
                <Card.Title>Deployed Skincare </Card.Title>
                <Card.Text>
                  NOTE: Some features on the deployed version do not work at the
                  moment, but work locally. These features are in the process of
                  being fixed
                </Card.Text>
                <Card.Footer>
                  <div className="tech">
                    <div className="techs"> Technologies: </div> CSS, HTML, JS,
                    Third Party API
                  </div>
                  <br></br>

                  <a
                    href="https://github.com/amiller0806/java-near-me"
                    target="_blank"
                  >
                    {" "}
                    Github Repository
                  </a>
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* PROJECT 5: ORM Sql */}
        <Row>
          <Col>
            <Card>
              <a href="https://amiller0806.github.io/java-near-me/">
                <Card.Img
                  className="projects"
                  variant="top"
                  src={project1}
                  height="100px"
                  width="160"
                />
              </a>
              <Card.Body>
                <Card.Title>lajfdkshf </Card.Title>
                <Card.Text>
                  <div className="tech">
                    <div className="techs"> Technologies: </div> CSS, HTML, JS,
                    Third Party API
                  </div>
                  <br></br>

                  <a
                    href="https://github.com/amiller0806/java-near-me"
                    target="_blank"
                  >
                    {" "}
                    Github Repository
                  </a>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* PROJECT 6: ORM Sql */}
          <Col>
            <Card>
              <a href="https://amiller0806.github.io/java-near-me/">
                <Card.Img
                  className="projects"
                  variant="top"
                  src={project1}
                  height="100px"
                  width="160"
                />
              </a>
              <Card.Body>
                <Card.Title>Deployed Skincare </Card.Title>
                <Card.Text>
                  NOTE: Some features on the deployed version do not work at the
                  moment, but work locally. These features are in the process of
                  being fixed
                </Card.Text>
                <Card.Footer>
                  <div className="tech">
                    <div className="techs"> Technologies: </div> CSS, HTML, JS,
                    Third Party API
                  </div>
                  <br></br>

                  <a
                    href="https://github.com/amiller0806/java-near-me"
                    target="_blank"
                  >
                    {" "}
                    Github Repository
                  </a>
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </CardGroup>
    </main>
  );
}
