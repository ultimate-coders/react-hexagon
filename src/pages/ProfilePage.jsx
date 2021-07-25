import { Container, Row } from "react-bootstrap";
import ProfileInfo from "../components/profile/informations";
import Main from "../components/profile/posts";
const ProfilePage = () => {
  return (
    <>
      <header style={{ background: "#529471", color: "#eee", height: "60px" }}>
        hexagon
      </header>
      <br />
      <Container>
        <Row className="justify-content-md-center">
          <ProfileInfo />
        </Row>
        <br />
        <Row>
          <Main />
          {/* <ProfilePosts/> */}
        </Row>
      </Container>
    </>
  );
};

export default ProfilePage;
