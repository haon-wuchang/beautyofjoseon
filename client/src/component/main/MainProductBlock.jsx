import React, { useState } from 'react';
import Slider from "react-slick";
import '../slider/slick-theme.css';
import '../slider/slick.css';
import { PrevArrow, NextArrow } from './Arrows.jsx';
import { GoHeart } from "react-icons/go";
import { Link } from 'react-router-dom';

export default function MainProductBlock({ bestList, className }) {
    const [progress, setProgress] = useState(0);
    const totalSlides = bestList.length; // 전체 슬라이드 갯수
    const slidesToShow = 4; //한 번에 보여줄 슬라이드 갯수

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
                                    <div className={`${className}-like`}>
                                        <GoHeart />
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
