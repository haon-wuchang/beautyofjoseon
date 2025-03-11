import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SiNaver } from "react-icons/si";
import { RiKakaoTalkFill } from "react-icons/ri";
import SocialKakao from './SocialKakao.jsx';

export default function Login() {
    const navigate = useNavigate();
    return (
        // <form>
            <div className='login-box'>
                <div className='login-box-left'>
                    <img src="/images/loginImage.jpg" alt="" />
                </div>
                <div className='login-box-right'>
                    {/* 테스트중인데 어렵 */}
                {/* <SocialKakao /> */}
                    <h3>Sign In</h3>
                    <div className='login-box-right-top'>
                        <input 
                            type="text" 
                            name='id' 
                            placeholder='아이디'
                            />
                        <input 
                            type="text" 
                            name='pwd' 
                            placeholder='비밀번호' 
                            />
                    </div>
                    <button className='login-btn login-btn1'
                        type='button'
                        >Sign In</button>
                    <div className='login-cut'>————————————<span>or</span>————————————</div>
                    <div className='login-box-right-middle'>
                        <div className='login-btn login-btn2'>
                                <SiNaver className='login-box-right-middle-logo1'/>
                            <span>NAVER Account</span>
                        </div>
                        <div className='login-btn login-btn3'>
                                <RiKakaoTalkFill className='login-box-right-middle-logo2'/>
                            <span>Kakao Account</span>
                        </div>
                    </div>
                    <div className='login-cut'>————————————<span>or</span>————————————</div>
                    <div>
                        <button className='login-btn login-btn4'
                            onClick={() => { navigate('/signup') }}
                        >New Account</button>
                    </div>
                    <div className='login-bottom-box'>
                        <ul>
                            <li>
                                <a href="">아이디(이메일) </a>
                                <span>또는</span>
                                <a href="">비밀번호</a>
                                <span>를 잊으셨나요?</span>
                            </li>
                            <li>
                                <span>비회원으로 주문하신 경우, </span>
                                <a href="">주문조회 </a>
                                <span>해주세요.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        // </form>
    );
}

