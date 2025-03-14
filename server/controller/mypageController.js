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