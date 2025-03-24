import React, { useContext } from "react";
import axios from "axios";
import { OrderContext } from '../context/orderContext.js';
import { useCart } from "./useCart.js";

export function useOrder() {
    const { orderList, setOrderList, orderPrice, setOrderPrice, setMember } = useContext(OrderContext);
    const { getCartList, clearCart } = useCart();
    
    /********************************************
        장바구니 아이템 총 금액 계산
        사용처 : payment
        작성자 : 김유나
    ********************************************/
    const calculateTotalPrice = (orderList) => {
        const totalPrice = orderList.reduce((sum, item) => sum + item.discount_price * item.qty, 0);
        setOrderPrice(totalPrice);
        return totalPrice;
    }


    /********************************************
        장바구니 목록 전체 조회(전체상품주문)
        사용처 : Payment
        작성자 : 김유나
    ********************************************/
    const getCartAll = async() => {
        const id = localStorage.getItem("user_id");
        const result = await axios.post("http://localhost:9000/order/all", {"id": id});

        setOrderList(result.data);
        setMember(result.data[0]);
        calculateTotalPrice(result.data);

        return result.data;
    }


    /********************************************
        장바구니 선택 목록 조회(선택상품주문)
        사용처 : Payment
        작성자 : 김유나
    ********************************************/
    const getSelectItems = async() => {
        const cids = localStorage.getItem("cids");
        const id = localStorage.getItem("user_id");

        const formData = {
            "cids": cids,
            "id": id
        };

        const result = await axios.post("http://localhost:9000/order/select", formData);

        setOrderList(result.data);
        setMember(result.data[0]);
        calculateTotalPrice(result.data);

        return result.data;
    }


    /********************************************
        구매 상품 주문 테이블에 저장
        사용처 : Payment
        작성자 : 김유나
    ********************************************/
    const saveToOrder = async(orderType) => {
        const id = localStorage.getItem("user_id");
        let orderList = [];
        
        if (orderType === "all") {
            orderList = await getCartAll();
        } else {
            orderList = await getSelectItems();
        }

        let formData = {  
            id: id,
            orderList: orderList
        };

        const result = await axios.post("http://localhost:9000/order/saveOrder", formData);

        if (result.data.result_rows) {
            if (orderType === "all") {
                clearCart();
            } else {
                deleteItems();
            }
        }
    }
    
    /********************************************
        선택 주문 완료 후 장바구니 테이블에서 삭제
        사용처 : payment
        작성자 : 김유나
    ********************************************/
    const deleteItems = async() => {
        const cids = orderList.map((item) => item.cid).join(",");
        console.log("주문번호목록 --> ", cids);
        const result = await axios.delete("http://localhost:9000/order/deleteItems", {data: {"cids": cids}});

        result.data.result_rows && getCartList();
    }

    return { getCartAll, calculateTotalPrice, getSelectItems, saveToOrder, deleteItems };
}