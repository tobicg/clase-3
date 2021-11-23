import { createContext, useState, useContext} from 'react'

 const CartContext = createContext([])
 
export const useCartContext = () => {
    return useContext(CartContext)
}

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([])

    const addItem = (item, cantidad) => {
        let inCartList = cartList.find((cartItem) => cartItem.id === item.id)

        if (inCartList) {
            inCartList.cantidad += cantidad
            setCartList([...cartList])
        } else {
            setCartList([...cartList, { ...item, cantidad}])
        }
        
    }
    const removeItem = (id) => {
        setCartList(cartList.filter((item) => item.id !== id))
    }

    const cantItem = () => {
        return cartList.reduce((acumulado, item) => acumulado = acumulado + item.cantidad, 0)
    }

    const sumaPrecioItems = () => {
        return cartList.reduce((acumulado, item) => acumulado = acumulado + item.price, 0)
    }   

    const totalPrice = () => {
        return cartList.reduce((acumulado, item) => (acumulado += item.price * item.cantidad), 0)
    }

    const clear = () => {
        setCartList([])
    }

    return (
        <CartContext.Provider value={
            {
                cartList,
                addItem,
                clear,
                removeItem,
                cantItem,
                sumaPrecioItems,
                totalPrice
            }}>
            
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider