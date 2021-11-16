import {createContext, useState} from 'react'

const CardContext = createContext([])

const CartContextProvider = ({ children }) => {
    const [cardList, setCardList] = useState([])

    function agregarCarrito(item) {
        setCardList(item)
    }


    return (
        <CardContext.Provider value={
            {
                cardList,
                agregarCarrito
            }}>
            {children}
        </CardContext.Provider>
    )
}

export default CartContextProvider