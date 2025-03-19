// 관리자 로그인 시 상품등록
import React from 'react';

export default function Admin() {
    return (
        <div>
           <h1>관리자 페이지 상품등록</h1> 
           <ul>
            <li>
                <label htmlFor="">상품명</label>
                <input type="text" />
            </li>
            <li>
                <label htmlFor="">가격</label>
                <input type="text" />
            </li>
            <li>
                <label htmlFor="">할인율</label>
                <input type="text" />
            </li>
            <li>
                <label htmlFor="">할인가격</label>
                <input type="text" />
            </li>
            <li>
                <label htmlFor="">대표이미지</label>
                <input type="text" />
            </li>
            <li>
                <label htmlFor="">카테고리</label>
                <input type="text" />
            </li>
            <li>
                <label htmlFor="">서브카테고리</label>
                <input type="text" />
            </li>
           </ul>
        </div>
    );
}

