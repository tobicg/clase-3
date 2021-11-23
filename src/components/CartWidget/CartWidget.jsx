import './CartWidget.css';
import { useCartContext } from '../../CartContext/CartContext';
import cart from './../Icons/cart-outline.svg';

const CartWidget = () => {
    const { cantItem } = useCartContext()
 return(
    <div className="cartWidget">
            <img src={cart} alt="cart" />
            <span className="nCarrito"> {cantItem() !== 0 && cantItem()} </span>
    </div>
 )
}

export default CartWidget