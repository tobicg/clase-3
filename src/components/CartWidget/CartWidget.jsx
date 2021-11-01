import './CartWidget.css';
import cart from './../Icons/cart-outline.svg';

const CartWidget = () => {
    return (
        <div className="cartWidget">
            <img src={cart} alt="cart" />
        </div>
    )
}

export default CartWidget