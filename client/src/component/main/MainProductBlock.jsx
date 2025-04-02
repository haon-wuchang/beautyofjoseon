import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext.js';
import { useProduct } from '../../hooks/useProduct.js';
import axios from 'axios';
import Slider from "react-slick";
import '../slider/slick-theme.css';
import '../slider/slick.css';
import { PrevArrow, NextArrow } from './Arrows.jsx';
import { FaHeart, FaRegHeart } from "react-icons/fa6";

export default function MainProductBlock({ bestList, className }) {
    const navigate = useNavigate();
    const { isLoggedIn } = useContext(AuthContext);
    const { getWishList } = useProduct();
    const [wishList, setWishList] = useState([]);

    const [progress, setProgress] = useState(0);
    const totalSlides = bestList.length; // 전체 슬라이드 갯수
    const slidesToShow = 4; //한 번에 보여줄 슬라이드 갯수

    // 위시리스트 불러오기
    useEffect(() => {
        const fetchWishList = async () => {
            const id = localStorage.getItem("user_id");
            if (!id) return;

            try {
                const wish = await getWishList();
                setWishList(wish);
            } catch (err) {
                console.error("위시리스트 불러오기 실패", err);
                setWishList([]);
            }
        };
        fetchWishList();
    }, []);

    // 위시리스트 토글
    const toggleWish = async (pid) => {
        if (!isLoggedIn) {
            alert("로그인 후에 사용할 수 있는 서비스입니다.");
            return navigate("/login");
        }

        const id = localStorage.getItem("user_id");
        const isWished = wishList.includes(pid);
        const newWish = isWished
            ? wishList.filter(item => item !== pid)
            : [...wishList, pid];

        try {
            await axios.post("http://localhost:9000/mypage/updateWishList", {
                id,
                newWishList: newWish,
            });
            setWishList(newWish);
            if (!isWished) alert("위시리스트에 추가되었습니다.");
        } catch (err) {
            console.error("위시리스트 업데이트 실패", err);
        }
    };

    const settings = {
        className: "center",
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        centerMode: true,
        centerPadding: "60px",
        beforeChange: (newIndex) => {
            // 슬라이드 변경 시 진행 바 업데이트
            const newProgress = ((newIndex + slidesToShow) / totalSlides) * 100;
            setProgress(newProgress);
        }
    };

    return (
        <div className={`${className}-wrap`}>
            <ul className={`${className}-ul`}>
                <Slider {...settings}>
                    {
                        bestList && bestList.map((item) =>
                            <Link to={`/product/detail/${item.pid}`} className={`${className}-block`}>
                                <li className={`${className}-li`}>
                                    <img className={`${className}-img`}
                                        src={`http://localhost:9000/${item.main_image}`}
                                        alt="" />
                                    <div className={`${className}-detail`}>
                                        <p className={`${className}-detail-title`}>{item.pname}</p>
                                        {
                                            item.discount_rate === 0
                                                ? <p className={`${className}-detail-price`}>{item.price}원</p>
                                                : <>
                                                    <p className={`${className}-detail-oprice`}>{item.price}</p>
                                                    <p className={`${className}-detail-dprice`}><span>{item.discount_rate}%</span><span>{item.discount_price}원</span></p>
                                                </>
                                        }
                                    </div>
                                    <div className={`${className}-like`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            toggleWish(item.pid);
                                        }}
                                    >
                                        {wishList.includes(item.pid) ? <FaHeart color="red" /> : <FaRegHeart />}
                                    </div>
                                </li>
                            </Link>
                        )
                    }
                </Slider>
            </ul>
            <div className={`${className}-progress-bar`}>
                <div className={`${className}-progress`} style={{ width: `${progress}%` }} />
            </div>
        </div>
    );
}
