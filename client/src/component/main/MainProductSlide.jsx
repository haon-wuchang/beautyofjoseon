import React from 'react';
import Slider from "react-slick";
import '../slider/slick-theme.css';
import '../slider/slick.css';
import { PrevArrow, NextArrow } from './Arrows.jsx';
import { GoHeart } from "react-icons/go";
import { Link } from 'react-router-dom';

export default function MainProductBlock({bestList, className}) {
    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false, // 수정 필
        autoplaySpeed: 5000,
        pauseOnHover: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        centerMode: true,
        centerPadding: "45px",
    };

    return (
        <ul className={`${className}-ul`}>
            <Slider {...settings}>
                {
                    bestList && bestList.map((item) => 
                        <Link to="/product/detail" className={`${className}-block`}>
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
    );
}

// className="main-contents-best-products" 