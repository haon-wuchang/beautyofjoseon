import * as repository from '../repository/signupRepository.js';


/*************************** 
 *  아이디 중복체크 
***************************/
export const getIdCheck = async(req, res) => {
  console.log('컨트롤러>>', req.body);
  
  const result = await repository.getIdCheck(req.body);
  res.json(result);
  res.end();
};

/*************************** 
 * 회원가입 로직
***************************/
export const setSignup = async(req, res) =>{
  const phone = `${req.body.phone1}-${req.body.phone2}-${req.body.phone3}`;
  const email = `${req.body.email}@${req.body.emailDomain}`;
  req.body.phone = phone;
  req.body.email = email;

  const result = await repository.setSignup(req.body);
  res.json(result);
  res.end();

};