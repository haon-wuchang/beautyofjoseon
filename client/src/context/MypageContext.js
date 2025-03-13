import {createContext, useState, useEffect} from 'react'; 

export const MypageContext = createContext(); 

export const MypageProvider = ({children}) => {  
    const [myinfo, setMyinfo] = useState([]);
    const [year, setYear] = useState([]);
    const [month, setMonth] = useState([]);
    const [date, setDate] = useState([]);
    const [gender,setGender] = useState([]);
    
    return ( 
        <MypageContext.Provider 
        value ={{myinfo, setMyinfo,year, setYear,month, setMonth,date, setDate,
            gender,setGender
        }}> 
            {children}
        </MypageContext.Provider>
    );
}