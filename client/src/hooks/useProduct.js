import React, { useContext } from "react";
import axios from "axios";
import { ProductContext } from "../context/productContext.js";



export function useProduct() {
    const { setWishList, reviews, setReviews } = useContext(ProductContext);

     /********************************************
            리뷰 불러오기
            (리뷰 작성은 별도의 컴포넌트 생성)
            작성자 : 정서령
    ********************************************/

    
            const getReview = async (pid) => {
                const result = await axios.post("http://localhost:9000/product/getReview", { pid });
              
            
                setReviews(result.data);
              };
              

    /********************************************
            위시리스트 불러오기 
            - 로그인한 유저의 위시리스트 
            작성자 : 정서령
    ********************************************/
    /* 로그인한 유저의 위시리스트 불러오기 */

    const getWishList = async () => {
        const { data } = await axios.post("http://localhost:9000/product/getWishList", {
            id: localStorage.getItem("user_id"),
        });
    
        // 파싱
        return Array.isArray(data) ? data : JSON.parse(data);
    };
    
    /********************************************
            위시리스트 추가
            - pid 중복 거름
            작성자 : 정서령
    ********************************************/

    const addWishList = async (pid) => {
        const id = localStorage.getItem("user_id");
        if (!id) return;
    
        const wishList = await getWishList();
    
        if (!wishList.includes(pid)) {
            wishList.push(pid);
            await axios.post("http://localhost:9000/product/addWishList", {
                id,
                wishList,
            });
            setWishList(wishList);
        }
    };
    

    return { addWishList, getReview, getWishList };
}