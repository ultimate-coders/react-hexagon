import { Card, Container, Row, Col } from "react-bootstrap";
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import "./abousus.scss";


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center" id="footerContainer">
      <div>
        {'Copyright © '}
        <Button>
          <Link color="inherit" style={{ textDecoration: 'none' }} to="/">
            HEXAGON
          </Link>
        </Button>{' '}
        {new Date().getFullYear()}
        {'.'}
      </div>
      <br />
      <Button id="aboutUs">
        <Link color="inherit" style={{ textDecoration: 'none' }} to="/aboutus">
          ABOUT US
        </Link>
      </Button>
    </Typography>
  );
}

const AboutUs = () => {
  return (
    <>
      <div>
        <h1 id="about">Our Amazing Team </h1>
        <Container>
          <Row>
            <Col md={4}>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://f.top4top.io/p_20331e4zz1.jpg"
                />
                <Card.Body>
                  <Card.Title className="cardName">Emran Aloul</Card.Title>
                  <Card.Text>
                    <a className="link" href="https://github.com/emranaloul">
                      Github
                    </a>
                    <a
                      className="link"
                      id="right"
                      href="https://www.linkedin.com/in/emran-aloul/"
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
                  src="https://avatars.githubusercontent.com/u/74018772?v=4"
                />
                <Card.Body>
                  <Card.Title className="cardName">Anwar Abbas</Card.Title>
                  <Card.Text>
                    <a className="link" href="https://github.com/AnwarAbbass">
                      Github
                    </a>
                    <a
                      className="link"
                      id="right"
                      href="https://www.linkedin.com/in/anwarabbass/"
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
                  <Card.Title className="cardName">Wesam al-Masri</Card.Title>
                  <Card.Text>
                    <a className="link" href="https://github.com/WesamAlmasri">
                      Github
                    </a>
                    <a
                      className="link"
                      id="right"
                      href="https://www.linkedin.com/in/wesam-al-masri/"
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
                  src="https://l.top4top.io/p_203351uj31.jpg"
                />
                <Card.Body>
                  <Card.Title className="cardName">Mohammad Mesmar</Card.Title>
                  <Card.Text>
                    <a className="link" href="https://www.instagram.com/Stranger4Ever95/?fbclid=IwAR3sFtSUtxfJHjx4dshRQ9U_IS5iBYTxvBqGvCmZN-8eYBzIARKpo1hUrIw">
                      Instagram
                    </a>
                    <a
                      className="link"
                      id="right"
                      href="https://www.linkedin.com/in/mohamad-mesmar-47937a19a/"
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
                  src="https://avatars.githubusercontent.com/u/46314974?v=4"
                />
                <Card.Body>
                  <Card.Title className="cardName">Amjad Mesmar</Card.Title>
                  <Card.Text>
                    <a className="link" href="https://github.com/AmjadMesmar">
                      Github
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
      <Box mt={5}>
        <Copyright />
      </Box>
    </>
  );
};

export default AboutUs;
