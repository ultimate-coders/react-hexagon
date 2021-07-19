import React from "react";
// import { connect } from "react-redux";
// import Heder from "../header";
import "./info.scss";

import { Container, Row, Col, Card, Button } from "react-bootstrap";
function ProfilePosts(props) {
  return (
    <>
      <Container>
        <Row className="justify-content-md-center">
          <br />
          <Col md="auto">
            <img
              className="small-img"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHZMTLWh4KIE7ogS6hfTgeKuTVTPxlM1qe6Q&usqp=CAU"
              alt=""
              roundedCircle
              rounded
            />
          </Col>
          <Col md="auto">
            <p>youjin phitsharbet</p>
            <p>category</p>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <Card style={{ width: "50rem" }}>
              <Card.Body>
                <Card.Title>category</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Card.Img
                  variant="top"
                  src="https://hips.hearstapps.com/delish/assets/18/07/1518475314-vanilla-cupcake-horizontal-.jpg"
                />
                {/* <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link> */}
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <Button variant="success">Go somewhere</Button>
            <Button className="btn-space" variant="success">
              Go somewhere
            </Button>
          </Col>
        </Row>

        <br />
        <br />
        <Row className="justify-content-md-center">
          <Col md="auto">
            <img
              className="small-img"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHZMTLWh4KIE7ogS6hfTgeKuTVTPxlM1qe6Q&usqp=CAU"
              alt=""
              roundedCircle
              rounded
            />
          </Col>
          <Col md="auto">
            <p>youjin phitsharbet</p>
            <p>category</p>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <Card style={{ width: "50rem" }}>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Card.Img src="https://cdn.eventfinda.co.nz/uploads/events/transformed/1490831-653168-34.png?v=4" />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ProfilePosts;
