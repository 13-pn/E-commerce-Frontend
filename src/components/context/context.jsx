import { createContext, useContext, useState } from 'react';

const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [signup, setSignup] = useState(false); 
  const [CartArr, setCartArr] = useState([])
  const [LocationText, setLocationText] = useState("Select Delivery Location")
  const [sellerisLogin, setsellerisLogin] = useState(false)
  const [CustomerLogin, setCustomerLogin] = useState(false)

  //Removefromcart
  function RemoveFromCart(product){
  let removeCart = CartArr.filter((e) => e.id !== product.id);
  setCartArr(removeCart);
  console.log("Removed from cart");
  console.log(removeCart);
}

  function addToCart(product){
    let fnCartArr=[...CartArr,product]
    setCartArr(fnCartArr);
    console.log("Product Addded on cart");
    console.log(fnCartArr);
    
  }
  return (
    <Context.Provider 
    value={{ signup,
    setSignup ,
    CartArr,
    setCartArr, 
    LocationText, 
    setLocationText, 
    RemoveFromCart,
    sellerisLogin,
    setsellerisLogin,
    addToCart,
    CustomerLogin,
    setCustomerLogin}}>
      {children}
    </Context.Provider>
  );
};

export const useContextpvd = () => useContext(Context);