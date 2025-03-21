import React,{useContext} from 'react'; 
import axios from 'axios';
import { MypageContext } from '../context/MypageContext.js';

export function useMypage(){   
    const { setMyinfo, setYear, setMonth, setDate,setGender,setMyOrder,         
         setWishList,orderType,orderDates, setOrderDates
    } = useContext(MypageContext);

    const getMyinfo = async() => {
        const id = localStorage.getItem('user_id');
        const result = await axios.post('http://localhost:9000/mypage/getMyinfo',{'id':id});
        if(result.data.birth && result.data.gender){
            setMyinfo(result.data);
            const year = result.data.birth.slice(0,4);
            const month = result.data.birth.slice(5,7);
            const date = result.data.birth.slice(8,10);
            setYear(year);
            setMonth(month);
            setDate(date);
            if(result.data.gender === 'F'){
                setGender('F');
            }else if(result.data.gender === 'M'){
                setGender('M');
            }
        }else if(!result.data.birth && result.data.gender ){
            setMyinfo(result.data);
            setYear('');
            setMonth('');
            setDate('');
            if(result.data.gender === 'F'){
                setGender('F');
            }else if(result.data.gender === 'M'){
                setGender('M');
            }
        }else if(!result.data.birth && !result.data.gender ){   
            setMyinfo(result.data);
            setYear('');
            setMonth('');
            setDate('');
            setGender('');
        }
        return result.data;
    }

    const getMyOrder = async() => {
        const id = localStorage.getItem('user_id');
        const result = await axios.post('http://localhost:9000/mypage/getMyOrder',{'id':id});
        const data = result.data;
        if(orderType==='전체'){
            setMyOrder(data);
        }
        // else if(orderType==='전체' && orderDates){
        //     const filterData = data.filter((item)=> 
        //      item.odate === orderDates); 
        //     setMyOrder(filterData);
        // }
        else if(orderType !=='전체'){
             const filterData = data.filter((item)=> item.delivery_status === orderType); 
            setMyOrder(filterData);
        }
        // setMyOrder(data);
    }

    // 위시리스트 번호 가져온 후 상품정보 가져오기
    const getWishNumber = async() => {
        const id = localStorage.getItem('user_id');
        const result = await axios.post('http://localhost:9000/mypage/getWishNumber',{'id':id});
       if(result.data.wish !== null ){
           const list = result.data.wish;
           // setWishList(list);
           const wishListData = await Promise.all(
               list.map(async (item) => {
                   const res = await axios.post('http://localhost:9000/mypage/getWishInfo', { pid: item });
                   return res.data;
               })
           );
           setWishList(wishListData);
       }else {
        setWishList([]);
       }
    }



    return {getMyinfo,getMyOrder,getWishNumber};
}