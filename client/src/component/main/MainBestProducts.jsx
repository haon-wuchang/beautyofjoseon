import React, { useEffect, useState } from 'react';
import MainTitleBlock from '../../component/MainTitleBlock';
import MainProductBlock from './MainProductBlock.jsx';
import axios from 'axios';

export default function MainBestProducts() {
    const [bestList, setBestList] = useState([]);

    useEffect(() => {
        axios.post("http://localhost:9000/main/bestItem")
                    .then(res => setBestList(res.data))
                    .catch(err => console.log(err));
    }, []);

    return (
        <div className='main-contents-best'>
            <MainTitleBlock
                divClassName="main-contents-best-top"
                title="Best Product"
                des="조선미녀의 베스트상품을 만나보세요"
            />
            <div className='main-contents-best-products'>
                <MainProductBlock
                    bestList={bestList}
                    className="main-contents-best-products" 
                />
            </div>
        </div>
    );
}