import * as repository from '../repository/productRepository.js'

/************************ 
    전체상품 리스트 조회
**************************/


export const getList = async(req, res) => {
    const result = await repository.getList();
    res.json(result);
    res.end();
}


/************************ 
    상품 상세 정보 조회
**************************/

// export const getProduct = async(req, res) => {
//     const result = await repository.getProduct(req.body.pid);
//     res.json(result);                                       
//     res.end();
// }; 


