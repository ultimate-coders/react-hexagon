import Image from "react-bootstrap/Image";
import { Container, Row, Col } from "react-bootstrap";
import "./info.scss";
const ProfileInfo = () => {
  return (
    <>
      <Container>
          
        <Row className="justify-content-md-center">
          <Col md="auto">
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHZMTLWh4KIE7ogS6hfTgeKuTVTPxlM1qe6Q&usqp=CAU"
              alt=""
              roundedCircle
              rounded
            />
          </Col>
          <Col md="auto">
            <br />
            <br />
            <br />
            <p>youjin phitsharbet</p>
            <li>follower</li>
            <li>following</li>

          </Col>
        </Row>
        <br/>
        
      </Container>
      <hr />
      
    </>
  );
};

export default ProfileInfo;
