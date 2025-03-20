
import * as repository from '../repository/cartRepository.js'

/********************************************
        장바구니 전체 리스트 조회 
        사용처 : Carts
********************************************/
export const getItems = async (req, res) => {
        const result = await repository.getItems(req.body);
        res.json(result)
        res.end();
};




/********************************************
        장바구니 새로운 아이템 저장
        사용처 : ProductDetail
        작성자 : 정서령
********************************************/
export const addCart = async (req, res) => {
        console.log('req.body 확인', req.body);
        const result = await repository.addCart(req.body);
        res.json(result)
        res.end();
};



/********************************************
        장바구니 아이템 수량 업데이트
        사용처 : ProductDetail, Cart
        작성자 : 정서령
********************************************/

export const updateQty = async (req, res) => {
        console.log("🔍 updateQty - req.body 확인:", req.body);
        const result = await repository.updateQty(req.body);
        res.json(result);
        res.end();
};

/********************************************
        장바구니 아이템 개별 삭제
        사용처 : Cart
        작성자 : 김유나
********************************************/
export const deleteCartItem = async(req, res) => {
        const result = await repository.deleteCartItem(req.body);
        res.json(result);
        res.end();
}

/********************************************
        장바구니 아이템 전체 삭제
        사용처 : Cart
        작성자 : 김유나
********************************************/
export const clearCart = async(req, res) => {
        const result = await repository.clearCart(req.body);
        res.json(result);
        res.end();
}

/********************************************
        장바구니에서 선택한 상품의 가격만 계산
        사용처 : Cart
        작성자 : 김유나
********************************************/
export const getSelectItemPrice = async(req, res) => {
        const result = await repository.getSelectItemPrice(req.body);
        res.json(result);
        res.end();
}