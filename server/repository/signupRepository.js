import { db } from "./db.js";

export const getIdCheck = async({id}) => {
  const sql =`select count(*) as cnt from customer where id = ?`;

  const [result] = await db.execute(sql, [id]);
  console.log('레파지토리 result>>',result);
  
  return result;
};