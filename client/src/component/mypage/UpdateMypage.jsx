import React from 'react';

export default function UpdateMypage() {
    return (
        <div className='mypage-update-info-all'>
            <div className='mypage-update-info-title'>회원 정보 수정</div>
            <div className='mypage-desc'>
                <p>	저희 쇼핑몰을 이용해 주셔서 감사합니다. <span>이하온님</span>은 <span>[FAMILY]</span> 회원이십니다.</p>
                <p><span>10,000원 이상</span>구매시 <span>1%</span>를 추가적립 받으실 수 있습니다.</p>
            </div>
            <div className='mypage-update-info-tablebox'>
                <table className='mypage-update-info-table'>
                    <tr>
                        <td>비밀번호</td>
                        <td><input type="password" /></td>
                    </tr>
                    <tr>
                        <td>비밀번호확인</td>
                        <td><input type="password" /></td>
                    </tr>
                    <tr>
                        <td>이름</td>
                        <td><input type="text" /></td>
                    </tr>
                    <tr>
                        <td>주소</td>
                        <td>
                            <li>
                                <input type="text" />
                                <button>주소검색</button>
                            </li>
                            <li><input type="text" /></li>
                            <li><input type="text" /></li>
                        </td>
                    </tr>
                    <tr>
                        <td>휴대전화</td>
                        <td><input type="text" placeholder='- 제외 11자리를 입력해주세요' /></td>
                    </tr>
                    <tr>
                        <td>이메일</td>
                        <td><input type="text" /></td>
                    </tr>
                </table>
            </div>
            <div className='mypage-update-info-add-tablebox'>
                <div>추가정보</div>
                <div>
                    <table className='mypage-update-info-table2'>
                        <tr>
                            <td>성별</td>
                            <td>
                                <input type="checkbox" />
                                <span>남자</span>
                                <input type="checkbox" />
                                <span>여자</span>
                            </td>
                        </tr>
                        <tr>
                            <td>생년월일</td>
                            <td>
                                <input type="text" name="" id="" />
                                <span>년</span>
                                <input type="text" />
                                <span>월</span>
                                <input type="text" />
                                <span>일</span>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
            <div className='mypage-update-info-btns'>
                <div>
                    <button>회원탈퇴</button>
                </div>
                <div>
                    <button>취소</button>
                    <button>회원정보수정</button>
                </div>
            </div>
        </div>
    );
}

