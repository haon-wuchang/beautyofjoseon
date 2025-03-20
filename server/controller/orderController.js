import * as repository from '../repository/orderRepository.js';

/********************************************
    장바구니 목록 전체 조회
    사용처 : payment
    작성자 : 김유나
********************************************/
export const getCartAll = async(req, res) => {
    const result = await repository.getCartAll(req.body);
    res.json(result);
    res.end();
}