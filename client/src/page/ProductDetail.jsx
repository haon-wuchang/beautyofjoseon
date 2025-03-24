import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from "../auth/AuthContext.js";
import { CartContext } from "../context/cartContext.js";
import { ProductContext } from "../context/productContext.js";
import { useCart } from "../hooks/useCart.js"
import { useProduct } from "../hooks/useProduct.js"
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";
import OtherPay from '../component/OtherPay';
import axios from 'axios';
import Slider from "react-slick";
import Modal from 'react-modal';
import CreateReview from '../component/product/CreateReview.jsx';
import '../style/product.scss';



export default function ProductDetail() {


    // 슬라이드 바 설정
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    };


    /* 전역 등 import 된 것 */
    const { isLoggedIn } = useContext(AuthContext);
    const { pid } = useParams();
    const { cartList } = useContext(CartContext);
    const { wishList, setWishList, reviews } = useContext(ProductContext);
    const { updateCartList, saveToCartList } = useCart();
    const { addWishList, getReview } = useProduct();
    const navigate = useNavigate();

    /* 디테일 페이지 상태관리 */
    const [product, setProduct] = useState({});
    const [slideImgList, setSlideImgList] = useState([]);
    const [detailImgList, setDetailImgList] = useState([]);
    const [qty, setQty] = useState(1); // detail 페이지 수량 증가
    const [totalPrice, setTotalPrice] = useState(0);


    useEffect(() => {
        axios
            .post("http://localhost:9000/product/detail", { "pid": pid })
            .then((res) => {
                setProduct(res.data);
                setSlideImgList(res.data.SlideImgList);
                setDetailImgList(res.data.descImgList);
                if (res.data.price) {
                    setTotalPrice(res.data.price);
                }
            })
            .catch((error) => console.log(error));
    }, []);

    useEffect(() => {
        getReview(pid);

    }, [pid]);



    /* wish list 추가 */
    const addHeart = () => {
        if (!isLoggedIn) {
            alert('로그인 후 사용가능 한 서비스 입니다')
            navigate('/login')
        }
        alert('위시리스트에 추가되었습니다.')
        addWishList(product.pid);
    };


    /* 로그인 시 장바구니 추가 이벤트 */
    const addCartItem = () => {
        if (isLoggedIn) {

            const cartItem = {
                pid: product.pid,
                qty: qty
            };

            const findItem = cartList && cartList.find(item => item.pid === product.pid);

            if (findItem) {
                const result = updateCartList(findItem.cid, "increase", qty);
                result && alert("장바구니가 업데이트 되었습니다.")
            } else {
                const id = localStorage.getItem("user_id");
                const formData = { id: id, cartList: [cartItem] }
                const result = saveToCartList(formData);
                result && alert("장바구니에 추가되었습니다.")
            }
        } else {
            const select = window.confirm("로그인 서비스가 필요합니다. \n로그인 하시겠습니까?")
            if (select) {
                navigate('/login');
            }
        }
    };


    /* 아이템 수량 증감 */
    const handleQtyChange = (type) => {
        if (!product.price) return;

        const updatedQty = type === "increase" ? qty + 1 : qty - 1;
        if (updatedQty < 1) return;
        setQty(updatedQty);
        // setCartCount(updatedQty);
        setTotalPrice(updatedQty * product.price);
    };




    /* info 토글 */

    const [isToggled, setIsToggled] = useState([false, false, false]);



    const clickDetailToggle = (i) => {
        setIsToggled(prevState => {
            const newState = [...prevState];
            newState[i] = !newState[i];
            return newState;
        });
    };

    /* 리뷰 토글 */
    const [showReview, setShowReview] = useState(false);

    // const toggleReview = () => {
    //     setShowReview((prev) => !prev);
    // };



    /* 리뷰 작성 모달 */
    const [isModalOpen, setIsModalOpen] = useState(false);

    // 모달 스타일
    const modalStyle = {
        content: {
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '500px',
            height: '600px',
            overflow: 'auto',
            padding: '20px',
            background: '#fff',
            borderRadius: '10px',
        },
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            zIndex: 10
        },
    };




    return (
        <div className='p-common'>

            <div className='product-imgs-slider'>
                <Slider {...settings}>
                    {slideImgList && slideImgList.map((item) =>
                        <img src={item} className="slide-img" />
                    )}
                </Slider>
            </div>

            {/* contents wrap */}
            <div className='product-detail-contents'>

                {/* Left-Side / 상세이미지 / review / qna  */}
                <div className='product-detail-left'>
                    <div className='product-detail-imgs'>
                        {detailImgList && detailImgList.map((item) =>
                            <img src={item} className="detail-img" />
                        )}
                    </div>


                    <div className='product-detail-review'>
                        <div className='review-top'>
                            <p className='f14 w600'>Review</p>
                            <div>
                                <button className='w-btn3' onClick={() => setIsModalOpen(true)} >write</button>
                                {/* <button className='w-btn3'>view all</button> */}
                            </div>

                        </div>
                        <table className='table'>
                            <colgroup>
                                <col style={{ width: "5%" }} />
                                <col style={{ width: "auto" }} />
                                <col style={{ width: "15%" }} />
                                <col style={{ width: "15%" }} />
                                <col style={{ width: "10%" }} />
                            </colgroup>



                            <tbody>

                            {reviews && reviews.length > 0 ? (
    reviews.map((review, index) => (
      <React.Fragment key={review.rid}>
        <tr onClick={() => setShowReview(showReview === index ? null : index)}>
          <td>{index + 1}</td>
          <td>{review.subject}</td>
          <td>{review.id}</td>
          <td>{review.rdate}</td>
          <td>{review.view_count || 0}</td>
        </tr>
        {showReview === index && (
          <tr>
            <td colSpan={5} className="review-content">
              <p>{review.text}</p>
              {review.review_image?.map((img, idx) => (
                <img
                  key={idx}
                  src={`http://localhost:9000/upload_review_photos/${img}`}
                  alt=""
                />
              ))}
            </td>
          </tr>
        )}
      </React.Fragment>
    ))
  ) : (
    <tr>
      <td colSpan={5} style={{ textAlign: 'center', padding: '20px' }}>
        리뷰가 없습니다. 리뷰를 작성해주세요
      </td>
    </tr>
  )}


                                {isModalOpen && (
                                    <Modal isOpen={isModalOpen}
                                        onRequestClose={() => setIsModalOpen(false)}
                                        style={modalStyle}
                                    >
                                        <CreateReview closeModal={() => setIsModalOpen(false)} />
                                    </Modal>
                                )}


                            </tbody>
                        </table>
                    </div>



                    {/* <div className='product-detail-qna'>
                        <p className='f14 w600'>Q & A</p>
                        <table>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>배송문의</td>
                                    <td>김****</td>
                                    <td>2025-03-11 02:43:07</td>
                                </tr>
                            </tbody>
                        </table>
                        <p>페이지네이션</p>
                    </div> */}


                </div> {/* end of left side */}

                {/* RightSide / 상품정보 */}
                <div className='product-detail-right'>
                    <div className='product-detail-info'>
                        <div className='product-detail-info'>
                            <p className='f22 w600'>{product.pname}</p>

                            <div className='product-detail-price'>
                                {   // dc 값이 있다면 있다면 3가지 다 표시되게, 없다면 원가격만 표시되게
                                    product.discount_rate ? (
                                        <>
                                            <p className='product-detail-price-cancle'>
                                                {product.price?.toLocaleString()}원
                                            </p>
                                            <div className='order-price' >
                                                {(product.discount_rate) ?
                                                    (<div className='dc'>
                                                        {`${product.discount_rate.toLocaleString()}%`}
                                                    </div>) : null}
                                                <div>{`${((product.price - (product.discount_rate * 100)).toLocaleString())}원`}</div>
                                            </div>
                                        </>
                                    ) : (
                                        <p className='product-detail-price-origin'>
                                            {product.price?.toLocaleString()}원
                                        </p>
                                    )}
                            </div>



                            <ul className='product-detail-delivery'>
                                <li>
                                    <p>배송방법</p>
                                    <p>택배</p>
                                </li>
                                <li>
                                    <p>배송비</p>
                                    <p>3,000원 (20,000원 이상 구매 시 무료)</p>
                                </li>
                            </ul>
                        </div>
                        <div className='product-detail-qty'>
                            <p className='product-detail-qty-name'>{product.pname}</p>
                            <div className='product-detail-qty-box'>
                                <div>
                                    <button className='decrease' onClick={() => { handleQtyChange("decrease") }}><FiMinus /></button>
                                    <span>{qty}</span>
                                    <button className='increase' onClick={() => { handleQtyChange("increase") }}><FiPlus /></button>
                                </div>
                                <span>{totalPrice.toLocaleString()}원</span>
                            </div>
                        </div>
                        <div className='product-detail-total-price space-between'>
                            <p>Total</p>
                            <p>{totalPrice.toLocaleString()}원</p>
                        </div>
                        <div className='btn-wrap'>
                            <button className='w-btn' onClick={addHeart}>Wish</button>
                            <button className='w-btn' onClick={addCartItem}>Add to Cart</button>
                            <button className='b-btn' >Buy now</button>
                        </div>
                    </div>
                    <OtherPay className='product-detail-payments' />
                    <ul className='product-detail-notice'>


                        <ul className='product-detail-notice'>
                            {["Payment", "Delivery", "Refund & Exchange"].map((title, i) => (
                                <li key={i}>
                                    <div className='product-detail-notice-item'>
                                        <span>{title}</span>
                                        <span className='info-toggle-icon' onClick={() => clickDetailToggle(i)}>
                                            {isToggled[i] ? <IoIosArrowUp /> : <IoIosArrowDown />}
                                        </span>
                                    </div>
                                    <div className={isToggled[i] ? 'toggle-show' : 'toggle-hide'}>
                                        {
                                            title === 'Payment' &&
                                            (
                                                <>
                                                    <p>고액결제의 경우 안전을 위해 카드사에서 확인전화를 드릴 수도 있습니다. 확인과정에서 도난 카드의 사용이나 타인 명의의 주문등 정상적인 주문이 아니라고 판단될 경우 임의로 주문을 보류 또는 취소할 수 있습니다.</p>  <br />
                                                    <p>무통장 입금은 상품 구매 대금은 PC뱅킹, 인터넷뱅킹, 텔레뱅킹 혹은 가까운 은행에서 직접 입금하시면 됩니다. <br />주문시 입력한 입금자명과 실제입금자의 성명이 반드시 일치하여야 하며, 7일 이내로 입금을 하셔야 하며 입금되지 않은 주문은 자동취소 됩니다. </p>

                                                </>)
                                        }
                                        {
                                            title === 'Delivery' &&
                                            (
                                                <>
                                                    <p>
                                                        배송 방법 : 택배 <br />
                                                        배송 지역 : 전국지역 <br />
                                                        배송 비용 : 3,000원 <br />
                                                        배송 기간 : 3일 ~ 7일 <br />
                                                        배송 안내 : - 고객님께서 주문하신 상품은 입금 확인후 배송해 드립니다. 다만, 상품종류에 따라서 상품의 배송이 다소 지연될 수 있습니다.
                                                    </p>

                                                </>)
                                        }
                                        {
                                            title === 'Refund & Exchange' &&
                                            (
                                                <div className='refundDes'>
                                                    <p>
                                                        <span> 교환 및 반품 주소</span>
                                                        <br />
                                                        <span>xx시 xx구 10층 (주)팀플팀플 (102호) 우편번호 : 12345</span>
                                                    </p>
                                                    <p>
                                                        <span>반품</span>
                                                        <br />
                                                        <span>상품 수령 후 7일 이내에 반품 요청이 가능합니다. 수령 후 7일이 지나면 환불이나 교환이 불가능합니다.
                                                            미개봉 상품에 한하여 가능하며, 상품은 받아보셨던 상태와 동일하게 패킹되어야 합니다. 반송시 반품 지정된 창고로 보내야 하며, 반품비는 고객 부담으로 왕복 배송비 5,000원이 부담됩니다.</span>
                                                    </p>
                                                    <p>
                                                        <span>제품 파손 또는 오배송</span>
                                                        <br />
                                                        <span>배송된 상품이 파손되었거나 주문하신 상품과 다른 경우 고객 서비스팀(2eo2yeo@gmail.com)로 이메일을 보내주시면 최대한 빠른 시일 내에 처리하여 드리겠습니다. <br />
                                                            반품 및 교환비는 조선미녀에서 부담합니다. 상품의 파손이나 오배송된 사실을 확인하기 위해 사진을 요청할 수 있으니 참고 부탁드립니다. </span>
                                                    </p>

                                                </div>)
                                        }

                                    </div>
                                </li>
                            ))}
                        </ul>
                    </ul>
                    <ul className='product-detail-bottom-notice'>
                        <li>최소주문수량 1개 이상</li>
                        <li>수량을 선택해주세요.</li>
                    </ul>
                </div> {/* end of product-detail-right */}
            </div> {/* end of product-detail-content */}
        </div>
    );
}