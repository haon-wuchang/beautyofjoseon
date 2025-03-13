import {db} from './db.js';

export const CheckLogin = async(data) => {
    console.log('dddd',data.id);
    console.log('dddd',data.pwd);
    
    const sql = `
        select count(*) as result_rows
            from customer 
            where id = ? and password = ?
                `;
    const [result] = await db.execute(sql,[data.id,data.pwd]);
    // console.log(result[0].result_rows);
    

    return {"result":result[0].result_rows};
}