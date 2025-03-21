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
            type,
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
export const addDelivery = async (id, addAddress) => {
    // console.log('addAddress', addAddress);
    // console.log('id', id);
    const sql = `
        update customer set addtional_address = json_array(?)
	where id = ?
                 `;
    const result = await db.execute(sql, [addAddress, id]);
    // console.log(result);
    // console.log('마이페이지레파지토리', result[0].affectedRows);
    return { result: result[0].affectedRows };
}


// 메인배송지 업뎃
export const updateMainDelivery = async (id, data) => {
    // console.log('deli', data);
    // console.log('id', id);
    const sql = `
        update customer
        set name = ? , phone = ?, zipcode = ?, address = ?, extra_address = ? 
        where id = ? 
        `;

    const [result] = await db.execute(sql,
        [data.name, data.phone, data.zipcode, data.address, data.extra_address, id]);

    // console.log('마이페이지레파지토리', result);
    return { 'result': result.affectedRows };
}


// 추가배송지 삭제
export const deleteDelivery = async ({ id }) => {
    const sql = `
            update customer 
                  set addtional_address = null 
                           where id = ? 
                `;

    const result = await db.execute(sql, [id]);
    return result;
}

export const getMyOrder = async ({ id }) => {
    // console.log(id);

    const sql = `
        select 
            oid, 
            id, 
            pid, 
            order_number, 
            qty, 
            total_price, 
            odate,
            concat('http://localhost:9000/',main_image->>'$[0]') as main_image,
            delivery_status,
            pname
        from view_myOrder
        where id = ?
                `;
    const [result] = await db.execute(sql, [id]);
    // console.log('마이페이지레파지토리',result[0]);

    return result;
}

// 위시리스트  번호 가져오기
export const getWishNumber = async ({ id }) => {
    // console.log(id);
    const sql = `
        select wish            
        from customer
        where id = ?
                `;
    const [result] = await db.execute(sql, [id]);
    // console.log('마이페이지레파지토리',result[0]);

    return result[0];
}

// 위시리스트 정보 가져오기
export const getWishInfo = async ({ pid }) => {
    // console.log(id);
    const sql = `
        select pname, 
       concat('http://localhost:9000/',main_image->>'$[0]') as main_image,
        price,
        pid            
        from product
        where pid = ?
                `;
    const [result] = await db.execute(sql, [pid]);
    // console.log('마이페이지레파지토리',result[0]);

    return result[0];
}

// 위시리스트 정보 가져오기
export const updateWishList = async ({ newWishList, id }) => {
    // console.log(newWishList);
    const sql = `
            update customer set wish = ? where id = ? `;
    const values = [JSON.stringify(newWishList), id];

    const [result] = await db.execute(sql, values);
    // console.log('마이페이지레파지토리', result.affectedRows);
    return result.affectedRows;
}


// 위시리스트 전체삭제
export const deleteAllWishList = async ({ id }) => {
    // console.log(id);
    const sql = `update customer set wish = null where id = ? `;           
    const [result] = await db.execute(sql, [id]);
    // console.log('마이페이지레파지토리', result.affectedRows);
    return result.affectedRows;
}