import React from 'react';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import PaymentDestination from '../component/payment/PaymentDestination.jsx';

export default function Payment() {
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
                <div>
                    <div>
                        <img style={{width: "80px"}} src="https://beautyofjoseon.co.kr/web/product/tiny/202408/af8c24dd16346451d39954442738da37.jpg" alt="" />
                        <div>
                            <p>[NEW] 맑은쌀선크림 아쿠아프레쉬</p>
                            <p>수량: 1개</p>
                            <p>16,200원</p>
                        </div>
                    </div>
                    <div>
                        <span>배송비</span>
                        <span>3,000원</span>
                    </div>
                </div>
            </div>
            <div className='payment-discount'>
                <div className='payment-block-title'>
                    <span>할인/부가결제</span>
                    <span><IoIosArrowUp /></span>
                </div>
                <div>
                    <div>
                        <label>할인코드 적용</label>
                        <div>
                            <input type="text" />
                            <button>적용</button>
                        </div>
                    </div>
                    <div>
                        <div>
                            <span>쿠폰 할인</span>
                            <span>0원</span>
                            <button>쿠폰 적용</button>
                        </div>
                        <p>보유쿠폰 0개</p>
                    </div>
                    <div className='payment-block-bottom'>
                        <span>적용금액</span>
                        <span>-0원</span>
                    </div>
                </div>
            </div>
            <div className='payment-detail'>
                <div className='payment-block-title'>
                    <span>결제수단</span>
                    <span><IoIosArrowUp /></span>
                </div>
                <div>
                    <ul>
                        <li>
                            <span>주문상품</span>
                            <span>16,200원</span>
                        </li>
                        <li>
                            <span>배송비</span>
                            <span>+3,200원</span>
                        </li>
                        <li>
                            <span>할인/부가결제</span>
                            <span>-0원</span>
                        </li>
                    </ul>
                </div>
                <div className='payment-block-bottom'>
                    <span>최종 결제 금액</span>
                    <span>19,200원</span>
                </div>
            </div>
            <div className='payment-method'>
                <div className='payment-method-title'>
                    <span>적립 혜택</span>
                    <span>162원 예정</span>
                    <span><IoIosArrowUp /></span>
                </div>
            </div>
        </div>
    );
}