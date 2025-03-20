import React, { useContext } from "react";
import axios from "axios";
import { OrderContext } from '../context/orderContext.js';

export function useOrder() {
    const { orderList, setOrderList } = useContext(OrderContext);

    /********************************************
        장바구니 목록 전체 조회
        사용처 : Cart
        작성자 : 김유나
    ********************************************/
    const getCartAll = async() => {
        const result = await axios.post("http://localhost:9000/order/all");
        setOrderList(result.data);
    }

    return { getCartAll };
}