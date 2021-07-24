import React from 'react';
import { Link, Router } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { styled } from '@material-ui/core/styles';
import GoogleButton from 'react-google-button';
import './welcome.scss';

const HexagonButton = styled(Button)({
    // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    // marginTop: '.5em',
    background: '#529471',
    border: 0,
    borderRadius: 3,
    // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    "&:hover": {
        boxShadow: 'rgba(0, 0, 0, 0.25) 2px 4px 6px 3px',
        backgroundColor: "#529471",
        // backgroundColor: "#eee",
        // color: "#529471",
    }
});

const Welcome = () => {
    return (
        <div id="welcomeContainer" class="container-fluid">
            <div className="login">
                <div className="loginWrapper">
                    <div className="loginLeft">
                        <div id="leftFlex">
                            <img id="welcomeLogo" src={"https://logosandtypes.com/wp-content/uploads/2020/07/hammer-series.svg"} alt={"Hexagon"} ></img>
                            <h3 className="loginLogo">HEXAGON</h3>
                        </div>
                        <div className="loginDesc">
                            <span>
                                Turn your creativity into reality!
                            </span>
                        </div>
                    </div>
                    <div className="loginRight">
                        <div className="loginBox">
                            <input placeholder="Email" className="loginInput" />
                            <input placeholder="Password" id="loginInput" className="loginInput" />
                            {/* <Button id="openAuth"><img src={"https://www.hebergementwebs.com/image/b5/b5a4bf161a5c2a1316b72199a6887cc8.webp/the-secret-history-of-the-google-logothe-secret-history-of-the-google-logo-0.webp"} alt={"Hexagon"} ></img>
                            </Button> */}
                            <div id="loginDiv">
                                <HexagonButton className="loginButton">Log In</HexagonButton>
                            </div>
                            <div id="forgotPasswordContainer">
                                <span className="loginForgot">Forgot Your Password?</span>
                                <a className="loginRegisterButton" type="submit">
                                    Reset password
                                </a>
                            </div>
                            <div id="oauthSpan">
                                <Button style={{ width: "300px" }}>
                                    <GoogleButton id="openAuth" style={{ width: "300px", backgroundColor: "#529471", textAlign: "center" }}
                                        onClick={() => { console.log('Google button clicked') }}
                                    />
                                </Button>
                            </div>
                        </div>
                        <span className="loginForgot">Your first time here?</span>
                        <div className="anchorContainer">
                            <a className="loginRegisterButton" type="submit">
                                Create a New Account
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Welcome;
