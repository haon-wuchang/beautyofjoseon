import React from 'react';

export default function Login() {
    return (
        <div>
            <div>
                <img src="https://beautyofjoseon.co.kr/web/upload/category/editor/2023/10/16/f98930d0c75de793cdcd2d98002ed4e4.jpg" alt="" />
            </div>
            <div>
                <div>
                    <h3>Sign In</h3>
                    <input type="text" />
                    <input type="text" />
                    <button>Sign In</button>
                </div>
                {/* <div>-------or-------</div>
                <div>
                    <button>네이버</button>
                    <button>카카오톡</button>
                </div> */}
                <div>-------or-------</div>
                <div>
                    <button>New Account</button>
                </div>
                <div>
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

