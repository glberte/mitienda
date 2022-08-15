import CartWiget from "./CartWidget";
import { Link } from "react-router-dom";
import BarraFiltros from "./Filter";

const NavBar = ({amountItems}) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container">
          <Link to={"/"}> E-Pups </Link>

           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon"></span>
           </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <Link className="nav-link" to={"/"}>Productos </Link>
                    </li>

                    <li className="nav-item">
                      <Link className="nav-link" to={"/Contacto"}> Contacto </Link>
                    </li>
                  </ul>
              <Link to={"/cart"}>
                <CartWiget amountItems = {amountItems}/>
              </Link>
            </div>
        </div>
      </nav>
      <BarraFiltros/>
    </div>
  )
}

export default NavBar;