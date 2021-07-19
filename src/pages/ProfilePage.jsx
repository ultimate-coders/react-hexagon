import { Container, Row, Col } from "react-bootstrap";
import ProfileInfo from '../components/profile/informations'
import ProfilePosts from '../components/profile/posts'
const ProfilePage = () => {
  return (
    <>
      {/* <Heder/> */}
      <Container>
        <Row className="justify-content-md-center">
          <ProfileInfo/>
        </Row>
        <br/>
        <Row>
            <ProfilePosts/>
        </Row>
      </Container>
    </>
  );
};

export default ProfilePage;
