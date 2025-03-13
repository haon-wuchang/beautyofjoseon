import React, { useContext, useState } from 'react';
import { AuthContext } from '../auth/AuthContext.js';
import { Link, useNavigate } from 'react-router-dom';
import { GoPerson } from "react-icons/go";
import { PiShoppingBag } from "react-icons/pi";
import { IoSearchOutline } from "react-icons/io5";
import { BsList } from "react-icons/bs";
import { GoLock } from "react-icons/go";
import { GoUnlock } from "react-icons/go";
import { IoCloseOutline } from "react-icons/io5";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Header() {
    const navigate = useNavigate();
    const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
    const [toggleOpen, setToggleOpen] = useState(false);
    const logout = () => {
        const handleLog = window.confirm("로그아웃 하시겠습니까?");
        if (handleLog) {
            localStorage.removeItem('token');
            localStorage.removeItem('user_id');
            setIsLoggedIn(false);
        } else {
            setIsLoggedIn(true);
            navigate('/');
        }
    }
    const handleMypage = () => {
        const handleLog = window.confirm("로그인이 필요한 서비스입니다. 로그인하시겠습니까?");
        (handleLog) ? navigate('/login') : navigate('/');
    }


    /* 로그아웃 클릭 이벤트 */
    const clickLogOut = () => {
        alert("!!!");
    }

    /* 토글 버튼 클릭 이벤트 */
    console.log("토글 --> ", toggleOpen);

    /* 슬라이더 세팅 */
    const settings = {
        dots: false,
        infinite: true,
        vertical: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
    };

    return (
        <div className='header-wrap'>
            <div className='header-top-notice'>
                <Slider {...settings}>
                    <p className='header-top-notice-text'>회원가입시 <b>가입별 혜택 제공</b></p>
                    <p className='header-top-notice-text'>모든 구매고객 <b>샘플 3종 랜덤 증정</b></p>
                    <p className='header-top-notice-text'>조선미녀 카톡 친구추가 시 <b>5,000원 할인쿠폰 증정</b></p>
                </Slider>
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
                            {isLoggedIn ?
                                (<li onClick={logout}><Link to="/login"><GoUnlock /></Link></li>) :
                                (<li><Link to="/login"><GoLock /></Link></li>)}
                            <li onClick={!isLoggedIn ? handleMypage : null} ><Link to="/mypage"><GoPerson /></Link></li>
                                {/* 로그인안했을때 누르면 로그인페이지로
                            로그인햇을때는 마이페이지로 이동되게해야함 */}
                                {
                                    isLoggedIn
                                        ? <li><Link to="/login"><GoUnlock /></Link></li>
                                        : <li><Link to="/login"><GoLock /></Link></li>
                                }
                                {/* <li><Link to="/login"><GoLock /></Link></li> */}
                                <li><Link to="/mypage"><GoPerson /></Link></li>
                                <li><Link to="/cart"><PiShoppingBag /></Link></li>
                                <li><Link to="/"><IoSearchOutline /></Link></li>
                                {
                                    toggleOpen
                                        ? <li><Link onClick={() => setToggleOpen(!toggleOpen)}><IoCloseOutline /></Link></li>
                                        : <li><Link onClick={() => setToggleOpen(!toggleOpen)}><BsList /></Link></li>
                                }
                        </ul>
                    </div>
                </div>
                {
                    toggleOpen &&
                    <div className='header-bottom-menu'>
                        <div className='header-bottom-menu-left'>
                            <div className='header-bottom-menu-category'>
                                <span>Shop All</span>
                                <ul className='header-bottom-menu-category-list'>
                                    <li><Link to="/">전 제품</Link></li>
                                    <li><Link to="/">스킨케어</Link></li>
                                    <li><Link to="/">바디케어</Link></li>
                                    <li><Link to="/">라이프스타일</Link></li>
                                    <li><Link to="/">세트</Link></li>
                                </ul>
                            </div>
                            <div className='header-bottom-menu-sub-category'>
                                <span>유형별</span>
                                <ul className='header-bottom-menu-sub-category-list'>
                                    <li><Link to="/">선케어</Link></li>
                                    <li><Link to="/">세럼</Link></li>
                                    <li><Link to="/">젤/크림</Link></li>
                                    <li><Link to="/">토너/에센스</Link></li>
                                    <li><Link to="/">클렌저</Link></li>
                                    <li><Link to="/">각질제거</Link></li>
                                    <li><Link to="/">마스크팩</Link></li>
                                    <li><Link to="/">기타</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className='header-bottom-menu-right'>
                            <img src="images/header_menu_image.jpg" alt="" />
                        </div>
                    </div>
                }
            </div>
        </div>
    );
}