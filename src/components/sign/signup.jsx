import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../loader/loeader';
import './signup.scss'

// import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { styled } from '@material-ui/core/styles';
// import Checkbox from '@material-ui/core/Checkbox';

import useAjax from '../../hooks/useAjax';
import { SIGNUP_URL } from '../../urls';
import { useHistory } from 'react-router';
import { tokenName } from '../../helpers';
import Popup from '../popup';



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
            <br/>
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

const SignUp = () => {
    const [ToggleEye, setToggleEye] = useState('https://image.flaticon.com/icons/png/512/4743/4743038.png');
    const classes = useStyles();
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [checking, setChecking] = useState(localStorage.getItem(tokenName));
    const [results, reload, loading, error, setError] = useAjax();

    const history = useHistory();

    const onSignup = () => {
        reload(SIGNUP_URL, 'post', {
            user_name: userName,
            password: password,
            email: email,

        }, null, null)

    };

    function showPassword(e) {

        let passwordInput = document.getElementById('showPasswordInput');

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
        if (results) {
            localStorage.setItem(tokenName, JSON.stringify(results.data));
            setChecking(false);
            history.push('/Verify');
        }
    }, [results]);


    return (
        <Container component="main" maxWidth="xs">
            <Popup title='Error' message={error} show={error} setError={setError} />
            <CssBaseline />
            <div className={classes.paper}>
                <div id="logoContainer">
                    <img id="signUplogo" src={"https://logosandtypes.com/wp-content/uploads/2020/07/hammer-series.svg"} alt={"Hexagon"} ></img>
                </div>
                {/* <Avatar className={classes.avatar}>
                </Avatar> */}
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <form id="signupForm" className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                onChange={(e) => setUserName(e.target.value)}
                                autoComplete="fname"
                                name="firstName"
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                label="User name"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                onChange={(e) => setEmail(e.target.value)}
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                onChange={(e) => setPassword(e.target.value)}
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                id="showPasswordInput"
                            />
                            <img id="passowrdImage" src={ToggleEye} alt={'alt'} type="checkbox" onClick={showPassword} />
                        </Grid>
                    </Grid>
                    <HexagonButton
                        // type="submit"
                        onClick={onSignup}
                        fullWidth
                        variant="contained"
                        color="primary"
                    // className={classes.submit}
                    >
                        {loading ? <Loader /> : 'Sign Up'}
                    </HexagonButton>
                </form>
                <div id="SigninQuestion">
                    <span className="loginForgot"> Already have an account? </span>
                    <Link className="loginRegisterButton" type="submit" to='/'>
                        <HexagonButton className='loginRedirectButton'>
                            Sign In
                        </HexagonButton>
                    </Link>
                </div>
            </div>
            <Box mt={5}>
                <Copyright />
            </Box>
        </Container>
    );
}
const mapStateToProps = (state) => ({
    userDetails: state.userDetails,
});

export default SignUp;
