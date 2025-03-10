import React from 'react';
import MainTitleBlock from '../../component/MainTitleBlock';
import MainProductBlock from '../../component/MainProductBlock';

export default function MainBestProducts() {
    return (
        <div className='main-contents-best'>
            <MainTitleBlock
                divClassName="main-contents-best-top"
                title="Best Product"
                des="조선미녀의 베스트상품을 만나보세요"
            />
            <div className='main-contents-best-products'>
                <MainProductBlock className="main-contents-best-products" />
            </div>
        </div>
    );
}