import React, { useEffect, useContext } from 'react';
import OtherPay from '../../component/OtherPay.jsx';
import { CartContext } from '../../context/cartContext.js';

export default function CartBill() {
    const { totalPrice } = useContext(CartContext);

    return (
        <div className='cart-bill-block'>
            <div className='cart-bill-block-left'>
                <p>
                    <span>총 상품금액</span>
                    <br />
                    <span>{totalPrice.toLocaleString()}원</span>
                </p>
                <p>
                    <span>총 배송비</span>
                    <br />
                    <span>+ {totalPrice > 20000 ? "0" : "3,000"}원</span>
                </p>
                <p>
                    <span>결제예정금액</span>
                    <br />
                    <span>= {totalPrice > 20000 ? `${totalPrice.toLocaleString()}` : `${(totalPrice + 3000).toLocaleString()}`}원</span>
                </p>
            </div>
            <div className='cart-bill-block-right'>
                <div>
                    <button>전체상품주문</button>
                    <button>선택상품주문</button>
                </div>
                <OtherPay className="cart-bill-pay" />
            </div>
        </div>
    );
}