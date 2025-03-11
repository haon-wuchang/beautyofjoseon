import React from 'react';
import KakaoLogin from "react-kakao-login";

export default function SocialKakao() {
    const Rest_api_key = '0ca52b7ebd019e881131d2575aebbfc8' //REST API KEY
    const redirect_uri = 'http://localhost:3000/login/oauth' //Redirect URI
    // oauth 요청 URL

    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`
    const handleLogin = () => {
        window.location.href = kakaoURL;
    }
    const code = new URL(window.location.href).searchParams.get("code");
    return (
        <>
            <button onClick={handleLogin}>카카오 로그인</button>

        </>
    )
}


