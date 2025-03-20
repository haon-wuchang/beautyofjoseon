import { createContext, useState } from "react";

export const OrderContext = createContext(); 

export const OrderProvider = ({children}) => { 

    const [orderList, setOrderList] = useState([]);

    return(
        <OrderContext.Provider value={{orderList, setOrderList}}> 
            {children}
        </OrderContext.Provider>
    );

}