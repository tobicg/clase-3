import CartWidget from './../CartWidget/CartWidget';
import './NavBar.css';

const NavBar = () => {
    return (
        <div className="navbar">
            <div className="navbar-container">
                <h1 className="navbar-container-title">CA BURGERS</h1>
                <ul className="navbar-container-components">
                    <li className="navbar-container-components-items"><a href="">Inicio</a></li>
                    <li className="navbar-container-components-items"><a href="">Carta</a></li>
                    <li className="navbar-container-components-items"><a href="">Sucursales</a></li>
                    <li className="navbar-container-components-items"><a href="">Nosotros</a></li>
                    <li className="navbar-container-components-items"><a href="">Contacto</a></li>
                    <CartWidget />
                </ul>
            </div>
        </div>
    )
}

export default NavBar
