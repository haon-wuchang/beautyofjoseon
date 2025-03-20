import React, { useContext } from "react";
import axios from "axios";
import { CartContext } from "../context/cartContext";



export function useCart() {
    const { cartList, setCartList, cartCount, setCartCount, totalPrice, setTotalPrice } = useContext(CartContext);




    /********************************************
            장바구니 전체 리스트 조회 
            작성자 : 정서령
    ********************************************/
    const getCartList = async () => {
        const id = localStorage.getItem("user_id");
        const result = await axios.post("http://localhost:9000/cart/items", { "id": id });
        setCartList(result.data);
        setCartCount(result.data.length);
        calculateTotalPrice(result.data);
    };




    /********************************************
            장바구니 새로운 아이템 저장
            사용처 : ProductDetail
            작성자 : 정서령
    ********************************************/
    const saveToCartList = async (formData) => {
        const result = await axios.post("http://localhost:9000/cart/add", formData);
        if (result.data.result_rows) {
            setCartCount(cartCount + 1);
            getCartList(); // 장바구니 리스트 불러오는 함수
        }

        return result.data.result_rows;

    }




    /********************************************
            장바구니 아이템 수량 업데이트
            사용처 : ProductDetail, Cart
            작성자 : 정서령
    ********************************************/
    const updateCartList = async (cid, type, qty) => {
        const result = await axios.put('http://localhost:9000/cart/updateQty',
            { "cid": cid, 'type': type, 'qty': qty });
        result.data.result_rows && getCartList();
        return result.data.result_rows;

    }

    /********************************************
            장바구니 아이템 수량 업데이트
            사용처 : Cart
            작성자 : 김유나
    ********************************************/
    const calculateTotalPrice = (cartList) => {
        const totalPrice = cartList.reduce((sum, item) => sum + item.discount_price * item.qty, 0);
        setTotalPrice(totalPrice);
        return totalPrice;
    }

    /********************************************
            장바구니 아이템 삭제
            사용처 : Cart
            작성자 : 김유나
    ********************************************/
    const deleteCartItem = async(cid) => {
        const result = await axios.delete("http://localhost:9000/cart/deleteItem", {data: {"cid": cid}});
        result.data.result_rows && getCartList();
    }

    return { saveToCartList, updateCartList, getCartList, calculateTotalPrice, deleteCartItem };
}