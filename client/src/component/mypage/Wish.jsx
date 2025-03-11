import React from 'react';

export default function Wish() {
    return (
        <div className='mypage-wish-all'>
        <div className='mypage-update-info-title mypage-title'>관심상품</div>
        <div className='mypage-wish-table'>
            <table>
                <tr>
                    <td>
                        <input type="checkbox" />
                    </td>
                    <td>상품정보</td>
                    <td>판매가</td>
                    <td></td>
                </tr>
                <tr>
                    <td><input type="checkbox" /></td>
                    <td>
                        <img src="https://beautyofjoseon.co.kr/web/product/big/202411/7df41af9b2aead2844a077d35a138bc2.jpg" alt="" />
                        <span>sefsfsefsefesfseseef</span>
                    </td>
                    <td>28,000원</td>
                    <td>
                        <button>주문하기</button>
                        <button>장바구니 담기</button>
                        <button>관심상품 삭제</button>
                    </td>
                </tr>
            </table>
        </div>
        <div className='mypage-wish-btns'>
            <button>전체상품주문</button>
            <button>관심상품 전체 삭제</button>
        </div>
        <div className='mypage-wish-page'>
            1
        </div>
    </div>
    );
}

