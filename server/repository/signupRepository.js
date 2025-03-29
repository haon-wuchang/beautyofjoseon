import { db } from "./db.js";


/*************************** 
 *  아이디 중복체크 
***************************/
export const getIdCheck = async({id}) => {
  const sql =`select count(*) as cnt from customer where id = ?`;

  const [result] = await db.execute(sql, [id]);
  console.log('레파지토리 result>>',result);
  
  return result;
};


/*************************** 
 * 회원가입 로직
***************************/
export const setSignup = async(formdata) => {
  const sql =`
      insert into customer(id, password, name, phone, email, register_date )
      values(?,?,?,?,?,now())
  `;

  const values = [
        formdata.id,  
        formdata.password,  
        formdata.name,  
        formdata.phone,  
        formdata.email
  ];

  const [result] = await db.execute(sql, values );
  return result.affectedRows;
};