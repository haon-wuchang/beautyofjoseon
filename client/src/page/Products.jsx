import React, { useEffect, useState, useContext } from 'react';

import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from "../auth/AuthContext.js";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { IoGrid } from "react-icons/io5";
import { TbLayoutListFilled } from "react-icons/tb";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
import ReactPaginate from 'react-paginate';
import '../style/product.scss';
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { useProduct } from "../hooks/useProduct.js"



export default function Products() {
    const navigate = useNavigate();


    const { isLoggedIn } = useContext(AuthContext);
    const { addWishList, getWishList } = useProduct();


    const [list, setList] = useState([]); // 상품 리스트
    const [selectedCategory, setSelectedCategory] = useState('all'); // 초기값 'all'
    const [products, setProducts] = useState([]);
    const [wishList, setWishList] = useState([]); // 위시리스트
    const [isSortOpen, setIsSortOpen] = useState(false); // sort 버튼 토글
    const [sortType, setSortType] = useState("default"); // sort 정렬 상태
    const [gridClass, setGridClass] = useState("product-grid-3"); // 그리드 기본 3열



    /* 상품 리스트 불러오기 */
    useEffect(() => {
        axios
            .post('http://localhost:9000/product/list')
            .then(res => { setList(res.data) })
            .catch((error) => console.log(error))
    }, [])





    /* sort 버튼 */
    const sortProducts = (products, type) => {
        const sorted = [...products];

        switch (type) {
            case "new":
                return sorted.sort((a, b) => new Date(b.pdate) - new Date(a.pdate));
            case "name":
                return sorted.sort((a, b) => a.pname.localeCompare(b.pname));
            case "lowPrice":
                return sorted.sort((a, b) => a.price - b.price);
            case "highPrice":
                return sorted.sort((a, b) => b.price - a.price);
            default:
                return products;
        }
    };


    /* 상단 카테고리별 출력 */

    const currentList = selectedCategory === 'all' ? list : products;

    const handleCategoryClick = async (category) => {
        setSelectedCategory(category);
        setItemOffset(0);
    
        try {
            const res = await axios.post('http://localhost:9000/product/list', {
                category_id: category === 'all' ? null : category
            });
            setProducts(res.data);
        } catch (err) {
            console.error(err);
        }
    };
    



    /* wish리스트 불러오기 */
    useEffect(() => {
        const fetchWishList = async () => {
            const id = localStorage.getItem("user_id");
            if (!id) return;

            try {
                const wish = await getWishList();
                setWishList(wish);
            } catch (err) {
                console.error("위시리스트 불러오기 실패", err);
                setWishList([]);
            }
        };

        fetchWishList();
    }, []);


    /* wish 리스트 추가 삭제 */
    const toggleWish = async (pid) => {
        if (!isLoggedIn) {
            alert("로그인 후에 사용할 수 있는 서비스입니다.");
            return navigate("/login");
        }

        const id = localStorage.getItem("user_id");
        const isWished = wishList.includes(pid);
        const newWish = isWished
            ? wishList.filter(item => item !== pid)
            : [...wishList, pid];

        try {
            await axios.post("http://localhost:9000/mypage/updateWishList", {
                id,
                newWishList: newWish,
            });
            setWishList(newWish);


            if (!isWished) {
                alert("위시리스트에 추가되었습니다.");
            }
        } catch (err) {
            console.error("위시리스트 업데이트 실패", err);
        }
    };




    /* 페이지네이션 관리 */
    const itemsPerPage = 20;
    const [itemOffset, setItemOffset] = useState(0);

    // 페이지네이션 관련 로직
    const endOffset = itemOffset + itemsPerPage;
    // console.log(`Loading items from ${itemOffset} to ${endOffset}`);

    const currentItems = currentList.slice(itemOffset, endOffset);
    const sortedItems = sortProducts(currentItems, sortType);
    const pageCount = Math.ceil(currentList.length / itemsPerPage);
 // 전체 페이지 수에서 20개씩 슬라이싱

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % list.length;
        // console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
        setItemOffset(newOffset);
    };


    return (
        <div className='p-common products-content'>
            <div className='product-all-top'>
                <h5 className='f18'>SHOP ALL</h5>
                <ul className='flex list-none w500'>
                    <li
                        onClick={() => handleCategoryClick('all')}
                        className={selectedCategory === 'all' ? 'active' : ''}
                    >
                        전 제품
                    </li>
                    <li
                        onClick={() => handleCategoryClick(100)}
                        className={selectedCategory === 100 ? 'active' : ''}
                    >
                        스킨케어
                    </li>
                    <li
                        onClick={() => handleCategoryClick(200)}
                        className={selectedCategory === 200 ? 'active' : ''}
                    >
                        바디케어
                    </li>
                    <li
                        onClick={() => handleCategoryClick(300)}
                        className={selectedCategory === 300 ? 'active' : ''}
                    >
                        라이프스타일
                    </li>
                    <li
                        onClick={() => handleCategoryClick(400)}
                        className={selectedCategory === 400 ? 'active' : ''}
                    >
                        세트
                    </li>
                </ul>
            </div>
            <div className='product-all-bottom space-between'>
                <div>
                <span className='f12'>{currentList.length}</span>

                    <span className='f12'>Products</span>
                </div>
                <div className='flex'>
                    {/* grid 아이콘들 */}
                    <ul className='grid-icon'>
                        <li onClick={() => setGridClass("product-grid-2")}><TbLayoutListFilled style={{ cursor: 'pointer' }} /></li>
                        <li onClick={() => setGridClass("product-grid-3")}><IoGrid style={{ cursor: 'pointer' }} /></li>
                        <li onClick={() => setGridClass("product-grid-4")}><BsGrid3X3GapFill style={{ cursor: 'pointer' }} /></li>
                    </ul>
                    {/* <div className='sort'>
                        <div className='flex' onClick={() => setIsSortOpen(prev => !prev)}>
                            <span>sort</span>
                            <div><GoTriangleDown /></div>
                            <div style={{ display: isSortOpen ? "block" : "none" }}><GoTriangleUp /></div>
                        </div> */}

                    <div className='sort-wrap' style={{ position: "relative" }}>
                        <div className='sort-btn' onClick={() => setIsSortOpen(prev => !prev)}>
                            <span>sort</span>
                            {isSortOpen ? <GoTriangleUp /> : <GoTriangleDown />}
                        </div>
                        {isSortOpen && (
                            <ul className='sort-dropdown'>
                                <li onClick={() => setSortType("new")}>신상품</li>
                                <li onClick={() => setSortType("name")}>상품명</li>
                                <li onClick={() => setSortType("lowPrice")}>낮은가격</li>
                                <li onClick={() => setSortType("highPrice")}>높은가격</li>
                                <li onClick={() => alert("아직 준비중입니다.")}>인기상품</li>
                            </ul>
                        )}
                    </div>
                </div>
            </div>

            {/* 상품 행당 3개일 때 */}
            <div className={`product-list ${gridClass}`}>
                {sortedItems.map((item) => (
                    <Link key={item.pid} to={`/product/detail/${item.pid}`}>
                        <div className='product-item'>
                            <div className='product-img-wrap'>
                                <img src={item.image} alt="" />

                            </div>

                            <span className="wish-icon" onClick={(e) => {
                                e.preventDefault();
                                toggleWish(item.pid);
                            }}>
                                {wishList.includes(item.pid) ? <FaHeart color="red" /> : <FaRegHeart />}
                            </span>




                            <span className='product-title w600 text-center f15' >{item.pname}</span>
                            <p className='product-price pt10 f12'>{(item.discount_rate) ? `${item.price.toLocaleString()}원` : null}</p>
                            <div className='gap5 flex'>
                                {(item.discount_rate) ?
                                    (<div className='product-sale'>
                                        {`${item.discount_rate.toLocaleString()}%`}
                                    </div>) : null}
                                <div className='product-sale-price'>{`${(item.price * (1 - item.discount_rate / 100)).toLocaleString()}원`}
                                </div>

                            </div>
                        </div>
                    </Link>
                ))}

            </div>
            {/* 페이지네이션 */}
            <ReactPaginate
                breakLabel="..."
                nextLabel={<MdNavigateNext />}
                previousLabel={<MdNavigateBefore />}
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                containerClassName="pagination"
                activeClassName="active"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="prev"
                nextClassName="next"
                disabledClassName="disabled"
            />
        </div>
    );
}

