/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../loader/loeader';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { styled } from '@material-ui/core/styles';
import './signup.scss'

import useAjax from '../../hooks/useAjax';
import { REQUEST_USER_VERIFY_CODE_URL, VERIFY_USER_ACCOUNT_URL } from '../../urls';
import { useHistory } from 'react-router';
import { getToken, logout } from '../../helpers';
import Popup from '../popup';


const HexagonButton = styled(Button)({
    background: '#529471',
    border: 0,
    borderRadius: 3,
    color: 'white',
    height: 48,
    padding: '0 30px',
    "&:hover": {
        boxShadow: 'rgba(0, 0, 0, 0.25) 2px 4px 6px 3px',
        backgroundColor: "#529471",
    }
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

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const Verify = () => {
    const history = useHistory();
    const classes = useStyles();
    const [code, setCode] = useState('');
    const [results, reload, loading, error] = useAjax();
    const [verifyCodeResults, verifyCodeReload, verifyCodeLoading, verifyCodeError, setVerifyCodeError] = useAjax();



    const onVerifyREquest = () => {
        (async () => {
            const token = await getToken();
            reload(REQUEST_USER_VERIFY_CODE_URL, 'post', null, token, null)
        })();
    };

    const onVerifyCheck = (e) => {
        e.preventDefault();
        (async () => {
            const token = await getToken();
            verifyCodeReload(VERIFY_USER_ACCOUNT_URL, 'post', {
                code: code,
            }, token, null);
            setCode('');
        })();
    };

    useEffect(() => {
        onVerifyREquest();
    }, []);

    useEffect(() => {
        if (verifyCodeResults?.data.status === 200) {
            history.push('/');
        }
    }, [verifyCodeResults]);


    return (
        <Container component="main" maxWidth="xs">
            <Popup title='Error' message={verifyCodeError} show={() => verifyCodeError && verifyCodeError !== 'Invalid Login' && verifyCodeError !== 'Sorry, we could not find what you were looking for'} setError={setVerifyCodeError} />
            <CssBaseline />
            <div className={classes.paper}>
                <div id="logoContainer">
                    <img id="signUplogo" src={"https://i.ibb.co/xYKx0mM/Hexa-fin-without-title-01.png"} alt={"Hexagon"} ></img>
                    <Typography component="h1" variant="h5">
                        VERIFY YOUR ACCOUNT
                    </Typography>
                </div>
                <form onSubmit={onVerifyCheck} id="signupForm" className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                onChange={(e) => setCode(e.target.value)}
                                autoComplete="fname"
                                name="code"
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                label="Verification Code"
                                autoFocus
                            />
                        </Grid>
                    </Grid>
                    <HexagonButton
                        type="submit"
                        onClick={onVerifyCheck}
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        {verifyCodeLoading ? <Loader /> : 'Enter Code'}
                    </HexagonButton>
                </form>
                <div id="SigninQuestion">
                    <span className="loginForgot"> Changed your mind? </span>
                    <HexagonButton className='verifySignoutButton' onClick={logout}>
                        Sign out
                    </HexagonButton>
                </div>
                <div id="SigninQuestion">
                    <span className="loginForgot"> Didnt recieve your code? </span>
                    <HexagonButton className="loginRegisterButton" type="submit"
                    >
                        <a id='ResendVerification' onClick={onVerifyREquest}>{loading ? <Loader /> : 'Resend Code'}</a>
                    </HexagonButton>
                </div>
            </div>
            <Box mt={5}>
                <Copyright />
            </Box>
        </Container>
    );
}

export default Verify;
