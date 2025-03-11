import React from 'react';
import { FaHeart } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { BiSquare } from "react-icons/bi";
import { CgDice2 } from "react-icons/cg";
import { CgDice3 } from "react-icons/cg";
import { CgDice4 } from "react-icons/cg";

export default function Products() {
    return (
        <div className='product-all-box'>
            <div className='product-all-top'>
                <h5>SHOP ALL</h5>
                <ul>
                    <li>전 제품</li>
                    <li>스킨케어</li>
                    <li>바디케어</li>
                    <li>라이프스타일</li>
                    <li>세트</li>
                </ul>
            </div>
            <div className='product-all-top-flex'>
                <div>
                    <span>37</span>
                    <span>Products</span>
                </div>
                <div>
                    <CgDice2 className='product-all-top-flex-square' />
                    <CgDice3 className='product-all-top-flex-square' />
                    <CgDice4 className='product-all-top-flex-square' />
                    <select name="" id="">
                        <option value="default">Sort</option>
                        <option value="new">신상품</option>
                        <option value="pname">상품명</option>
                        <option value="lowPrice">낮은가격</option>
                        <option value="highPrice">높은가격</option>
                        <option value="best">인기상품</option>
                        <option value="review">사용후기</option>
                    </select>
                </div>
            </div>
            <div className='product-box9'>
                <div className='square9'>
                    <img src="https://beautyofjoseon.co.kr/web/product/medium/202408/c8cda7e6862e2e8a5cc1a7934969f234.jpg" alt="" />
                    <span className='square9-heart'><FaRegHeart /></span>
                    {/* <span><FaHeart /></span>   */}
                    <span className='product-title'>[New]맑은쌇선크림 아쿠아프레쉬</span>
                    <p className='product-price'>18,000원</p>
                    <span className='product-sale'>10%</span>
                    <span className='product-sale-price'>16,200원</span>
                </div>
            </div>
            {/*<div className='product-box4'>
                <div className='square4'>
                    <img src="https://beautyofjoseon.co.kr/web/product/medium/202408/c8cda7e6862e2e8a5cc1a7934969f234.jpg" alt="" />
                    <span className='square4-heart'><FaRegHeart /></span>
                     <span><FaHeart /></span> 
                    <span className='product-title'>[New]맑은쌇선크림 아쿠아프레쉬</span>
                    <p className='product-price'>18,000원</p>
                    <span className='product-sale'>10%</span>
                    <span className='product-sale-price'>16,200원</span>
                </div>   
            </div>*/}
            {/* <div className='product-box2'>
                <div className='square2'>
                    <img src="https://beautyofjoseon.co.kr/web/product/medium/202408/c8cda7e6862e2e8a5cc1a7934969f234.jpg" alt="" />
                    <span className='square4-heart'><FaRegHeart /></span>
                      <span><FaHeart /></span> 
                     <span className='product-title'>[New]맑은쌇선크림 아쿠아프레쉬</span>
                    <p className='product-price'>18,000원</p>
                    <span className='product-sale'>10%</span>
                    <span className='product-sale-price'>16,200원</span>
                </div>  
            </div> */}
            <div className='page'>
                {/* <Pagination
                    // 현제 보고있는 페이지 
                    activePage={1}
                    // 한페이지에 출력할 아이템수
                    itemsCountPerPage={30}
                    // 총 아이템수
                    totalItemsCount={60}
                    // 표시할 페이지수
                    pageRangeDisplayed={2}
                    // 함수
                    onChange={handlePageChange}>
                </Pagination> */}
            </div>
        </div>
    );
}

