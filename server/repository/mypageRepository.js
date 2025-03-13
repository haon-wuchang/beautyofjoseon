import {db} from './db.js';

export const getMyinfo = async({id}) => {
    // console.log(id);
    
   const sql =`
        select name, 
            password, 
            zipcode, 
            address, 
            extra_address, 
            phone, 
            email, 
            gender, 
            birth,
            membership
        from customer
        where id = ?
                `;
    const [result] = await db.execute(sql,[id]);
    // console.log('마이페이지레파지토리',result[0]);
    
    return result[0];
}