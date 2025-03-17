import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../auth/AuthContext.js';
import { CartContext } from '../../context/cartContext.js';
import { useCart } from '../../hooks/useCart.js';
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";

export default function CartTable() {
    const { isLoggedIn } = useContext(AuthContext);
    const { getCartList, updateCartList } = useCart();
    const { cartList } = useContext(CartContext);


    useEffect(() => {
        isLoggedIn && getCartList();
    }, []);

    console.log("장바구니 목록 --> ", cartList);

    // 수량 변경 버튼 클릭 이벤트
    // const chageQty = (cid, type, qty) => {
    // }
    // 각각 로컬에서 수량 변경 후 '변경' 버튼 눌렀을 때 DB에 저장되도록 하기

    return (
        <>
            { cartList && cartList.length > 0
                ? (
                    <>
                        <table className='cart-main-table'>
                            <thead>
                                <tr className='cart-main-table-title'>
                                    <td><button><FaCheck /></button></td>
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
                                {   cartList.map((item) => 
                                    <tr className='cart-main-table-list'>
                                        <td><button><FaCheck /></button></td>
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
                                                <button>변경</button>
                                            </div>
                                        </td>
                                        <td>{item.price}원</td>
                                        <td>{ item.discount_rate !== 0 ? `${item.discount}원` : "-" }</td>
                                        <td>기본배송</td>
                                        <td>3,000원</td>
                                        <td>
                                            <button>주문하기</button>
                                            <button>관심상품등록</button>
                                            <button>
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
                )
                : (
                    <p>장바구니가 비어 있습니다.</p>
                )
            }
        </>
    );
}