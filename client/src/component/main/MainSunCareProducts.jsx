import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { GoHeart } from "react-icons/go";
import axios from 'axios';

export default function MainSunCareProducts({className}) {
    const [itemList, setItemList] = useState([]);

    useEffect(() => {
        axios.post("http://localhost:9000/main/sunItem")
            .then(res => setItemList(res.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <ul className={`${className}-ul`}>
            {
                itemList && itemList.map((item) => 
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
        </ul>
    );
}