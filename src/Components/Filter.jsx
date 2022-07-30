import { Link } from "react-router-dom";


const BarraFiltros = ()=> {
    return(
        <div>
        <Link to={"category/aliments"}>
            <button className="btn btn-outline-dark">
                Solo Alimentos
            </button>
        </Link>

        <Link to={"/category/toys"}>
            <button className="btn btn-outline-dark">
                Juguetes
            </button>
        </Link>

        </div>
    )
}

export default BarraFiltros;



            