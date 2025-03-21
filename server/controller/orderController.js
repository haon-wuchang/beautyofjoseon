import * as repository from '../repository/orderRepository.js';

/********************************************
    장바구니 목록 전체 조회(전체상품주문)
    사용처 : payment
    작성자 : 김유나
********************************************/
export const getCartAll = async(req, res) => {
    const result = await repository.getCartAll(req.body);
    res.json(result);
    res.end();
}


/********************************************
    장바구니 선택 목록 조회(선택상품주문)
    사용처 : payment
    작성자 : 김유나
********************************************/
export const getSelectItems = async(req, res) => {
    const result = await repository.getSelectItems(req.body);
    res.json(result);
    res.end();
}