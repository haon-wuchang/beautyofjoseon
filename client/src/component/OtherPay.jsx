import React from 'react';

export default function OtherPay({className}) {
    return (
        <ul className={className}>
            <li className={`${className}-naver`}>
                <div>
                    <p>NAVER</p>
                    <p>네이버ID로 간편구매</p>
                    <p>네이버페이</p>
                </div>
                <div>
                    <button>N pay 구매</button>
                    <button>찜</button>
                </div>
            </li>
            <li className={`${className}-kakao`}>
                <div>
                    <p>kakao</p>
                    <p>톡체크아웃</p>
                </div>
                <div>
                    <button>간편구매</button>
                    <button>채널</button>
                    <button>찜</button>
                </div>
            </li>
        </ul>
    );
}