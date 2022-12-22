import { Link } from "react-router-dom";
import Checkout from "../Checkout/Checkout";
const Cart = () => {
    return (
        <div>
            <h1>No hay Cursos ingresados</h1>
            <button className="btn btn-dark"><Link to={'/Checkout'}>Finalizar Compra</Link></button>
        </div>
    );
}

export default Cart;