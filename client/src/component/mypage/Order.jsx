import React, { useState, useRef } from 'react';
import { CiSearch } from "react-icons/ci";
import ReactPaginate from 'react-paginate';
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

export default function Order({ myOrder }) {
    const [orderDate, setOrderDate] = useState({});
    const [orderCategory, setOrderCategory] = useState({});
    const [date, setDate] = useState('');

    const checkOrderDate = (e) => {
        const { name, value } = e.target;
        setOrderDate({ ...orderDate, [name]: value });
    }
    // console.log(orderDate);
    const checkOrderEndDate = (e) => {
        const { name, value } = e.target;
        setOrderDate({ ...orderDate, [name]: value });
    }
    // console.log(orderDate);

    const orderStatus = {
        'before_deposit': '입금전',
        'Prepare_for_delivery': '배송준비중',
        'delivery': '배송중',
        'delivery_done': '배송완료',
        'cancle': '취소',
        'change': '교환',
        'return': '반품'
    };

    /* 페이지네이션 */
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 5;

    // 페이지네이션 관련 로직
    const endOffset = itemOffset + itemsPerPage;

    const currentItems = myOrder.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(myOrder.length / itemsPerPage);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % myOrder.length;
        setItemOffset(newOffset);
    };
    const selectRef = useRef(null);

    const handleSelectOrder = (e) => {
        const {name , value} = e.target;
        setOrderCategory({...orderCategory, [name]:value})
    }
    // console.log(orderCategory);
    
    const handleSearch = () => {
        // 여기서 셀렉트박스로 선택한 애와 주문상품의 주문처리상태가 일치하면 걔만 출력되게 작업해야함
        // 근데 주문상품정보를 우선은 내맘대로 설정하고
        //나중에 시간이 잇다면 관리자로 주문처리상태 바뀌게 해야할듯 
        if(orderCategory === orderStatus.delivery){

        }
    }

    return (
        <div className='mypage-order-all'>
            <div className='mypage-update-info-title mypage-title'>주문조회</div>
            <div className='mypage-order-top-tab'>
                <ul>
                    <li>
                        <span>주문내역조회</span>
                        <span>({currentItems.length})</span>
                    </li>
                    <li>
                        <span>취소/반품/교환 내역</span>
                        <span>(0)</span>
                    </li>
                    <li>
                        <span>과거주문내역</span>
                        <span>(0)</span>
                    </li>
                    <li>
                        <span>이전 주문내역</span>
                        <span>(0)</span>
                    </li>
                </ul>
            </div>
            <div className='mypage-order-select-box'>
                <select name="select-order" ref={selectRef} onChange={(e) => {handleSelectOrder(e)}}>
                    <option value="default">선택</option>
                    <option value="all">전체주문 처리상태</option>
                    <option value="before_deposit">입금전</option>
                    <option value="Prepare_for_delivery">배송준비중</option>
                    <option value="delivery">배송중</option>
                    <option value="delivery_done">배송완료</option>
                    <option value="cancle">취소</option>
                    <option value="change">교환</option>
                    <option value="return">반품</option>
                </select>
                <ul>
                    <li onClick={() => { setDate('today') }}
                        className={date === 'today' && 'active-order-date'}>오늘</li>
                    <li onClick={() => { setDate('week') }}
                        className={date === 'week' && 'active-order-date'}>1주일</li>
                    <li onClick={() => { setDate('month') }}
                        className={date === 'month' && 'active-order-date'}>1개월</li>
                    <li onClick={() => { setDate('3month') }}
                        className={date === '3month' && 'active-order-date'}>3개월</li>
                    <li onClick={() => { setDate('6month') }}
                        className={date === '6month' && 'active-order-date'}>6개월</li>
                </ul>
                <div>
                    <input type="date" onChange={checkOrderDate} name='start_date' />
                    <span>~</span>
                    <input type="date" onChange={checkOrderEndDate} name='end_date' />
                    <span onClick={handleSearch}><CiSearch /></span>
                </div>
            </div>
            <ul className='mypage-order-select-desc'>
                <li>· 기본적으로 최근 3개월간의 자료가 조회되며, 기간 검색시 주문처리완료 후 36개월 이내의 주문내역을 조회하실 수 있습니다.</li>
                <li>· 완료 후 36개월 이상 경과한 주문은 [과거주문내역]에서 확인할 수 있습니다.</li>
                <li>· 주문번호를 클릭하시면 해당 주문에 대한 상세내역을 확인하실 수 있습니다.</li>
                <li>· 취소/교환/반품 신청은 배송완료일 기준 14일까지 가능합니다.</li>
            </ul>
            <div className='mypage-order-bottom-all'>
                <div className='mypage-update-info-title'>주문 상품 정보</div>
                <div>
                    <table>
                        <tr>
                            <td>주문번호</td>
                            <td>주문날짜</td>
                            <td>상품정보</td>
                            <td>수량</td>
                            <td>총금액</td>
                            <td>주문처리상태</td>
                            <td>취소/교환/반품</td>
                        </tr>
                        {currentItems && currentItems.map((item) => (
                            <tr className='mypage-order-table-info'>
                                <td>{item.order_number}</td>
                                <td>{item.odate.slice(0, 10)}</td>
                                <td>
                                    <img src={item.main_image} alt="주문대표이미지" />
                                    <span>{item.pname}</span>
                                </td>
                                <td>{item.qty}</td>
                                <td>{item.total_price.toLocaleString().concat('원')}</td>
                                <td>{item.delivery_status}</td>
                            </tr>
                        ))
                        }
                    </table>
                </div>
                <div className='mypage-order-page'>
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
        </div>
    );
}

