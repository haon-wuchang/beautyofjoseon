import {createContext, useState} from 'react'; 

export const SearchContext = createContext();

export const SearchProvider = ({children}) => {
    // 전역 공간에서 자동 업데이트 되도록 관리
    const [searchKeyword, setSearchKeyword] = useState("");

    return (
        <SearchContext.Provider value={{searchKeyword, setSearchKeyword}}>
            {children}
        </SearchContext.Provider>
    );
}