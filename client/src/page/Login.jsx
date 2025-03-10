import React from 'react';
import {useNavigate} from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();
    return (
        <div className='login-box'>
            <div className='login-box-left'>
                <img src="https://beautyofjoseon.co.kr/web/upload/category/editor/2023/10/16/f98930d0c75de793cdcd2d98002ed4e4.jpg" alt="" />
            </div>
            <div className='login-box-right'>
                <h3>Sign In</h3>
                <div className='login-box-right-top'>
                    <input type="text" name='id' placeholder='아이디'/>
                    <input type="text" name='pwd'  placeholder='비밀번호'/>
                </div>
                    <button className='login-btn login-btn1'>Sign In</button>
                <div className='login-cut'>————————————<span>or</span>————————————</div>
                <div className='login-box-right-middle'>
                    <button className='login-btn login-btn2'>네이버</button>
                    <button className='login-btn login-btn3'>카카오톡</button>
                </div>
                <div className='login-cut'>————————————<span>or</span>————————————</div>
                <div>
                    <button className='login-btn login-btn4'
                        onClick={()=>{navigate('/signup')}}
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
    );
}

