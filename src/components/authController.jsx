import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { logout, tokenName } from '../helpers';
import { ME_URL, REFRESH_URL } from '../urls';
import { userDetailAction } from '../store/userDetails';
import { useDispatch } from 'react-redux';
import Loader from "react-loader-spinner";


export const checkAuth = async (setChecking, dispatch) => {
    let token = localStorage.getItem(tokenName);
    if(!token){
        await logout();
        return;
    }

    token = JSON.parse(token);
    
    const userProfile = await axios({
        url: ME_URL,
        method: 'GET',
        headers: {
            ContentType: 'application/json',
            Authorization: `Bearer ${token.access_token}`
        }
    }).catch(e => {
        if(e.response.data.status === 403 && e.response.data.message === 'Account not verified!'){
            window.location.href = '/verify';
            return;
        }
    });
    

    if(userProfile){
        dispatch(userDetailAction(userProfile.data));
        console.log(userProfile.data);
        setChecking(false);
    } else {
        const newAccessToken = await axios({
            url: REFRESH_URL,
            method: 'POST',
            headers: {
                ContentType: 'application/json',
            },
            data: {
                refresh_token: token.refresh_token
            }
        }).catch(e => null);

        if(newAccessToken){
            localStorage.setItem(tokenName, JSON.stringify(newAccessToken.data));
            checkAuth(setChecking, dispatch);
        } else {
            await logout();
        }
    }
}


const AuthController = (props) => {
    const [checking, setChecking] = useState(true);

    const dispatch = useDispatch();

    useEffect(() => {
        (async () => await checkAuth(setChecking, dispatch))();
    }, []);
    
    return (
        <div className='authController'>
            {
                
                checking ? <div className="loader">
                                <Loader
                                    type="Bars"
                                    style={{minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}
                                    color="#00BFFF"
                                />
                            </div> :
                    
                            props.children
            }
        </div>
    );
    
}

export default AuthController;
