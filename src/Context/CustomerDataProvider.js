import React, { createContext, useState } from "react";


export const CustomerDataContext = createContext();


export const CustomerDataProvider = ({children }) => {
    const [customerData,setCustomerData]=useState({email:"",address1:"",address2:"",city:"",zipcode:"",name:""});
    return(
    <CustomerDataContext.Provider value={
        {customerData,setCustomerData}
    }>
        {children}
    </CustomerDataContext.Provider>)
};

