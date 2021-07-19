import Image from "react-bootstrap/Image";
import { Container, Row, Col ,Button} from "react-bootstrap";

import "./info.scss";
const ProfileInfo = () => {
  let user={
    follower:{
      count:158
    },
    following:{
      count:158
    },
  }
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
            <p style={{padding: '10px'}}>youjin phitsharbet</p>
            <p style={{padding: '10px'}}>category</p>
            <p style={{padding: '10px'}}>description about user</p>

            <ul>
            <li> <Button style={{color: '#529471'}} variant="light">follower : {user.follower.count}</Button></li>
            <li> <Button style={{color: '#529471'}} variant="light">following :{user.following.count} </Button></li>
            </ul>

          </Col>
        </Row>
        <br/>
        
      </Container>
      <hr />
      
    </>
  );
};

export default ProfileInfo;
