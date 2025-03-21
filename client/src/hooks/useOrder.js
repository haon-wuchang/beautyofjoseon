import React, { useContext } from "react";
import axios from "axios";
import { OrderContext } from '../context/orderContext.js';

export function useOrder() {
    const { setOrderList, setOrderPrice, setMember, setOrderType } = useContext(OrderContext);
    
    /********************************************
        장바구니 아이템 총 금액 계산
        사용처 : Cart
        작성자 : 김유나
    ********************************************/
    const calculateTotalPrice = (orderList) => {
        const totalPrice = orderList.reduce((sum, item) => sum + item.discount_price * item.qty, 0);
        setOrderPrice(totalPrice);
        return totalPrice;
    }


    /********************************************
        장바구니 목록 전체 조회(전체상품주문)
        사용처 : Cart
        작성자 : 김유나
    ********************************************/
    const getCartAll = async() => {
        const id = localStorage.getItem("user_id");
        const result = await axios.post("http://localhost:9000/order/all", {"id": id});

        setOrderList(result.data);
        setMember(result.data[0]);
        calculateTotalPrice(result.data);
    }


    /********************************************
        장바구니 선택 목록 조회(선택상품주문)
        사용처 : Cart
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
    }

    return { getCartAll, calculateTotalPrice, getSelectItems };
}