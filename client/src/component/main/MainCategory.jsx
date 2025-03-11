import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function MainCategory() {
    const [categoryList, setCategoryList] = useState([]);

    useEffect(() => {
        axios.get("data/main.json")
            .then(res => setCategoryList(res.data.mainCategory))
            .catch(err => console.log(err));
    }, []);

    return (
        <div className='main-contents-category-wrap'>
            <div className='main-contents-category-top'>
                <p className='main-contents-category-title'>MODERN HANBANG</p>
                <p className='main-contents-category-des'>
                    <p>조선시대의 단장은 화려한 꾸밈보다 단정하게 가꾸기를 게을리하지 않는 것이었습니다.</p>
                    <p>조선미녀는 옛사람들의 지혜를 따라 시간이 흘러도 변치 않는 아름다움과 그 안에 담긴 자연의 전통비법을 현대적으로 풀어냅니다.</p>
                </p>
                <button>Brand story</button>
            </div>
            <div className='main-contents-category-container'>
                <p>Treat Your Skin Concern with Hanbang + Modern Ingredients</p>
                <ul className='main-contents-category-list'>
                    {
                        categoryList && categoryList.map((list) => 
                            <Link>
                                <li>
                                    <img src={list.img} alt="" />
                                    <p>{list.title}</p>
                                </li>
                            </Link>
                        )
                    }
                </ul>
            </div>
        </div>
    );
}