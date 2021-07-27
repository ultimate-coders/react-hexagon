import axios from 'axios';
import { ME_URL, REFRESH_URL, LOGOUT_URL } from './urls';

export const tokenName = 'tokenName';


// Logout function
export const logout = async() => {
    if(localStorage.getItem(tokenName)) {
        await axios({
            url: LOGOUT_URL,
            method: 'get',
            headers: {
                ContentType: 'application/json',
                Authorization: `Bearer ${await getToken()}`
            }
        });
    }
    localStorage.removeItem(tokenName);
    window.location.href = '/signin';
}

// Function to get the token from the localStorage and check it from the api
export const getToken = async () => {
  let token = localStorage.getItem(tokenName);
  if(!token) await logout();
  token = JSON.parse(token);
    const userProfile = await axios({
        url: ME_URL,
        method: 'GET',
        headers: {
            ContentType: 'application/json',
            Authorization: `Bearer ${token.access_token}`
        }
    }).catch(e => null);

    if(userProfile){
        return token.access_token;
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
            return newAccessToken.data.access_token;
        } else {
            await logout();
        }
    }
    

};
