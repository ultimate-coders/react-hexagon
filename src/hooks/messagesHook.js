import { useState, useEffect } from 'react';
import axios from 'axios';

const MessageHook = (
  endPoint = null,
  methodType = 'get',
  body = {},
  bearerToken = null,
  authParams=null
) => {
  const [url, setUrl] = useState(endPoint);
  const [method, setMethod] = useState(methodType.toUpperCase());
  const [data, setData] = useState(body);
  const [auth, setAuth] = useState(authParams);
  const [token, setToken] = useState(bearerToken);
  const [resultsMsg, setResultsMsg] = useState(null);
  const [loadingMsg, setLoadingMsg] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  
  useEffect(() => {
    let options = {
        method,
        url,
        data,
        headers: { 'Content-Type': 'application/json' },
        auth
    };
    
    if (token) {
        options.headers = {
            ...options.headers,
        Authorization: `Bearer ${token}`,
    };
}

(async () => {
    try {
        if (url) {
            console.log("🚀 ~ file: messagesHook.js ~ line 39 ~ url", url)
            setLoadingMsg(true);
            const response = await axios(options);
            setResultsMsg(response.data.results.reverse());
            setLoadingMsg(false);
        } else {
          setLoadingMsg(false);
        }
      } catch (e) {
        setErrorMsg(e.message);
        setLoadingMsg(false);
      }
    })();
  }, [data, method, token, url, auth]);

  const reloadMsg = (url = endPoint, method = methodType, data = body, token = bearerToken, auth=authParams) => {
    setUrl(url);
    setMethod(method);
    setData(data);
    setAuth(auth);
    setToken(token);
    setLoadingMsg(true);
    setErrorMsg(null);
  };

  return [resultsMsg, reloadMsg, loadingMsg, errorMsg];
};
export default MessageHook;