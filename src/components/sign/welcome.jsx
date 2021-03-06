
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { styled } from '@material-ui/core/styles';
import GoogleButton from 'react-google-button';
import './welcome.scss';
import Header from '../header/header'


import useAjax from '../../hooks/useAjax';
import { SIGN_IN_URL, SIGN_IN_GOOGLE_URL } from '../../urls';
import { tokenName } from '../../helpers';
import { useHistory } from 'react-router';
import { checkAuth } from '../authController';

const HexagonButton = styled(Button)({
  // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  // marginTop: '.5em',
  background: "#529471",
  border: 0,
  borderRadius: 3,
  // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: "white",
  height: 48,
  padding: "0 30px",
  "&:hover": {
    boxShadow: "rgba(0, 0, 0, 0.25) 2px 4px 6px 3px",
    backgroundColor: "#529471",
    // backgroundColor: "#eee",
    // color: "#529471",
  },
});

const Welcome = (props) => {


  const [ToggleEye, setToggleEye] = useState('https://image.flaticon.com/icons/png/512/4743/4743038.png');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checking, setChecking] = useState(localStorage.getItem(tokenName));

  const [results, reload, loading, error] = useAjax();

  const history = useHistory();

  const onSignin = () => {
    reload(SIGN_IN_URL, 'post', null, null, {
      username: email,
      password: password,
    })
  };

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
    <Header/>
      {checking ? (
        <div>Loading ...</div>
      ) : (
        <div id="welcomeContainer" className="container-fluid">
          <div className="login">
            <div className="loginWrapper">
              <div className="loginLeft">
                <div id="leftFlex">
                  <img
                    id="welcomeLogo"
                    src={
                      "https://logosandtypes.com/wp-content/uploads/2020/07/hammer-series.svg"
                    }
                    alt={"Hexagon"}
                  ></img>
                  <h3 className="loginLogo">HEXAGON</h3>
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
                  {/* <Button id="openAuth"><img src={"https://www.hebergementwebs.com/image/b5/b5a4bf161a5c2a1316b72199a6887cc8.webp/the-secret-history-of-the-google-logothe-secret-history-of-the-google-logo-0.webp"} alt={"Hexagon"} ></img>
                            </Button> */}
                  <div id='loginDiv'>
                    <HexagonButton onClick={onSignin} className='loginButton'>
                      {loading ? 'Loading' : 'Sign in'}
                    </HexagonButton>
                  </div>

                  <div id="forgotPasswordContainer">
                    {/* <span className="loginForgot">Forgot Your Password?</span> */}
                    <Link to="/forgotpassword" className="loginRegisterButton">
                      Forgot Your Password? Reset password
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
                {/* <span className="loginForgot">Your first time here?</span> */}
                <div className="anchorContainer">
                  <Link

                    to='/signup'
                    className='loginRegisterButton new-account-width'
                  >
                    Your first time here? Create a New Account
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  userDetails: state.userDetails,
});

export default Welcome;
