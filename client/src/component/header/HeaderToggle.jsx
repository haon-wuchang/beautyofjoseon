import React from 'react';
import { Link } from 'react-router-dom';

export default function HeaderToggle({toggleOpen}) {
    return (
        <div className={`header-bottom-menu-wrapper ${toggleOpen ? "open" : ""}`}>
            <div className="header-bottom-menu">
                <div className='header-bottom-menu-left'>
                    <div className='header-bottom-menu-category'>
                        <span>Shop All</span>
                        <ul className='header-bottom-menu-category-list'>
                            <li><Link to="/">전 제품</Link></li>
                            <li><Link to="/">스킨케어</Link></li>
                            <li><Link to="/">바디케어</Link></li>
                            <li><Link to="/">라이프스타일</Link></li>
                            <li><Link to="/">세트</Link></li>
                        </ul>
                    </div>
                    <div className='header-bottom-menu-sub-category'>
                        <span>유형별</span>
                        <ul className='header-bottom-menu-sub-category-list'>
                            <li><Link to="/">선케어</Link></li>
                            <li><Link to="/">세럼</Link></li>
                            <li><Link to="/">젤/크림</Link></li>
                            <li><Link to="/">토너/에센스</Link></li>
                            <li><Link to="/">클렌저</Link></li>
                            <li><Link to="/">각질제거</Link></li>
                            <li><Link to="/">마스크팩</Link></li>
                            <li><Link to="/">기타</Link></li>
                        </ul>
                    </div>
                </div>
                <div className='header-bottom-menu-right'>
                    <img src="/images/header_menu_image.jpg" alt="" />
                </div>
            </div>
        </div>
    );
}