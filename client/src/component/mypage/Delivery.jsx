import React from 'react';

export default function Delivery({myinfo}) {
    return (
        <div className='mypage-delivery-all'>
        <div className='mypage-update-info-title mypage-title'>배송지 관리</div>
        <div className='mypage-delivery-table'>
            <table>
                <tr>
                    <td></td>
                    <td>수령인</td>
                    <td>휴대전화</td>
                    <td>주소</td>                               
                </tr>
                <tr>
                    <td><input type="checkbox" /></td>
                    <td>{myinfo.name}</td>
                    <td>{myinfo.phone}</td>
                    <td>
                        <span>{myinfo.zipcode} </span>
                        <span>{myinfo.address} </span>
                        <span>{myinfo.extra_address}</span>
                    </td>
                </tr>
            </table>
            <div className='mypage-delivery-btns'>
                <button>기본배송지 지정</button>
                <button>배송지 추가</button>
            </div>
        </div>
        <div className='mypage-delivery-desc'>
            <div>배송주소록 유의사항</div>
            <ul>
                <li>배송 주소록은 최대 3개까지 등록할 수 있으며, 별도로 등록하지 않을 경우 최근 배송 주소록 기준으로 자동 업데이트 됩니다.</li>
                <li>자동 업데이트를 원하지 않을 경우 주소록 고정 선택을 선택하시면 선택된 주소록은 업데이트 대상에서 제외됩니다.</li>
                <li>기본 배송지는 1개만 저장됩니다. 다른 배송지를 기본 배송지로 설정하시면 기본 배송지가 변경됩니다.</li>
            </ul>
        </div>
        {/* <div className='delivery-write-form'>
                <ul>
                    <li>
                        <label htmlFor="">수령인</label>
                        <input type="text" />
                    </li>
                    <li>
                        <label htmlFor="">휴대전화</label>
                        <input type="text" />
                    </li>
                    <li>
                        <label htmlFor="">주소</label>
                        <div>
                            <div>
                            <input type="text" />
                            <button>주소검색</button>
                            </div>
                            <input type="text" />
                            <input type="text" />
                        </div>
                    </li>
                </ul>
                    <div className='mypage-delivery-form-check'>
                        <input type="checkbox" />
                        <span>기본배송지 지정</span>
                    </div>
                <div className='mypage-delivery-write-btns'>
                    <button>저장</button>
                    <button>취소</button>
                </div>
            </div> */}
    </div> 
    
    );
}

