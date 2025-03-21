import { db } from "./db.js"

/********************************************
    장바구니 목록 전체 조회(전체상품주문)
    사용처 : payment
    작성자 : 김유나
********************************************/
export const getCartAll = async({id}) => {
    const sql = `
                    select *
                    from view_payment_list
                    where id = ?
                `;
    const [result] = await db.execute(sql, [id]);
    return result;
}


/********************************************
    장바구니 선택 목록 조회(선택상품주문)
    사용처 : payment
    작성자 : 김유나
 ********************************************/
export const getSelectItems = async(formData) => {
    const id = formData.id;
    const cids = formData.cids;

    const sql = `
                    select *
                    from view_payment_list
                    where id = ?
                        and cid in (${cids})
                `;
                
    const [result] = await db.execute(sql, [id]);
    return result;
}