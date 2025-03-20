import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from "../auth/AuthContext.js";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { IoGrid } from "react-icons/io5";
import { TbLayoutListFilled } from "react-icons/tb";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
import ReactPaginate from 'react-paginate';
import '../style/product.scss';
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";




export default function Products() {



    const { isLoggedIn } = useContext(AuthContext);

    const [list, setList] = useState([]);

    useEffect(() => {
        axios
            .post('http://localhost:9000/product/list')
            .then(res => { setList(res.data) })
            .catch((error) => console.log(error))
    }, [])

    console.log('list', list);

    console.log('list.discount_rate', list.discount_rate);



    /* 페이지네이션 */
    const itemsPerPage = 20;
    const [itemOffset, setItemOffset] = useState(0);

    // 페이지네이션 관련 로직
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);

    const currentItems = list.slice(itemOffset, endOffset); // list에서 20개씩 슬라이싱
    const pageCount = Math.ceil(list.length / itemsPerPage); // 전체 페이지 수

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % list.length;
        console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
        setItemOffset(newOffset);
    };


    return (
        <div className='p-common products-content'>
            <div className='product-all-top'>
                <h5 className='f18'>SHOP ALL</h5>
                <ul className='flex list-none w500'>
                    <li>전 제품</li>
                    <li>스킨케어</li>
                    <li>바디케어</li>
                    <li>라이프스타일</li>
                    <li>세트</li>
                </ul>
            </div>
            <div className='product-all-bottom space-between'>
                <div>
                    <span className='f12' >{list.length}</span>
                    <span className='f12'>Products</span>
                </div>
                <div className='flex'>
                    {/* grid 아이콘들 */}
                    <ul className='grid-icon'>
                        <li><TbLayoutListFilled /></li>
                        <li><IoGrid /></li>
                        <li><BsGrid3X3GapFill /></li>
                    </ul>
                    <div className='sort'>
                        <div className='flex'>
                            <span>sort</span>
                            <div><GoTriangleDown /> </div>
                            <div style={{ display: "none" }}><GoTriangleUp /></div>
                        </div>
                        <ul style={{ display: "none" }}>
                            <li>신상품</li>
                            <li>상품명</li>
                            <li>낮은가격</li>
                            <li>높은가격</li>
                            <li>인기상품</li>
                            <li>사용후기</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* 상품 행당 3개일 때 */}
            <div className='product-list'>
                {currentItems.map((item) => (
                    <Link key={item.pid} to={`/product/detail/${item.pid}`}>
                        <div className='product-item'>
                            <div className='product-img-wrap'>
                                <img src={item.image} alt="" />

                            </div>
                            <span className='wish-icon'><FaRegHeart /></span>
                            <span className='product-title w600 text-center f15' >{item.pname}</span>
                            <p className='product-price pt10 f12'>{(item.discount_rate) ? `${item.price.toLocaleString()}원` : null }</p>
                            <div className='gap5 flex'>
                                {(item.discount_rate) ?
                                    (<div className='product-sale'>
                                        {`${item.discount_rate.toLocaleString()}%`}
                                    </div>) : null}
                                <div className='product-sale-price'>{`${((item.price - (item.discount_rate * 100)).toLocaleString())}원`}
                                </div>

                            </div>
                        </div>
                    </Link>
                ))}

            </div>
                {/* 페이지네이션 */}
                <ReactPaginate
                    breakLabel="..."
                    nextLabel={<MdNavigateNext />}
                    previousLabel={<MdNavigateBefore />}
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    containerClassName="pagination"
                    activeClassName="active"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="prev"
                    nextClassName="next"
                    disabledClassName="disabled"
                />





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

