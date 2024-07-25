import { createContext, useState } from "react";


export const Ctx = createContext();


const Provider = ({children}) => {

    const [cartProducts, setCartProducts] = useState([]);

    return <Ctx.Provider value={{cartProducts, setCartProducts}}>{children}</Ctx.Provider>
}

export default Provider;