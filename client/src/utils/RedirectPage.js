import axios from 'axios';
import React, { useEffect } from 'react';

export default function RedirectPage() {
  useEffect(()=>{
    const fetchUserInfo = async() =>{
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get("code");
      const state = urlParams.get("state");

      try {
        // const res = await axios.post(`http://localhost:9000/naver/callback?code=${code}&state=${state}`);
        const res = await axios.post('http://localhost:9000/naver/callback', {code, state});
        const data = res.data;

        if (window.opener && !window.opener.closed) {
            window.opener.postMessage({
              type: 'NAVER_LOGIN_SUCCESS',
              payload: data
            }, "http://localhost:3000");
            console.log('[RedirectPage] postMessage 전송됨:', data);  
            window.close();
          }  
      } catch (error) {
        console.log('SNS 로그인 실패', error);
        window.close(); 
      }
    };
    fetchUserInfo();
  },[]);
  return null;
}

