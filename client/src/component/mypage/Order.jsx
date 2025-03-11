import React from 'react';
import { CiSearch } from "react-icons/ci";
import { IoCalendarClearOutline } from "react-icons/io5";

export default function Order() {
    return (
        <div className='mypage-order-all'>
        <div className='mypage-update-info-title mypage-title'>주문조회</div>
        <div className='mypage-order-top-tab'>
            <ul>
                <li>
                    <span>주문내역조회</span>
                    <span>(0)</span>
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
            <select name="" id="">
                <option value="">선택</option>
                <option value="">전체주문 처리상태</option>
                <option value="">입금전</option>
                <option value="">배송준비중</option>
                <option value="">배송중</option>
                <option value="">배송완료</option>
                <option value="">취소</option>
                <option value="">교환</option>
                <option value="">반품</option>
            </select>
            <ul>
                <li>오늘</li>
                <li>1주일</li>
                <li>1개월</li>
                <li>3개월</li>
                <li>6개월</li>
            </ul>
            <div>
                <input type="text" />
                <span><IoCalendarClearOutline /></span>
                <span>~</span>
                <input type="text" />
                <span><IoCalendarClearOutline /></span>
                <span><CiSearch /></span>
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
                        <td>상품정보</td>
                        <td>수량</td>
                        <td>총금액</td>
                        <td>주문처리상태</td>
                        <td>취소/교환/반품</td>
                    </tr>
                    <tr>
                        <td>s29349234234df</td>
                        <td>
                          <img src="https://beautyofjoseon.co.kr/web/upload/category/editor/2024/08/29/9f33ecb883aa2c7144a97288b91c3db4.jpg" alt="" />
                        <span>따끈한 옷dfsefsdfsefefsdfsefsfsefef</span>
                        </td>
                        <td>13,000</td>
                        <td>배송중</td>
                        <td></td>
                    </tr>
                </table>
            </div>
            <div className='mypage-order-page'>
                1
            </div>
        </div>
    </div>
    );
}

