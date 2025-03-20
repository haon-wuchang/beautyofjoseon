import * as repository from '../repository/mypageRepository.js';

export const getMyinfo = async(req,res) => {
    // console.log('마이페이지',req.body);
    const result = await repository.getMyinfo(req.body);
    res.json(result);
    res.end();
}
// 회원정보 수정
export const updateInfo = async(req,res) => {
    // console.log('회원정보수정',req.body);
        const result = await repository.updateInfo(req.body);
        res.json(result);
        res.end();
}
// 회원탈퇴 
export const deleteAllMyinfo = async(req,res) => {
    // console.log('회원탈퇴',req.body);
        const result = await repository.deleteAllMyinfo(req.body);
        res.json(result);
        res.end();
}
// 배송지 추가 
export const addDelivery = async(req,res) => {
    console.log('배송지 추가 ',req.body.id);
    console.log('배송지 추가 ',req.body.deliData);
    const addAddress = String(req.body.deliData.zipcode).concat('!', req.body.deliData.address, '=',req.body.deliData.extra_address,'+',req.body.deliData.name,'~',req.body.deliData.phone);      
    
    console.log('배송지 추가 ',addAddress);
        const result = await repository.addDelivery(req.body.id, addAddress);       
        res.json(result);
        res.end();
}

// 메인배송지 업뎃
export const updateMainDelivery = async(req,res) => {
    // console.log('배송지 추가 ',req.body.deliData2);
    const id = req.body.id;
    const data = req.body.deliData2;
    //  console.log('배송지 추가 ',req.body.id);
    //  console.log('배송지 추가 ',data);
        const result = await repository.updateMainDelivery(id, data);       
        res.json(result);
        res.end();
}

// 추가배송지 삭제
export const deleteDelivery = async(req, res) => {
    // console.log('yeeye',req.body);
    const result = await repository.deleteDelivery(req.body);
    res.json(result);
    res.end();
}
