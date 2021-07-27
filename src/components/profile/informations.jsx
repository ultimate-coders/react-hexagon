import { Container, Row, Col, Button } from "react-bootstrap";
import { connect } from "react-redux";

import "./info.scss";
const ProfileInfo = (props) => {
console.log("🚀 ~ file: informations.jsx ~ line 6 ~ ProfileInfo ~ props", props)
  let user = {
    follower: {
      count: 158,
    },
    following: {
      count: 158,
    },
    name: "youjin phitsharbet",
  };

  let profile = {
    name: "youjin phitsharbet",
    isFollow: true,
  };

  // if(user.name===profile.name){

  // }else
  return (
    <>
      <Container>
        <Row>
          <Col md="auto">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHZMTLWh4KIE7ogS6hfTgeKuTVTPxlM1qe6Q&usqp=CAU"
              alt=""
              className="profile-img"
            />
          </Col>
          <Col md="auto">
            <br />
            <br />
            <p style={{ padding: "10px", width: "350px" }}>
              youjin phitsharbet
            </p>
            <p style={{ padding: "10px", width: "350px" }}>category</p>
            <p style={{ padding: "10px", width: "350px" }}>
              description about user
            </p>
          </Col>
          <Col md="auto">
            <br />
            <ul id='info'>
              <li>
                {" "}
                <Button style={{ color: "#529471" }} variant="light">
                  follower : {user.follower.count}
                </Button>
              </li>
              <li>
                {" "}
                <Button style={{ color: "#529471" }} variant="light">
                  following :{user.following.count}{" "}
                </Button>
                {/* <br/> */}
              </li>
            </ul>
            <br />
            <ul id='info'>
              <li>
                {profile.name === user.name ? (
                  <Button style={{ color: "#529471" }} variant="light">
                    Edit
                  </Button>
                ) : (
                  <Button style={{ color: "#529471" }} variant="light">
                    {profile.isFollow ? (
                      <span>unfollow</span>
                    ) : (
                      <span>follow</span>
                    )}
                  </Button>
                )}

                {/* <li>
                <Button style={{ color: "#529471" }} variant="light">
                  follow
                </Button>*/}
              </li>
            </ul>
          </Col>
        </Row>
        <br />
      </Container>
      <hr />
    </>
  );
};

// export default ProfileInfo;
const mapStateToProps = (state) => ({
  userDetails: state,
});

export default connect(mapStateToProps)(ProfileInfo);