import { Container, Row, Col, Button, Form } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import useAjax from "../../hooks/useAjax";
import { PROFILE_URL, FOLLOW_URL } from "../../urls";

import { getToken } from "../../helpers";
import "./info.scss";
import { useSelector } from "react-redux";

const ProfileInfo = () => {
  const state = useSelector(mapStateToProps);
  const [showResults, setShowResults] = useState(false);
  const [results, reload, loading, error] = useAjax();
  const [token, setToken] = useState();
  const [follow, setfollow] = useState();
  const [profile, setProfile] = useState();
  const profile_name = window.location.pathname.split("/")[2];
  const url = `${PROFILE_URL}/${profile_name}`;
  getToken().then((results) => setToken(results));

  const Results = () => (
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

      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>profile_picture</Form.Label>
        <Form.Control name="image" type="file" />
      </Form.Group>

      <Button variant="success" type="submit">
        Submit
      </Button>
    </Form>
  );

  const onClick = () => setShowResults(!showResults);

  const getProfile = () => {
    reload(url, "get", null, token);
  };

  const updateProfile = (body) => {
    reload(PROFILE_URL, "put", body, token);
  };

  useEffect(() => {
    (async () => {
      await getProfile();
    })();
  }, [token]);

  useEffect(() => {
    if (results) {
      if (results.data.id) {
        setProfile(results.data);
      }
    }
  }, [results]);

  const handelForm = (e) => {
    e.preventDefault();
    let body = {
      first_name: e.target.first_name.value,
      last_name: e.target.last_name.value,
      caption: e.target.caption.value,
      profile_picture: e.target.image.value,
    };
    console.log(body);
    (async () => {
      await updateProfile(body);
    })();
  };

  useEffect(() => {
    if (profile) {
      (async () => {
        await reload(FOLLOW_URL, "post", { following: profile.id }, token);
      })();
    }
  }, [follow]);

  const handelFollow = (e) => {
    let x = !follow;
    setfollow(x);
  };
  //  user", state.user);
  if (!profile) {
    return <div></div>;
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
                  {profile.user.email === state.user ? (
                    <Button
                      onClick={onClick}
                      style={{ color: "#529471" }}
                      variant="light"
                    >
                      Edit
                    </Button>
                  ) : (
                    <Button
                      onClick={handelFollow}
                      style={{ color: "#529471" }}
                      variant="light"
                    >
                      {(follow !== undefined && follow) || profile.am_follow ? (
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
        {showResults ? <Results /> : null}
        <hr />
      </>
    );
};

const mapStateToProps = (state) => ({
  user: state.userDetails.user.user.email,
});
export default ProfileInfo;
