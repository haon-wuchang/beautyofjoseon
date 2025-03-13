import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { SiNaver } from "react-icons/si";
import { RiKakaoTalkFill } from "react-icons/ri";
import axios from 'axios';
import { AuthContext } from '../auth/AuthContext.js';
import { useContext } from 'react';

export default function Login() {
    const {isLoggedIn,setIsLoggedIn} = useContext(AuthContext);
    const [formData, setFormData] = useState({ 'id': '', 'pwd': '' });
    const navigate = useNavigate();
    const [error, setError] = useState({'id':'', 'pwd':''});
    
    const idRef = useRef(null);
    const pwdRef = useRef(null);
    const idMsgRef = useRef(null);
    const pwdMsgRef = useRef(null);

    const handleLogin = (e) => {
        const { name, value } = e.target;
        // console.log(name,value);
        setFormData({ ...formData, [name]: value });
    }
    const validate = () => {         
        if (idRef.current.value === '') {
            setError({...error, 'id':'아이디를 입력해주세요'});
            idMsgRef.current.style.setProperty('color', 'red');
            idRef.current.focus();             
            return false;
        }else if (pwdRef.current.value === '') {
            setError({...error, 'pwd':'비밀번호를 입력해주세요'});
            pwdMsgRef.current.style.setProperty('color', 'red');
            pwdRef.current.focus();
            return false;
        }     
        return true;
    }
    // console.log('=',formData);
    

    const handleSubmit = (e) => {
        e.preventDefault();
        if(validate()){
            idMsgRef.current.style.setProperty('color', 'white');
            pwdMsgRef.current.style.setProperty('color', 'white');
            axios.post('http://localhost:9000/login',formData)
                .then(res => {
                    console.log('ddd',res.data.result);
                    if(res.data.result === 1){
                        alert('로그인 성공');
                        localStorage.setItem('token',res.data.token);
                        localStorage.setItem('user_id',formData.id); 
                        setIsLoggedIn(true);
                        navigate('/');
                    }else{
                        alert('존재하지않는 아이디입니다. 회원가입을 먼저 진행해주세요');
                        idRef.current.value = '';
                        idMsgRef.current.style.setProperty('color', 'white');
                        pwdRef.current.value = '';
                        pwdMsgRef.current.style.setProperty('color', 'white');
                        idRef.current.focus();
                    }
                })
                .catch(error => {
                    alert('로그인에 실패하였습니다. 다시 시도해주세요.'); 
                    console.log(error)});
        }
    }

    return (
        <div className='login-box'>
            <div className='login-box-left'>
                <img src="/images/loginImage.jpg" alt="" />
            </div>
            <form onSubmit={handleSubmit}>
                <div className='login-box-right'>
                    <h3>Sign In</h3>
                    <div className='login-box-right-top'>
                        <input
                            type="text"
                            name='id'
                            ref={idRef}
                            placeholder='아이디'
                            onChange={handleLogin}
                        />
                        <span ref={idMsgRef}>{error.id}</span>
                        <input
                            type="password"
                            name='pwd'
                            ref={pwdRef}
                            placeholder='비밀번호'
                            onChange={handleLogin}
                        />
                        <span ref={pwdMsgRef}>{error.pwd}</span>
                    </div>
                    <button className='login-btn login-btn1'
                        type='submit'
                    >Sign In</button>
                    <div className='login-cut'>————————————<span>or</span>————————————</div>
                    <div className='login-box-right-middle'>
                        <div className='login-btn login-btn2'>
                            <SiNaver className='login-box-right-middle-logo1' />
                            <span>NAVER Account</span>
                        </div>
                        <div className='login-btn login-btn3'>
                            <RiKakaoTalkFill className='login-box-right-middle-logo2' />
                            <span>Kakao Account</span>
                        </div>
                    </div>
                    <div className='login-cut'>————————————<span>or</span>————————————</div>
                    <div>
                        <button className='login-btn login-btn4' type='button'
                            onClick={() => { navigate('/signup') }}
                        >New Account</button>
                    </div>
                    <div className='login-bottom-box'>
                        <ul>
                            <li>
                                <a href="#">아이디(이메일) </a>
                                <span>또는</span>
                                <a href="#">비밀번호</a>
                                <span>를 잊으셨나요?</span>
                            </li>
                            <li>
                                <span>비회원으로 주문하신 경우, </span>
                                <a href="#">주문조회 </a>
                                <span>해주세요.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </form>
        </div >
    );
}

