import { useState } from "react"
import './ItemCount.css';

const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial)
    
    const sumar = () => {
        setCount(count+1)
    }

    const restar = () => {
        setCount(count-1)
    }

    return (
        <div className="itemCount">
            <button className="btnResta" onClick={restar} disabled={count === 0}>-</button>
            <h2 className="cantidad"><span>{count}</span></h2>
            <button className="btnSuma" onClick={sumar} disabled={count === stock}>+</button>
        </div>
    )
}

export default ItemCount