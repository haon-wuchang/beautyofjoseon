import * as repository from '../repository/signupRepository.js';

export const getIdCheck = async(req, res) => {
  console.log('컨트롤러>>', req.body);
  
  const result = await repository.getIdCheck(req.body);
  res.json(result);
  res.end();
};