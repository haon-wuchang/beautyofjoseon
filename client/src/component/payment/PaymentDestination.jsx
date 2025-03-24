import React, { useContext, useEffect, useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { OrderContext } from '../../context/orderContext.js';
import { useOrder } from '../../hooks/useOrder.js';

export default function PaymentDestination() {
    const { orderType, member } = useContext(OrderContext);
    const [selectTab, setSelectTab] = useState("input");
    const [deliveryType, setDeliveryType] = useState("basic");
    const [domain, setDomain] = useState(""); // 이메일 도메인 선택 관리
    const [isCustom, setIsCustom] = useState(false); // 이메일 도메인 직접입력 박스 관리

    // console.log("주문타입 --> ", orderType);

    // 이메일 도메인 변경 체크
    const handleDomainChange = (e) => {
        const selected = e.target.value;
        if (selected === "self") {
            setIsCustom(true);
            setDomain("");
        } else {
            setIsCustom(false);
            setDomain(selected);
        }
        console.log("도메인 --> ", selected);
    }

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
                    <input onClick={() => setDeliveryType("basic")} type="radio" value="basic" checked={deliveryType === "basic" && "checked"} />
                    <span>회원 정보와 동일</span>
                    <input onClick={() => setDeliveryType("new")} type="radio" value="new" checked={deliveryType === "new" && "checked"} />
                    <span>새로운 배송지</span>
                </div>
                <form>
                    <ul>
                        {deliveryType === "basic"
                            ? (
                                <>
                                <li className='payment-destination-form-name'>
                                    <label>받는 사람<span> *</span></label>
                                    <input type="text" defaultValue={member.name && member.name} />
                                </li>
                                <li className='payment-destination-form-address'>
                                    <label>주소<span> *</span></label>
                                    <div>
                                        <div>
                                            <input type="text" placeholder='우편번호' defaultValue={member.zipcode && member.zipcode} />
                                            <button>주소검색</button>
                                        </div>
                                        <input type="text" placeholder='기본주소' defaultValue={member.address && member.address} />
                                        <input type="text" placeholder='나머지 주소(선택 입력 가능)' defaultValue={member.extra_address && member.extra_address} />
                                    </div>
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
                                    <input type="text" defaultValue={member.phone2} />
                                    <span>-</span>
                                    <input type="text" defaultValue={member.phone3} />
                                </li>
                                <li className='payment-destination-form-email'>
                                    <label>이메일<span>*</span></label>
                                    <input type="text" defaultValue={member.email_id} />
                                    <span>@</span>
                                    { isCustom === false
                                        ? (
                                            <select name="" id="" onChange={handleDomainChange}>
                                                <option value="default">-이메일 선택-</option>
                                                <option value="naver.com">naver.com</option>
                                                <option value="daum.net">daum.net</option>
                                                <option value="gmail.com">gmail.com</option>
                                                <option value="self">직접입력</option>
                                            </select>
                                        )
                                        : (
                                            <>
                                                <input type="text" placeholder="직접입력" list="emaildomain" onBlur={() => setIsCustom(false)} />
                                                <datalist id="emaildomain" onChange={handleDomainChange}>
                                                    <option value="-이메일 선택-">-이메일 선택-</option>
                                                    <option value="naver.com">naver.com</option>
                                                    <option value="daum.net">daum.net</option>
                                                    <option value="gmail.com">gmail.com</option>
                                                    <option value="직접입력">직접입력</option>
                                                </datalist>
                                            </>
                                        )
                                    }
                                </li>
                                </>
                            )
                            : (
                                <>
                                <li className='payment-destination-form-name'>
                                    <label>받는 사람<span> *</span></label>
                                    <input type="text" defaultValue="" />
                                </li>
                                <li className='payment-destination-form-address'>
                                    <label>주소<span> *</span></label>
                                    <div>
                                        <div>
                                            <input type="text" placeholder='우편번호' />
                                            <button type='button'>주소검색</button>
                                        </div>
                                        <input type="text" placeholder='기본주소' />
                                        <input type="text" placeholder='나머지 주소(선택 입력 가능)' />
                                    </div>
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
                                </>
                            )
                        }
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