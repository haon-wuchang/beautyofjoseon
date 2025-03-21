import React, { useContext, useEffect } from 'react';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { OrderContext } from '../context/orderContext.js';
import { useOrder } from '../hooks/useOrder.js';
import PaymentDestination from '../component/payment/PaymentDestination.jsx';

export default function Payment() {
    const { orderList, orderType, orderPrice } = useContext(OrderContext);
    const { getCartAll, getSelectItems } = useOrder();
    
    useEffect(() => {
        if (orderType === "all") {
            getCartAll();
        } else {
            getSelectItems();
        }
    }, []);

    console.log("주문정보 --> ", orderList);


    return (
        <div className='payment-page-wrap'>
            <div className='payment-page-top'>
                <div>
                    <span><IoIosArrowBack /></span>
                    <span>조선미녀</span>
                </div>
                <div>주문/결제</div>
            </div>

            <PaymentDestination /> {/* 배송지 블럭 */}

            <div className='payment-order-list'>
                <div className='payment-block-title'>
                    <span>주문상품</span>
                    <span><IoIosArrowUp /></span>
                </div>
                <ul className='payment-order-list-main'>
                    { orderList.map((item) => 
                        <li className='payment-order-list-products'>
                            <div className='payment-order-list-products-img'>
                                <img src={`http://localhost:9000/${item.main_image}`} alt="" />
                            </div>
                            <div className='payment-order-list-products-detail'>
                                <p>{item.pname}</p>
                                <p>수량: {item.qty}개</p>
                                <p>{Number(item.discount_price).toLocaleString()}원</p>
                            </div>
                        </li>
                    ) }
                </ul>
                <div className='payment-order-list-bottom'>
                    <span>배송비</span>
                    <span>{orderPrice > 20000 ? "무료" : "3,000원" }</span>
                </div>
            </div>
            <div className='payment-discount'>
                <div className='payment-block-title'>
                    <span>할인/부가결제</span>
                    <span><IoIosArrowUp /></span>
                </div>
                <div className='payment-discount-contents'>
                    <div className='payment-discount-code'>
                        <label>할인코드 적용</label>
                        <div>
                            <input type="text" />
                            <span>적용</span>
                        </div>
                    </div>
                    <div className='payment-discount-coupon'>
                        <div>
                            <span>쿠폰 할인</span>
                            <div>
                                <span>0원</span>
                                <button>쿠폰 적용</button>
                            </div>
                        </div>
                        <p>보유쿠폰 <span>0개</span></p>
                    </div>
                    <div className='payment-discount-bottom'>
                        <span>적용금액</span>
                        <span>-0원</span>
                    </div>
                </div>
            </div>
            <div className='payment-detail'>
                <div className='payment-block-title'>
                    <span>결제정보</span>
                    <span><IoIosArrowUp /></span>
                </div>
                <div className='payment-detail-list'>
                    <ul>
                        <li>
                            <span>주문상품</span>
                            <span>{orderPrice.toLocaleString()}원</span>
                        </li>
                        <li>
                            <span>배송비</span>
                            <span>+ {orderPrice > 20000 ? "0" : "3,000" }원</span>
                        </li>
                        <li>
                            <span>할인/부가결제</span>
                            <span>
                                <span>- 0</span>
                                <span>원</span>
                            </span>
                        </li>
                    </ul>
                </div>
                <div className='payment-detail-bottom'>
                    <span>최종 결제 금액</span>
                    <span>{orderPrice > 20000 ? `${orderPrice.toLocaleString()}` : `${(orderPrice + 3000).toLocaleString()}`}원</span>
                </div>
            </div>
            <div className='payment-method'>
            <div className='payment-block-title'>
                    <span>결제수단</span>
                    <span><IoIosArrowUp /></span>
                </div>
            </div>
            <div className='payment-benefit'>
                <span>적립 혜택</span>
                <div>
                    <span>162원 예정</span>
                    <span><IoIosArrowUp /></span>
                </div>
            </div>
            <button className='payment-button'>{orderPrice > 20000 ? `${orderPrice.toLocaleString()}` : `${(orderPrice + 3000).toLocaleString()}`}원 결제하기</button>
        </div>
    );
}