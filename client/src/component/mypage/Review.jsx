import React from 'react';

export default function Review() {
    return (
        <div className='mypage-review-all'>
        <div className='mypage-update-info-title mypage-title'>작성가능 리뷰</div>
        <div className='mypage-review-write'>
            <table>
                <tr>
                    <td>번호</td>
                    <td>상품정보</td>
                    <td>수량</td>
                    <td>총금액</td>
                    <td></td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>
                        <img src="https://beautyofjoseon.co.kr/web/upload/category/editor/2024/08/29/9f33ecb883aa2c7144a97288b91c3db4.jpg" alt="" />
                        <span>따끈한 옷dfsefsdfsefefsdfsefsfsefef</span>
                    </td>
                    <td>1개</td>
                    <td>13,000</td>
                    <td>리뷰작성하기</td>
                </tr>
            </table>
        </div>
        <div className='mypage-review-write-page'>
            1
        </div>
        <div className='mypage-update-info-title mypage-title'>작성한 리뷰 관리</div>
        <div className='mypage-review-writed-select'>
            <select name="" id="">
                <option value="">선택</option>
                <option value="">작성일자별</option>
                <option value="">분류별</option>
            </select>
        </div>
        <div className='mypage-review-writed'>
            <table>
                <tr>
                    <td>주문번호</td>
                    <td>분류</td>
                    <td>제목</td>
                    <td>내용</td>
                    <td>작성일</td>
                    <td>조회</td>
                </tr>
                <tr>
                    <td>1ㄹㄴ23423423424323</td>
                    <td>폼클렌징</td>
                    <td>와 너무 좋아요~</td>
                    <td>ㄹㅇ개뀰 다들 꼭사세욜ㄴㅇㄹㄴㄷㄹㄴㄷㄹㄴㄷㄴㄷㅎㄴㄷㅎ</td>
                    <td>2024.01.01</td>
                    <td>10</td>
                </tr>
            </table>
        </div>
        <div className='mypage-review-writed-page'>
            1
        </div>
    </div>
    );
}

