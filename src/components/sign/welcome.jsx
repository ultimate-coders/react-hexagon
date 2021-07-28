/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { styled } from '@material-ui/core/styles';
import GoogleButton from 'react-google-button';
import Loader from '../loader/loeader';
import './welcome.scss';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import useAjax from '../../hooks/useAjax';
import { SIGN_IN_URL, SIGN_IN_GOOGLE_URL } from '../../urls';
import { tokenName } from '../../helpers';
import { useHistory } from 'react-router';
import { checkAuth } from '../authController';
import Popup from '../popup';

const HexagonButton = styled(Button)({
  background: "#529471",
  border: 0,
  borderRadius: 3,
  color: "white",
  height: 48,
  padding: "0 30px",
  "&:hover": {
    boxShadow: "rgba(0, 0, 0, 0.25) 2px 4px 6px 3px",
    backgroundColor: "#529471",
  },
});

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center" id="footerContainer">
      <div>
        {'Copyright © '}
        <Button>
          <Link color="inherit" style={{ textDecoration: 'none' }} to="/">
            HEXAGON
          </Link>
        </Button>{' '}
        {new Date().getFullYear()}
        {'.'}
      </div>
      <br />
      <Button id="aboutUs">
        <Link color="inherit" style={{ textDecoration: 'none' }} to="/aboutus">
          ABOUT US
        </Link>
      </Button>
    </Typography>
  );
}

const Welcome = (props) => {


  const [ToggleEye, setToggleEye] = useState('https://image.flaticon.com/icons/png/512/4743/4743038.png');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checking, setChecking] = useState(localStorage.getItem(tokenName));

  const [results, reload, loading, error, setError] = useAjax();

  const history = useHistory();

  const onSignin = () => {
    reload(SIGN_IN_URL, 'post', null, null, {
      username: email,
      password: password,
    })
  };

  // Google Oauth handelForm

  // const googleOauth = () => {
  //   reload(SIGN_IN_GOOGLE_URL, 'post', null, null, {
  //     username: email,
  //     password: password,
  //   })
  // };

  function showPassword(e) {

    let passwordInput = document.getElementById('loginInput');

    let closedEye = 'https://image.flaticon.com/icons/png/512/4743/4743038.png';
    let openedEye = 'https://image.flaticon.com/icons/png/512/709/709612.png';

    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      setToggleEye(openedEye);
    }
    else {
      passwordInput.type = "password";
      setToggleEye(closedEye);
    }
  }

  useEffect(() => {
    if (checking) {
      (async () => {
        await checkAuth(
          () => null,

          () => history.push('/home')
        );
      })();
    }
  }, []);

  useEffect(() => {
    if (results) {
      localStorage.setItem(tokenName, JSON.stringify(results.data));
      setChecking(false);
      history.push('/');
    }
  }, [results]);

  return (
    <>
      {checking ? (
        <div><Loader /></div>
      ) : (
        <div id="welcomeContainer" className="container-fluid">
          <Popup title='Error' message={error} show={error} setError={setError} />
          <div className="login">
            <div className="loginWrapper">
              <div className="loginLeft">
                <div id="leftFlex">
                  <img
                    id="welcomeLogo"
                    src={
                      "https://i.ibb.co/ySMxV23/Hexa-fin-transparent-01.png"
                    }
                    alt={"Hexagon"}
                  ></img>
                </div>
                <div className="loginDesc">
                  <span>Turn your creativity into reality!</span>
                </div>
              </div>
              <div className="loginRight">
                <div className="loginBox">
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    type="email"
                    className="loginInput"
                  />
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    type="password"
                    id="loginInput"
                    className="loginInput"
                  />
                  <img id="WelcomepassowrdImage" src={ToggleEye} alt={'alt'} type="checkbox" onClick={showPassword} />
                  <div id='loginDiv'>
                    <HexagonButton onClick={onSignin} className='loginButton'>
                      {loading ? <Loader /> : 'Sign in'}
                    </HexagonButton>
                  </div>

                  <div id="forgotPasswordContainer">
                    <span id="forgotPasswordSpan" className="loginForgot">Forgot Your Password?</span>
                    <Link to="/forgotpassword" className="loginRegisterButton">
                      <HexagonButton id="forgotPasswordButton">
                        Reset password
                      </HexagonButton>
                    </Link>
                  </div>
                  <div id="oauthSpan">
                    <Button style={{ width: "300px" }}>
                      <GoogleButton
                        id="openAuth"
                        style={{
                          width: "300px",
                          backgroundColor: "#529471",
                          textAlign: "center",
                        }}

                      // onClick={googleOauth}
                      />
                    </Button>
                  </div>
                </div>
                <div className="anchorContainer">
                  <span className="loginForgot"> Your first time here?  </span>
                  <Link to='/signup'
                    className='loginRegisterButton new-account-width'
                  >
                    <HexagonButton>
                      Create a New Account
                    </HexagonButton>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <Box mt={5}>
        <Copyright />
      </Box>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  userDetails: state.userDetails,
});

export default Welcome;
