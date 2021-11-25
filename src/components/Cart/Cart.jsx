import { Link } from 'react-router-dom'
import { useCartContext } from '../../CartContext/CartContext'
import { CartEmpty } from './CartEmpty.jsx'
import './Cart.css'
export const Cart = () => {
    
    const { cartList, clear, removeItem, totalPrice  } = useCartContext()

    console.log(cartList)

    return (
        <div className="cart">
            {cartList.length === 0 ? <CartEmpty h1="Su carrito está vacío" /> :

                cartList.map(item =>
                    <div className="cart-item">
                        <table>
                            <thead >
                                <tr>
                                    <th scope="col"></th>
                                    <th scope="col"></th>
                                    <th scope="col" key={item.id}>Producto</th>
                                    <th scope="col">Cantidad</th>
                                    <th scope="col">Precio</th>
                                    <th scope="col">Sub total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="table-active">
                                    <th scope="row"></th>
                                    <td><img className="cartImg" src={item.img} alt="" /></td>
                                    <td>{item.title}</td>
                                    <td>{item.cantidad}</td>
                                    <td>${item.price}</td>
                                    <td>${item.price * item.cantidad}</td>
                                    <th scope="col">
                                        <button className="button-item" onClick={() => removeItem(item.id)}>Eliminar producto</button>
                                    </th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )
            }
            {
                cartList.length === 0 ? null :
                    <>
                        <button type="button" className="button-item" onClick={clear}>Eliminar carrito</button>

                        <div className="finish">
                            <div className="finish-body">
                                <p className="card-text">Total: ${totalPrice()}  </p>
                                <div className="finish-body-div">
                                <Link to='/finalizado' className="button-item">Terminar pedido</Link>
                                <Link to='/' className="button-item">Seguir pidiendo</Link>
                                </div>
                            </div>
                        </div>
                    </>

            }



        </div>
    )
}