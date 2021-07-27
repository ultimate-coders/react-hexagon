import { Card, Container, Row, Col, Nav } from "react-bootstrap";
import "./abousus.scss";

const AboutUs = () => {
  return (
    <>
      <div>
        <h1 id="about">Our Amazing Team </h1>
        {/* <Container>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="https://h.top4top.io/p_2033sla401.jpg"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
      React Bootstrap
      </Navbar.Brand>
    </Container> */}
        <Container>
          <Row>
            <Col md={4}>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://avatars.githubusercontent.com/u/46314974?v=4"
                />
                <Card.Body>
                  <Card.Title>Amjad Mesmar</Card.Title>
                  <Card.Text>
                    <a className="link" href="https://github.com/AmjadMesmar">
                      github
                    </a>
                    <a
                      className="link"
                      id="right"
                      href="https://github.com/AmjadMesmar"
                    >
                      LinkedIn
                    </a>
                  </Card.Text>

   
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://l.top4top.io/p_203351uj31.jpg"
                />
                <Card.Body>
                  <Card.Title>Mohammad Mesmar</Card.Title>
                  <Card.Text>
                    <a className="link" href="https://github.com/AmjadMesmar">
                      github
                    </a>
                    <a
                      className="link"
                      id="right"
                      href="https://github.com/AmjadMesmar"
                    >
                      LinkedIn
                    </a>
                  </Card.Text>

   
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              {" "}
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://avatars.githubusercontent.com/u/71489065?v=4"
                />
                <Card.Body>
                  <Card.Title>Wesam al-Masri</Card.Title>
                  <Card.Text>
                    <a className="link" href="https://github.com/AmjadMesmar">
                      github
                    </a>
                    <a
                      className="link"
                      id="right"
                      href="https://github.com/AmjadMesmar"
                    >
                      LinkedIn
                    </a>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md={{ span: 3, offset: 1 }}>
              {" "}
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://avatars.githubusercontent.com/u/74018772?v=4"
                />
                <Card.Body>
                  <Card.Title>Anwar Abbas</Card.Title>
                  <Card.Text>
                    <a className="link" href="https://github.com/AmjadMesmar">
                      github
                    </a>
                    <a
                      className="link"
                      id="right"
                      href="https://github.com/AmjadMesmar"
                    >
                      LinkedIn
                    </a>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={{ span: 3, offset: 3 }}>
              {" "}
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://f.top4top.io/p_20331e4zz1.jpg"
                />
                <Card.Body>
                  <Card.Title>Emran Aloul</Card.Title>
                  <Card.Text>
                    <a className="link" href="https://github.com/emranaloul">
                      github
                    </a>
                    <a
                      className="link"
                      id="right"
                      href="https://github.com/AmjadMesmar"
                    >
                      LinkedIn
                    </a>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default AboutUs;
