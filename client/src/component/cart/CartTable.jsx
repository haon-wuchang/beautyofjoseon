import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/cartContext.js';
import { useCart } from '../../hooks/useCart.js';
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";

export default function CartTable() {
    const { updateCartList, deleteCartItem } = useCart();
    const { cartList } = useContext(CartContext);
    const { totalPrice } = useContext(CartContext);

    const [cids, setCids] = useState([]); // 장바구니 아이템 개별 선택시 cid 배열 생성, 저장

    console.log("장바구니 목록 --> ", cartList);

    // 장바구니 아이템 개별 삭제 버튼 클릭 이벤트
    const clickDeleteItem = (cid) => {
        const select = window.confirm("선택하신 상품을 삭제하시겠습니까?");
        select && deleteCartItem(cid);
    }

    // 장바구니 아이템 전체 선택 버튼 클릭 이벤트
    const clickSelectAll = () => {
        const allCid = cartList.map((item) => item.cid);
        console.log("상품 전체 선택 --> ", allCid);
    }

    // 장바구니 아이템 개별 선택 버튼 클릭 이벤트
    const clickSelect = (cid) => {
        const findCid = cids.find(item => item.cid === cid);
        if (findCid) {
            const deleteCid = cids.filter(item => item.cid !== cid);
            setCids(deleteCid);
        } else {
            setCids([...cids, {"cid":cid}]);
        }
    }
    console.log("상품 개별 선택 --> ", cids);
    
    return (
        <>
            { cartList && cartList.length > 0
                &&
                <>
                    <table className='cart-main-table'>
                        <thead>
                            <tr className='cart-main-table-title'>
                                <td>
                                    <button onClick={clickSelectAll}><FaCheck /></button>
                                </td>
                                <td>이미지</td>
                                <td>상품정보</td>
                                <td>수량</td>
                                <td>상품구매금액</td>
                                <td>할인금액</td>
                                <td>배송구분</td>
                                <td>배송비</td>
                                <td>선택</td>
                            </tr>
                        </thead>
                        <tbody>
                            { cartList.map((item) =>
                                <tr className='cart-main-table-list'>
                                    <td>
                                        <button onClick={() => clickSelect(item.cid)}>
                                            <span><FaCheck /></span>
                                        </button>
                                        <input type="checkbox" />
                                    </td>
                                    <td>
                                        <img src={`http://localhost:9000/${item.main_image}`} alt={`${item.pname} 상품 이미지`} />
                                    </td>
                                    <td>{item.pname}</td>
                                    <td>
                                        <div>
                                            <button onClick={() => updateCartList(item.cid, "decrease", 1)}><FiMinus /></button>
                                            <span>{item.qty}</span>
                                            <button onClick={() => updateCartList(item.cid, "increase", 1)}><FiPlus /></button>
                                        </div>
                                        <div>
                                            {/* <button>변경</button> */}
                                        </div>
                                    </td>
                                    <td>
                                        <p>{item.price}원</p>
                                        <p>{Number(item.discount_price).toLocaleString()}원</p>
                                    </td>
                                    <td>{item.discount_rate !== 0 ? `${item.discount.toLocaleString()}원` : "-"}</td>
                                    <td>기본배송</td>
                                    <td>{ totalPrice > 20000 ? "무료배송" : "3,000원" }</td>
                                    <td>
                                        <button>주문하기</button>
                                        <button>관심상품등록</button>
                                        <button onClick={() => clickDeleteItem(item.cid)}>
                                            <span><IoClose /></span>
                                            <span>삭제</span>
                                        </button>
                                    </td>
                                </tr>
                            ) }
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan="9">[기본배송]</td>
                            </tr>
                        </tfoot>
                    </table>
                    <p className='cart-main-table-notice'>할인 적용 금액은 주문서작성의 결제예정금액에서 확인 가능합니다.</p>
                    <div className='cart-main-table-option-btns'>
                        <button>삭제하기</button>
                        <button>해외배송상품 장바구니로 이동</button>
                        <button>장바구니비우기</button>
                        <button>견적서출력</button>
                    </div>
                </>
            }
        </>
    );
}