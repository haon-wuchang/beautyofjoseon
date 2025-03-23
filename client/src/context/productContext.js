import {createContext, useState, useEffect} from 'react'; 

export const ProductContext = createContext(); 

export const ProductProvider = ({children}) => {  
    const [wishList, setWishList] = useState([]);
    const [reviews, setReviews] = useState([]);


    return ( 
        <ProductContext.Provider 
        value ={{ wishList, setWishList, reviews, setReviews }}> 
            {children}
        </ProductContext.Provider>
    );
}