import React from 'react';
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";

export default function CartTable() {
    return (
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
                    <tr className='cart-main-table-list'>
                        <td><button><FaCheck /></button></td>
                        <td>
                            <img src="https://beautyofjoseon.co.kr/web/product/tiny/202408/af8c24dd16346451d39954442738da37.jpg" alt="" />
                        </td>
                        <td>[NEW] 맑은쌀선크림 아쿠아프레쉬</td>
                        <td>
                            <div>
                                <button><FiMinus /></button>
                                <span>1</span>
                                <button><FiPlus /></button>
                            </div>
                            <div>
                                <button>변경</button>
                            </div>
                        </td>
                        <td>16,200원</td>
                        <td>-</td>
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
    );
}