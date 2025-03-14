import * as repository from '../repository/loginRepository.js';
import jwt  from 'jsonwebtoken';

export const CheckLogin = async(req,res) =>{
    // console.log('로그인 컨트롤러',req.body);
    let result = await repository.CheckLogin(req.body);
    // console.log('teset',result.result);    
    if(result.result === 1){
        const token = jwt.sign({'user_id':req.body.id}, 'wayvLDnt7F'); 
        result = {...result,'token':token};
        // console.log('token',result);  
    } 
    res.json(result);    
    res.end();
}