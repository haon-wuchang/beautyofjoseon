import {createContext, useState, useEffect} from 'react'; 

export const MypageContext = createContext(); 

export const MypageProvider = ({children}) => {  
    const [myinfo, setMyinfo] = useState([]);
    const [year, setYear] = useState([]);
    const [month, setMonth] = useState([]);
    const [date, setDate] = useState([]);
    const [gender,setGender] = useState([]);
    const [zipcode,setZipcode] = useState([]);
    const [address,setAddress] = useState([]);
    const [extra,setExtra] = useState([]);
    const [myOrder , setMyOrder] = useState([]);
    const [wishList, setWishList] = useState([]);
    const [orderType, setOrderType] = useState('전체'); 
    const [orderDate, setOrderDate] = useState('all'); 

    return ( 
        <MypageContext.Provider 
        value ={{myinfo, setMyinfo,year, setYear,month, setMonth,date, setDate,
            gender,setGender,zipcode,setZipcode,address,setAddress,extra,setExtra,
            myOrder , setMyOrder, wishList, setWishList,orderType, setOrderType,
            orderDate, setOrderDate
        }}> 
            {children}
        </MypageContext.Provider>
    );
}