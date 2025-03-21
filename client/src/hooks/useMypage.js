import React,{useContext} from 'react'; 
import axios from 'axios';
import { MypageContext } from '../context/MypageContext.js';
import { AuthContext } from '../auth/AuthContext.js';

export function useMypage(){   
    const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext);
    const {myinfo, setMyinfo,year, setYear,month, setMonth,date, setDate,gender,setGender,
        zipcode,setZipcode,address,setAddress,extra,setExtra,myOrder , setMyOrder,
        wishList, setWishList
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
        setMyOrder(result.data);
    }

    const getWishNumber = async() => {
        const id = localStorage.getItem('user_id');
        const result = await axios.post('http://localhost:9000/mypage/getWishNumber',{'id':id});
        const list = result.data.wish;
        // setWishList(list);
        const wishListData = await Promise.all(
            list.map(async (item) => {
                const res = await axios.post('http://localhost:9000/mypage/getWishInfo', { pid: item });
                return res.data;
            })
        );
        setWishList(wishListData);
    }




    return {getMyinfo,getMyOrder,getWishNumber};
}