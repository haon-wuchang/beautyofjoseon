import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

export default function PaymentDestination() {
    const [selectTab, setSelectTab] = useState("input");

    return (
        <div className='payment-destination-block'>
            <div className='payment-block-title'>
                <span>배송지</span>
                <span><IoIosArrowUp /></span>
            </div>
            <div className='payment-destination-tab'>
                <span onClick={() => setSelectTab("recent")}
                    className={selectTab === "recent" ? 'payment-destination-select-tab' : 'payment-destination-normal-tab'}>
                    최근 배송지
                </span>
                <span onClick={() => setSelectTab("input")}
                    className={selectTab === "input" ? 'payment-destination-select-tab' : 'payment-destination-normal-tab'}>
                    직접입력
                </span>
            </div>
            <div className='payment-destination-form'>
                <div className='payment-destination-form-select'>
                    <input type="radio" /><span>회원 정보와 동일</span>
                    <input type="radio" /><span>새로운 배송지</span>
                </div>
                <form>
                    <ul>
                        <li className='payment-destination-form-name'>
                            <label>받는 사람<span> *</span></label>
                            <input type="text" />
                        </li>
                        <li className='payment-destination-form-address'>
                            <label>주소<span> *</span></label>
                            <input type="text" />
                        </li>
                        <li className='payment-destination-form-tel'>
                            <label>휴대전화<span> *</span></label>
                            <select name="" id="">
                                <option value="010">010</option>
                                <option value="011">011</option>
                                <option value="016">016</option>
                                <option value="017">017</option>
                                <option value="018">018</option>
                                <option value="019">019</option>
                            </select>
                            <span>-</span>
                            <input type="text" />
                            <span>-</span>
                            <input type="text" />
                        </li>
                        <li className='payment-destination-form-email'>
                            <label>이메일<span>*</span></label>
                            <input type="text" />
                            <span>@</span>
                            <select name="" id="">
                                <option value="default">-이메일 선택-</option>
                                <option value="naver">naver.com</option>
                                <option value="daum">daum.net</option>
                                <option value="gmail">gmail.com</option>
                                <option value="self">직접입력</option>
                            </select>
                        </li>
                    </ul>
                    <div className='paymnet-destination-plus'>
                        <select name="" id="">
                            <option value="default">-- 메시지 선택 (선택사항) --</option>
                            <option value="1">배송 전에 미리 연락바랍니다.</option>
                            <option value="2">부재 시 경비실에 맡겨주세요.</option>
                            <option value="3">부재 시 문 앞에 놓아주세요.</option>
                            <option value="4">빠른 배송 부탁드립니다.</option>
                            <option value="5">택배함에 보관해 주세요.</option>
                            <option value="self">직접 입력</option>
                        </select>
                        <div>
                            <input type="checkbox" /><span>기본 배송지로 저장</span>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}