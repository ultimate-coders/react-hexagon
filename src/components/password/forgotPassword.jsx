import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { styled } from '@material-ui/core/styles';
import '../sign/signup.scss'

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

const ForgotPassword = () => {
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <div id="logoContainer">
                    <img id="signUplogo" src={"https://i.ibb.co/b58Wbnx/Hexa-cmyg-01.png"} alt={"Hexagon"} ></img>
                    <Typography component="h1" variant="h5">
                        RESET PASSOWRD
                    </Typography>
                </div>
                <form id="signupForm" className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Verification Code"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="New Password"
                                name="email"
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Confirm New Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                        </Grid>
                    </Grid>
                    <HexagonButton
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Reset Password
                    </HexagonButton>
                </form>
                <div id="SigninQuestion">
                    <span className="loginForgot"> Changed your mind? </span>
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

export default ForgotPassword;
