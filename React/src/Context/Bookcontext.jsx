import { createContext , useContext , useState } from "react";

const CartContext = createContext ()

export const CartProvider = ({children}) => {
    const [Cart , setCart] = useState ([])

    const addToCart = (book) => {
            setCart((prev) => [...prev , book])

    }

    const removeCart = (id) => {
        setCart((prev) => prev.filter((bookID) => bookID.id !== id))
    }

    return (
        <CartContext.Provider value = {{Cart , addToCart , removeCart}}>
            {children}
        </CartContext.Provider>

    )
}

export const useCart = () => useContext(CartContext)