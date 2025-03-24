import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

export default function Review({ myOrder, myReview }) {
    const navigate = useNavigate();

    let filter = myOrder.filter((item) => item.delivery_status === '배송완료');

    const handleReview = (pid) => {
        navigate(`/product/detail/:${pid}`);
    }
    // console.log('flqb', myReview);

    /* 리뷰작성 전 페이지네이션 */
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 5;

    // 페이지네이션 관련 로직
    const endOffset = itemOffset + itemsPerPage;

    const currentItems = filter.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(filter.length / itemsPerPage);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % filter.length;
        setItemOffset(newOffset);
    }


    /* 작성한 리뷰 페이지네이션 */
    const [itemOffset2, setItemOffset2] = useState(0);
    const itemsPerPage2 = 5;

    // 페이지네이션 관련 로직
    const endOffset2 = itemOffset2 + itemsPerPage2;

    const currentItems2 = myReview.slice(itemOffset2, endOffset2);
    const pageCount2 = Math.ceil(myReview.length / itemsPerPage2);

    const handlePageClick2 = (event) => {
        const newOffset2 = (event.selected * itemsPerPage2) % myReview.length;
        setItemOffset2(newOffset2);
    };

    return (
        <div className='mypage-review-all'>
            <div className='mypage-update-info-title mypage-title'>작성가능 리뷰</div>
            <div className='mypage-review-write'>
                <table>
                    <tr>
                        <td>번호</td>
                        <td>상품정보</td>
                        <td>수량</td>
                        <td>총금액</td>
                        <td></td>
                    </tr>
                    {
                        currentItems && currentItems.map((item) =>
                            <tr>
                                <td>1</td>
                                <td>
                                    <img src={item.main_image} alt="리뷰이미지" />
                                    <span>{item.pname}</span>
                                </td>
                                <td>{item.qty}개</td>
                                <td>{item.total_price.toLocaleString().concat('원')}</td>
                                <td onClick={() => { handleReview(item.pid) }}>리뷰작성하기</td>
                            </tr>
                        )
                    }
                </table>
            </div>
            <div className='mypage-review-write-page'>
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
            </div>
            <div className='mypage-update-info-title mypage-title'>작성한 리뷰 관리</div>
            <div className='mypage-review-writed-select'>
                <select name="" id="">
                    <option value="">선택</option>
                    <option value="">작성일자별</option>
                    <option value="">상품명별</option>
                </select>
            </div>
            <div className='mypage-review-writed'>
                <table>
                    <tr>
                        <td>주문번호</td>
                        <td>상품정보</td>
                        <td>제목</td>
                        <td>내용</td>
                        <td>작성일</td>
                        <td>조회</td>
                    </tr>
                    {currentItems2 && currentItems2.map((item) =>
                        <tr>
                            <td>{item.order_number}</td>
                            <td>{item.pname}</td>
                            <td>{item.subject}</td>
                            <td>{item.text}</td>
                            <td>{item.rdate.slice(0, 10)}</td>
                            <td>{item.view_count}</td>
                        </tr>
                    )
                    }
                </table>
            </div>
            <div className='mypage-review-writed-page'>
                <ReactPaginate
                    breakLabel="..."
                    nextLabel={<MdNavigateNext />}
                    previousLabel={<MdNavigateBefore />}
                    onPageChange={handlePageClick2}
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
            </div>
        </div>
    );
}

