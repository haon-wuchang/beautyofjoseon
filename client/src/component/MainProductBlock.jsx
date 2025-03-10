import React from 'react';
import { GoHeart } from "react-icons/go";
import { Link } from 'react-router-dom';

export default function MainProductBlock({className}) {
    return (
        <ul className={`${className}-ul`}>
            <Link to="/product/detail">
                <li className={`${className}-li`}>
                    <img className={`${className}-img`} src="https://beautyofjoseonkr.cafe24.com/web/product/medium/202309/b027dbcad141171593b16ea1178dca7e.jpg" alt="" />
                    <div className={`${className}-detail`}>
                        <p className={`${className}-detail-title`}>병풀비타세럼</p>
                        <p className={`${className}-detail-price`}>17,000원</p>
                    </div>
                    <div className={`${className}-like`}>
                        <GoHeart />
                    </div>
                </li>
            </Link>
        </ul>
    );
}