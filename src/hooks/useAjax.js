import { useState, useEffect } from 'react';
import axios from 'axios';

const useAjax = (
  endPoint = null,
  methodType = 'get',
  body = {},
  bearerToken = null
) => {
  const [url, setUrl] = useState(endPoint);
  const [method, setMethod] = useState(methodType.toUpperCase());
  const [data, setData] = useState(body);
  const [token, setToken] = useState(bearerToken);
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const options = {
      method,
      url,
      data,
      headers: { 'Content-Type': 'application/json' },
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
          setLoading(true);
          const response = await axios(options);
          setResults(response);
          setLoading(false);
        } else {
          setLoading(false);
        }
      } catch (e) {
        setError(e.message);
        setLoading(false);
      }
    })();
  }, [data, method, token, url]);

  const reload = (url = endPoint, method = methodType, data = body, token = bearerToken) => {
    setUrl(url);
    setMethod(method);
    setData(data);
    setToken(token);
    setLoading(true);
    setError(null);
  };

  return [results, reload, loading, error];
};
export default useAjax;