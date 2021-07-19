import React from "react";
// import { connect } from "react-redux";
// import Heder from "../header";
import "./info.scss";

import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
function ProfilePosts(props) {
  let arr = [
    {
      userPict:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHZMTLWh4KIE7ogS6hfTgeKuTVTPxlM1qe6Q&usqp=CAU",
      userName: "youjin phitsharbet",
      postCategory: "category",
      text: "Some quick example text to build on the card title and make up the bulk of the card`s content.",
      postImg:
        "https://s34506.pcdn.co/wp-content/uploads/2021/06/fathersdaypinecone.done1b.690.jpg",
    },
    {
      userPict:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHZMTLWh4KIE7ogS6hfTgeKuTVTPxlM1qe6Q&usqp=CAU",
      userName: "youjin phitsharbet",
      postCategory: "category",
      text: "Some quick example text to build on the card title and make up the bulk of the card`s content.",
      postImg:
        "https://t1.thpservices.com/previewimage/gallil/b772287f406aa8a7caf466a75c2d6436/esy-009014594.jpg",
    },
  ];
  return (
    <>
      <Container>
        {arr.map((arr) => {
          return (
            <div key={arr.postImg}>
              <Row>
                <br />
                <Col md="auto">
                  <img className="small-img" src={arr.userPict} alt="" />
                </Col>
                <Col md="auto">
                  <br />
                  <p>{arr.userName}</p>
                  {/* <p>category</p> */}
                </Col>
              </Row>
              <Row>
                <Col md="auto">
                  <Card style={{ width: "51rem" }}>
                    <Card.Body>
                      <Card.Title>{arr.postCategory}</Card.Title>
                      <Card.Text>{arr.text}</Card.Text>
                      <br />
                      <Card.Img className="post-img" src={arr.postImg} />
                      {/* <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link> */}
                    </Card.Body>
                    <Card.Footer>
                      <Button variant="light">Go somewhere</Button>
                      <Button variant="light" className="btn-space" >
                        Go somewhere
                      </Button>
                      <Form>
                      <br/>
                        
                          <Form.Control placeholder='comment...'/>
                      </Form>
                    </Card.Footer>
                  </Card>
                </Col>
              </Row>
              {/* <Row >
          <Col md="auto">
            <Button variant="success">Go somewhere</Button>
            <Button className="btn-space" variant="success">
              Go somewhere
            </Button>
          </Col>
        </Row> */}

              <br />
              <br />
            </div>
          );
        })}
        {/* <Row >
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
        <Row >
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
        </Row> */}
      </Container>
    </>
  );
}

export default ProfilePosts;
