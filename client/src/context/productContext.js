import {createContext, useState, useEffect} from 'react'; 

export const ProductContext = createContext(); 

export const ProductProvider = ({children}) => {  
    const [wishList, setWishList] = useState([]);

    return ( 
        <ProductContext.Provider 
        value ={{ wishList, setWishList }}> 
            {children}
        </ProductContext.Provider>
    );
}