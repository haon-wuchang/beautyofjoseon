import React from 'react';
import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";


export default function Wish({ wishList }) {

        /* 페이지네이션 */
        const [itemOffset, setItemOffset] = useState(0);
        const itemsPerPage = 5;
    
        // 페이지네이션 관련 로직
        const endOffset = itemOffset + itemsPerPage;
    
        const currentItems = wishList.slice(itemOffset, endOffset); 
        const pageCount = Math.ceil(wishList.length / itemsPerPage); 
    
        const handlePageClick = (event) => {
            const newOffset = (event.selected * itemsPerPage) % wishList.length;
            setItemOffset(newOffset);
        };


    return (
        <div className='mypage-wish-all'>
            <div className='mypage-update-info-title mypage-title'>관심상품</div>
            <div className='mypage-wish-table'>
                <table>
                    <tr>
                        <td>
                            <input type="checkbox" />
                        </td>
                        <td>상품정보</td>
                        <td>판매가</td>
                        <td></td>
                    </tr>
                    {currentItems && currentItems.map((item) => (
                        <tr className='mypage-wish-table-info'>
                            <td><input type="checkbox" /></td>
                            <td>
                                <img src={item.main_image} alt="" />
                                <span>{item.pname}</span>
                            </td>
                            <td>{item.price.toLocaleString().concat('원')}</td>
                            <td>
                                <button>주문하기</button>
                                <button>장바구니 담기</button>
                                <button>관심상품 삭제</button>
                            </td>
                        </tr>

                    ))}
                </table>
            </div>
            <div className='mypage-wish-btns'>
                <button>전체상품주문</button>
                <button>관심상품 전체 삭제</button>
            </div>
            <div className='mypage-wish-page'>
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
        </div>
    );
}

