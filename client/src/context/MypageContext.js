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
    
    return ( 
        <MypageContext.Provider 
        value ={{myinfo, setMyinfo,year, setYear,month, setMonth,date, setDate,
            gender,setGender,zipcode,setZipcode,address,setAddress,extra,setExtra
        }}> 
            {children}
        </MypageContext.Provider>
    );
}