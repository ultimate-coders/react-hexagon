import React from "react";
// import { connect } from "react-redux";
// import Heder from "../header";
import "./info.scss";
// import Reaction from './reaction'
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import Like from "./reaction";

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
              <Row className="justify-content-md-center">
                <Col md="auto">
                  <Card style={{ width: "51rem" }}>
                    <Card.Body>
                      <Row>
                        <Col md="1">
                          <img
                            className="small-img"
                            src={arr.userPict}
                            alt=""
                          />
                        </Col>
                        <Col md="5">
                          {/* <br /> */}
                          <p style={{ paddingTop: "10px" }}>{arr.userName}</p>
                        </Col>
                      </Row>
                      <br />
                      <Card.Title>{arr.postCategory}</Card.Title>
                      <Card.Text>{arr.text}</Card.Text>
                      <br />
                      <Card.Img className="post-img" src={arr.postImg} />
                    </Card.Body>
                    <Card.Footer>
                      <Row>
                        <Col md="9">
                          <Like />
                          {/* <Button variant="light">Like 1123 </Button> */}
                        </Col>
                        <Col>
                          <Button variant="light">comment 1111</Button>
                        </Col>
                      </Row>
                      <Form>
                        <br />

                        <Form.Control placeholder="comment..." />
                      </Form>
                    </Card.Footer>
                  </Card>
                </Col>
              </Row>

              <br />
              <br />
            </div>
          );
        })}
      </Container>
    </>
  );
}

export default ProfilePosts;
