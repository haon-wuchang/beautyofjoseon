import { db } from './db.js';

// 마이페이지 회워정보 가져오기
export const getMyinfo = async ({ id }) => {
    // console.log(id);

    const sql = `
        select name, 
            password, 
            zipcode, 
            address, 
            extra_address, 
            phone, 
            email, 
            gender, 
            birth,
            membership,
            addtional_address
        from customer
        where id = ?
                `;
    const [result] = await db.execute(sql, [id]);
    // console.log('마이페이지레파지토리',result[0]);

    return result[0];
}

//마이페이지 회원정보수정 업데이트
export const updateInfo = async ({ id, colName, value }) => {
    console.log(id);
    console.log(colName);
    console.log(value);

    const sql = `
       update customer    
                  set ${colName} = ?
                           where id = ? 
                `;
    const result = await db.execute(sql, [value, id]);
    // console.log('마이페이지레파지토리',result[0].changedRows);
    return { result: result[0].changedRows };
}

//회원탈퇴
export const deleteAllMyinfo = async ({ id }) => {
    const sql = `
       delete from customer where id = ? 
                `;
    const result = await db.execute(sql, [id]);
    // console.log('마이페이지레파지토리', result[0].affectedRows);
    return { result: result[0].affectedRows };
}

// 배송지 추가
export const addDelivery = async ( id, addAddress ) => {
    console.log('addAddress', addAddress);
    console.log(id);
    
    const sql = `
        update customer set addtional_address = json_array(?)
	where id = ?
                 `;

    const result = await db.execute(sql, [addAddress, id]);
    // console.log(result);
    // console.log('마이페이지레파지토리', result[0].affectedRows);
    return { result: result[0].affectedRows };
}

