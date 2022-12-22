import { Link } from "react-router-dom";
const Item = ({prod}) => {
    return (
        <div className='card mb-3 cardProducto border-light'>
                        <img src={`../img/${prod.img}`}className="card-img-top" alt="..." />
                        <div className='card-body cardBody'>
                            <h5 className="card-title">{prod.nombre} </h5>
                            <p className="card-text">Duracion: {prod.marca}</p>
                            <p className="card-text">Precio: ${new Intl.NumberFormat('de-DE').format(prod.precio)}</p>
                            <button className='btn btn-primary'><Link className="nav-link" to={`/products/${prod.id}`}>Ver Curso</Link></button>
                        </div>
        </div>
    );
}

export default Item;