import React,{useContext} from 'react'; 
import axios from 'axios';
import { MypageContext } from '../context/MypageContext.js';

export function useMypage(){   
    const {myinfo, setMyinfo,year, setYear,month, setMonth,date, setDate,gender,setGender
        
    } = useContext(MypageContext);

    const getMyinfo = async() => {
        const id = localStorage.getItem('user_id');
        const result = await axios.post('http://localhost:9000/mypage/getMyinfo',{'id':id});
        setMyinfo(result.data);
        const year = result.data.birth.slice(0,4);
        const month = result.data.birth.slice(5,7);
        const date = result.data.birth.slice(8,10);
        setYear(year);
        setMonth(month);
        setDate(date);
        if(result.data.gender === 'F'){
            setGender('F');
        }else{
            setGender('M');
        }
    }

    return {getMyinfo};
}