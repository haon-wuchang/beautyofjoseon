import React from 'react';
import { Link } from 'react-router-dom';
import { GoPerson } from "react-icons/go";
import { PiShoppingBag } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import { IoSearchOutline } from "react-icons/io5";
import { BsList } from "react-icons/bs";

export default function Header() {
    return (
        <div className='header-wrap'>
            <div className='header-top-notice'>
                <p>회원가입시 <b>가입별 혜택 제공</b></p>
                {/* <p>모든 구매고객 <b>샘플 3종 랜덤 증정</b></p>
                <p>조선미녀 카톡 친구추가 시 <b>5,000원 할인쿠폰 증정</b></p> */}
            </div>
            <div className='header-bottom'>
                <div className='header-bottom-container'>
                    <div className='header-bottom-left'>
                        <Link to="/">
                            <img className='header-bottom-left-main-logo' src="images/beautyofjoseon_logo.jpg" alt="mainLogo" />
                        </Link>
                    </div>
                    <div className='header-bottom-right'>
                        <nav className='header-bottom-right-nav'>
                            <Link to="/">HOME</Link>
                            <Link to="/product">PRODUCT</Link>
                            <Link to="/">BRAND STORY</Link>
                            <Link to="/">MEMBERSHIP</Link>
                            <Link to="/">PRESS</Link>
                        </nav>
                        <ul className='header-bottom-right-icons'>
                            {/* 로그인안했을때 누르면 로그인페이지로
                            로그인햇을때는 마이페이지로 이동되게해야함 */}
                            {/* <li><Link to="/login"><GoPerson /></Link></li> */}
                            <li><Link to="/mypage"><GoPerson /></Link></li>
                            <li><Link to="/"><PiShoppingBag /></Link></li>
                            <li><Link to="/"><IoSearchOutline /></Link></li>
                            <li><Link to="/"><BsList /></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

