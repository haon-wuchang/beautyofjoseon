import React from 'react';
import OtherPay from '../../component/OtherPay.jsx';

export default function CartBill() {
    return (
        <div className='cart-bill-block'>
            <div className='cart-bill-block-left'>
                <p>
                    <span>총 상품금액</span>
                    <br />
                    <span>16,200원</span>
                </p>
                <p>
                    <span>총 배송비</span>
                    <br />
                    <span>+3,000원</span>
                </p>
                <p>
                    <span>결제예정금액</span>
                    <br />
                    <span>=19,200원</span>
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