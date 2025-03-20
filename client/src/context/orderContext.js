import { createContext, useState } from "react";

export const OrderContext = createContext(); 

export const OrderProvider = ({children}) => { 

    const [orderList, setOrderList] = useState([]);
    const [orderType, setOrderType] = useState("");

    return(
        <OrderContext.Provider value={{orderList, setOrderList,
                                        orderType, setOrderType}}> 
            {children}
        </OrderContext.Provider>
    );

}