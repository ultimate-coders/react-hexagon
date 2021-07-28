import { Container, Row, Col, Button, Form } from "react-bootstrap";
import React, { useState, useEffect, useRef } from "react";
import useAjax from "../../hooks/useAjax";
import { PROFILE_URL, FOLLOW_URL, FILE_URL } from "../../urls";
import { getToken } from "../../helpers";
import "./info.scss";
import { activeChatAction } from "../../store/chat/actions";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import axios from "axios";

const ProfileInfo = () => {
  const dispach = useDispatch();
  const state = useSelector(mapStateToProps);
  const [showResults, setShowResults] = useState(false);
  const [results, reload] = useAjax();
  const [token, setToken] = useState();
  const [follow, setfollow] = useState();
  const [profile, setProfile] = useState();
  const [info, setinfo] = useState({
    first_name: state.info.first_name,
    last_name: state.info.last_name,
    caption: state.info.caption,
  });
  const profile_name = window.location.pathname.split("/")[2];
  const url = `${PROFILE_URL}/${profile_name}`;
  const profileImages = useRef(null);
  const [image, setImage] = useState(null);

  getToken().then((results) => setToken(results));

  const Results = () => (
    <Form onSubmit={handleForm}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>First Name</Form.Label>
        <Form.Control name="first_name" type="text" onChange={(e)=>setinfo({...info,first_name:e.target.value})} value={info.first_name} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Last Name</Form.Label>
        <Form.Control name="last_name" type="text" onChange={(e)=>setinfo({...info,last_name:e.target.value})} value={info.last_name}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Caption</Form.Label>
        <Form.Control name="caption" type="text" onChange={(e)=>setinfo({...info,caption:e.target.value})} value={info.caption}/>
      </Form.Group>

      <Form.Group controlId="formFile" className="mb-3">
        <Form.Control
          className="image_file_input"
          ref={profileImages}
          style={{ display: "none" }}
          type="file"
          onChange={(e) => (setImage( e.target.files))}
        />
        <PhotoLibraryIcon id="PhotoLibraryIcon"
          className="photo_library_icon"
          color="secondary"
          onClick={(e) => profileImages.current.click()}
        />
        <Form.Text>Photos</Form.Text>
      </Form.Group>

      <Button className="btn-size" variant="success" type="submit">
        Save
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
      console.log("results2", results);
    }
  }, [results]);

  const handleForm = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    if (image?.length > 0) {
      formData.append("file", image[0], image[0].name);
      console.log(formData);
    }
    let newPostResponse = await axios({
      method: "post",
      url: FILE_URL,
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });
    newPostResponse = newPostResponse.data[0].id;
    console.log("results1", newPostResponse);
    let body = {
      first_name: info.first_name,
      last_name: info.last_name,
      caption: info.caption,
      profile_picture: newPostResponse,
    };
    console.log('body',body);
    let newProfile = await axios({
      method: "put",
      url: PROFILE_URL,
      data: body,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    console.log('----------',newProfile.data);
    setProfile(newProfile.data);
    // (async () => {
    //   await updateProfile(body);
    // })();
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

  const handleMessage = () => {
    console.log(profile);
    dispach(activeChatAction(profile));
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
                  <Button
                    className="btn-size"
                    style={{ color: "#529471" }}
                    variant="light"
                  >
                    follower : {profile.followers}
                  </Button>
                </li>
                <li>
                  {" "}
                  <Button
                    className="btn-size"
                    style={{ color: "#529471" }}
                    variant="light"
                  >
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
                      className="btn-size"
                      onClick={onClick}
                      style={{ color: "#529471" }}
                      variant="light"
                    >
                      Edit
                    </Button>
                  ) : (
                    <div>
                      <Button
                        className="btn-size"
                        onClick={handelFollow}
                        style={{ color: "#529471" }}
                        variant="light"
                      >
                        {(follow !== undefined && follow) ||
                        profile.am_follow ? (
                          <span>unfollow</span>
                        ) : (
                          <span>follow</span>
                        )}
                      </Button>
                      <Link to="/messages">
                        <Button
                          onClick={handleMessage}
                          className="btn-size"
                          style={{ color: "#529471", marginLeft: "20px" }}
                          variant="light"
                        >
                          message
                        </Button>
                      </Link>
                    </div>
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
  info: state.userDetails.user,
});
export default ProfileInfo;
