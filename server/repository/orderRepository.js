import { db } from "./db.js"

/********************************************
    장바구니 목록 전체 조회
    사용처 : payment
    작성자 : 김유나
********************************************/
export const getCartAll = async() => {
    const sql = `select * from view_cart_list`;

    const [result] = await db.execute(sql);
    return result;
}