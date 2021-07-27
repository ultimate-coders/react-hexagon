import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
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
import { getToken } from '../../helpers';
import { checkAuth } from '../authController';


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

// function Copyright() {
//     return (
//         <Typography variant="body2" color="textSecondary" align="center">
//             {'Copyright © '}
//             <Link color="inherit" href="https://material-ui.com/">
//                 Your Website
//             </Link>{' '}
//             {new Date().getFullYear()}
//             {'.'}
//         </Typography>
//     );
// }

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
    const [verifyCodeResults, verifyCodeReload, verifyCodeLoading, everifyCodeError] = useAjax();



    const onVerifyREquest = () => {
        (async() => {
            const token = await getToken();
            reload(REQUEST_USER_VERIFY_CODE_URL, 'post',null, token, null)
        })();

    };
    
    const onVerifyCheck = (e) => {
        e.preventDefault();
        (async() => {
            const token = await getToken();
            verifyCodeReload(VERIFY_USER_ACCOUNT_URL, 'post',{
                code: code,    
            }, token, null);
            // e.target.reset();

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
            <CssBaseline />
            <div className={classes.paper}>
                <div id="logoContainer">
                    <img id="signUplogo" src={"https://logosandtypes.com/wp-content/uploads/2020/07/hammer-series.svg"} alt={"Hexagon"} ></img>
                </div>
                {/* <Avatar className={classes.avatar}>
                </Avatar> */}
                <Typography component="h1" variant="h5">
                    Verify Your Account
                </Typography>
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
                        {verifyCodeLoading ? 'Sending' : 'Enter Code'}
                    </HexagonButton>
                </form>
                <div id="SigninQuestion">
                    <span className="loginForgot"> Already have an account? </span>
                    <Link className="loginRegisterButton" type="submit" to='/'>
                        Sign In
                    </Link>
                </div>
                <div id="SigninQuestion">
                    <span className="loginForgot"> Didnt recieve your code? </span>
                    <HexagonButton className="loginRegisterButton" type="submit" 
                    >
                       <a id='ResendVerification' onClick={onVerifyREquest}>Resend Code</a> 
                    </HexagonButton>
                </div>
            </div>
            {/* <Box mt={5}>
                <Copyright />
            </Box> */}
        </Container>
    );
}

export default Verify;
