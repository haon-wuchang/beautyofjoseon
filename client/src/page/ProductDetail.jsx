import React from 'react';
import { useParams } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";

export default function ProductDetail() {
    return (
        <div className='product-detail-wrap'>
            <div className='product-imgs-slider'>
                이미지 슬라이더
            </div>
            <div className='product-detail-contents'>
                <div className='product-detail-img'>
                    <img src="https://beautyofjoseonkr.openhost.cafe24.com/web/%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80/%EA%B3%B5%ED%86%B5/%EB%A7%91%EC%9D%80%EC%8C%80%EC%84%A0%ED%81%AC%EB%A6%BC%20%EC%95%84%EC%BF%A0%EC%95%84%ED%94%84%EB%A0%88%EC%89%AC/gif/250219_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80_%EB%A7%91%EC%9D%80%EC%8C%80%EC%84%A0%ED%81%AC%EB%A6%BC-%EC%95%84%EC%BF%A0%EC%95%84%ED%94%84%EB%A0%88%EC%89%AC-1.jpg" alt="" />
                </div>
                <div className='product-detail-buy'>
                    <div className='product-detail-info'>
                        <p>[NEW] 맑은쌀선크림 아쿠아프레쉬</p>
                        <p>18,0000원</p>
                        <p>
                            <span>10%</span>
                            <span>16,200원</span>
                        </p>
                        <p>
                            <span>배송방법</span>
                            <span>택배</span>
                        </p>
                        <p>
                            <span>배송비</span>
                            <span>3,000원 (20,000원 이상 구매 시 무료)</span>
                        </p>
                    </div>
                    <div className='product-detail-qty'>
                        <p>[NEW] 맑은쌀선크림 아쿠아프레쉬</p>
                        <div>
                            <div>
                                <button>-</button>
                                <span>1</span>
                                <button>+</button>
                            </div>
                            <span>16,200원</span>
                        </div>
                    </div>
                    <div className='product-detail-total-price'>
                        <span>Total</span>
                        <span>16,200원</span>
                    </div>
                    <div className='product-detail-buttons'>
                        <button>Wish</button>
                        <button>Add to Cart</button>
                        <button>Buy now</button>
                    </div>
                </div>
                <div className='product-detail-pay'>
                    <ul>
                        <li>
                            <div>
                                <p>NAVER</p>
                                <p>네이버ID로 간편구매</p>
                                <p>네이버페이</p>
                            </div>
                            <div>
                                <button>N pay 구매</button>
                                <button>찜</button>
                            </div>
                        </li>
                        <li>
                            <div>
                                <p>kakao</p>
                                <p>톡체크아웃</p>
                            </div>
                            <div>
                                <button>간편구매</button>
                                <button>채널</button>
                                <button>찜</button>
                            </div>
                        </li>
                    </ul>
                </div>
                <ul className='product-detail-notice'>
                    <li>
                        <div>
                            <span>Payment</span>
                            <span><IoIosArrowDown /></span>
                        </div>
                    </li>
                    <li>
                        <div>
                            <span>Delivery</span>
                            <span><IoIosArrowDown /></span>
                        </div>
                    </li>
                    <li>
                        <div>
                            <span>Refund & Exchange</span>
                            <span><IoIosArrowDown /></span>
                        </div>
                    </li>
                </ul>
                <ul>
                    <li>최소주문수량 1개 이상</li>
                    <li>수량을 선택해주세요.</li>
                </ul>
            </div>
        </div>
    );
}