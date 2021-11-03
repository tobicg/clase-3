import { useState } from "react"
import './ItemCount.css';

const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial)
    
    return (
        <div className="itemCount">
            <h2 className="cantidad">Cantidad: <span>{count}</span></h2>
            <h2 className="stock">Stock: <span>{stock}</span></h2>
            <div className="buttons">
            <button className="btnResta" onClick={() => setCount(count-1)} disabled={count === 0}>-</button>
            <button className="btnSuma" onClick={() => setCount(count+1)} disabled={count === stock}>+</button>
            <button className="btnAddCarrito" onClick={() => setCount(0)} disabled={count === 0}>Añadir al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount