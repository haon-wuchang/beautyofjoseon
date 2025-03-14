import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { IoGrid } from "react-icons/io5";
import { TbLayoutListFilled } from "react-icons/tb";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { BiSquare } from "react-icons/bi";
import { CgDice2 } from "react-icons/cg";
import { CgDice3 } from "react-icons/cg";
import { CgDice4 } from "react-icons/cg";
import '../style/product.scss';

export default function Products() {

    const [list, setList] = useState([]);

    useEffect(() => {
        axios
            .post('http://localhost:9000/product/list')
            .then(res => { setList(res.data) })
            .catch((error) => console.log(error))
    }, [])

    const rows = [];
    for (let i = 0; i < list.length; i += 3) {
        rows.push(list.slice(i, i + 3));
    }


    console.log('list', list);



    return (
        <div className='p-common products-content'>
            <div className='product-all-top'>
                <h5 className='f18 w600'>SHOP ALL</h5>
                <ul className='flex list-none'>
                    <li>전 제품</li>
                    <li>스킨케어</li>
                    <li>바디케어</li>
                    <li>라이프스타일</li>
                    <li>세트</li>
                </ul>
            </div>
            <div className='product-all-top-bottom space-between'>
                <div>
                    <span>{list.length}</span>
                    <span>Products</span>
                </div>
                <div className='flex'>
                    <ul className='flex'>
                        <li>
                            <TbLayoutListFilled />
                        </li>
                        <li>
                            <IoGrid />
                        </li>
                        <li>
                            <BsGrid3X3GapFill />

                        </li>
                    </ul>

                    {/* 
                    <CgDice2 className='product-all-top-flex-square' />
                    <CgDice3 className='product-all-top-flex-square' />
                    <CgDice4 className='product-all-top-flex-square' /> */}
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

            {/* 상품 행당 3개일 때 */}
            <div className='product-list-wrap'>
                {rows.map((rowArray, index) => (
                    <div className='product-box9' key={index}>
                        {rowArray.map((product) => (
                            <Link
                                key={product.pid}
                                to={`/product/list${product.pid}`}
                            >
                                <div className='square9'>
                                    <img src={product.image} alt="" />
                                    <span className='square9-heart'><FaRegHeart /></span>
                                    <span className='product-title'>{product.name}</span>
                                    <p className='product-price'>18,000원</p>
                                    <span className='product-sale'>10%</span>
                                    <span className='product-sale-price'>16,200원</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                ))}

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

