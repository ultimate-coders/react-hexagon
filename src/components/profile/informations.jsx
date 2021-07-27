import { Container, Row, Col, Button, Form } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import useAjax from "../../hooks/useAjax";
import { PROFILE_URL , FOLLOW_URL} from "../../urls";
import { useHistory } from "react-router";

import { connect } from "react-redux";
import { getToken } from "../../helpers";
import "./info.scss";
import { useSelector } from "react-redux";

const ProfileInfo = () => {
  const state = useSelector(mapStateToProps);
  const [results, reload, loading, error] = useAjax();
  const [token, setToken] = useState(null);
  const [follow, setfollow] = useState(false);
  const [profile, setProfile] = useState();
  const profile_name = window.location.pathname.split("/")[2];
  const url = `${PROFILE_URL}/${profile_name}`;
  getToken().then((results) => setToken(results));

  // console.log(token);

  useEffect(() => {
    console.log(url, token);
    (async () => {
      await reload(url, "get", null, token);
    })();
    // console.log("🚀 ~ file: MessagesPage.jsx ~ line 171 ~ useEffect ~ results", results)
  }, [token]);

  // console.log("ddddddddddddd", results);

  useEffect(() => {
    if (results && results.data.id) {
      console.log('results.data',results.data);
      setProfile(results.data);
    }else setfollow(false)
  }, [results]);

  const handelForm=(e)=>{
    e.preventDefault()
    let body={
      first_name:e.target.first_name.value,
      last_name:e.target.last_name.value,
      caption:e.target.caption.value
    }
    console.log(body);
  }

  useEffect(() => {
    if(profile){
    reload(FOLLOW_URL, "post", {following:profile.id}, token)}
  }, [follow]);

  const handelFollow =(e)=>{
      setfollow(true)
  }
  // console.log("47 user", state.user);
  if (!profile) {
    return <div>loading...</div>;
  } else
    return (
      <>
        <Container>
          <Row>
            <Col md="auto">
              <img
                src={profile.profile_picture.link}
                alt=""
                className="profile-img"
              />
            </Col>
            <Col md="auto">
              <br />
              <br />
              <br />
              <p style={{ padding: "10px", width: "350px" }}>
                {profile.first_name} {profile.last_name}
              </p>
              {/* <p style={{ padding: "10px", width: "350px" }}>category</p> */}
              <p style={{ padding: "10px", width: "350px" }}>
                caption : {profile.caption}
              </p>
            </Col>
            <Col md="auto">
              <br />
              <ul id="info">
                <li>
                  {" "}
                  <Button style={{ color: "#529471" }} variant="light">
                    follower : {profile.followers}
                  </Button>
                </li>
                <li>
                  {" "}
                  <Button style={{ color: "#529471" }} variant="light">
                    following :{profile.followings}{" "}
                  </Button>
                  <br />
                </li>
              </ul>
              <br />
              <ul id="info">
                <li>
                  {console.log(
                    profile.first_name === state.user,
                    profile.user.username,
                    state
                  )}
                  {profile.first_name === state.user ? (
                    <Button style={{ color: "#529471" }} variant="light">
                      Edit
                    </Button>
                  ) : (
                    <Button onClick={handelFollow} style={{ color: "#529471" }} variant="light">
                      {profile.am_follow ? (
                        <span>unfollow</span>
                      ) : (
                        <span>follow</span>
                      )}
                    </Button>
                  )}
                </li>
              </ul>
            </Col>
            <br />
          </Row>
        </Container>
        <hr />
        <Form onSubmit={handelForm}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>First Name</Form.Label>
            <Form.Control name="first_name" type="text" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Last Name</Form.Label>
            <Form.Control name="last_name" type="text" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Caption</Form.Label>
            <Form.Control name="caption" type="text" />
          </Form.Group>

          <Button variant="success" type="submit">
            Submit
          </Button>
        </Form>
      </>
    );
};

// const mapStateToProps = (state) => ({
//   user: state.userDetails.user,
// });
export default ProfileInfo;
const mapStateToProps = (state) => ({
  user: state.userDetails.userDetail.first_name,
});
