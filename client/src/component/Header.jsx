import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GoPerson } from "react-icons/go";
import { PiShoppingBag } from "react-icons/pi";
import { IoSearchOutline } from "react-icons/io5";
import { BsList } from "react-icons/bs";
import { GoLock } from "react-icons/go";
import { GoUnlock } from "react-icons/go";
import { AuthContext } from '../auth/AuthContext.js';
import { useContext } from 'react';

export default function Header() {
    const {isLoggedIn,setIsLoggedIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const logout = () => {
        const handleLog = window.confirm("로그아웃 하시겠습니까?");
            if(handleLog){
                localStorage.removeItem('token');
                localStorage.removeItem('user_id');
                setIsLoggedIn(false);
            } else{
                setIsLoggedIn(true);
                navigate('/');
            }
    }
    const handleMypage = () => {
        const handleLog = window.confirm("로그인이 필요한 서비스입니다. 로그인하시겠습니까?");
            (handleLog) ? navigate('/login') : navigate('/');            
    }

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
                            {isLoggedIn ?
                            (<li onClick={logout}><Link to="/login"><GoUnlock /></Link></li>) :
                            (<li><Link to="/login"><GoLock /></Link></li>) }                            
                            <li onClick={!isLoggedIn ? handleMypage : null} ><Link to="/mypage"><GoPerson /></Link></li>
                            <li><Link to="/cart"><PiShoppingBag /></Link></li>
                            <li><Link to="/"><IoSearchOutline /></Link></li>
                            <li><Link to="/"><BsList /></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

