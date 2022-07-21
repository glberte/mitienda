import CartWiget from "./CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-light">
  <div class="container">
    <Link to={"/"}>
      <h2>E-Pups</h2>
     {/* <a class="navbar-brand fw-bold fs-4"> E-Pups</a> */}

    </Link>
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">

        <li class="nav-item">
          <Link to={"/Productos"}>
            <a class="nav-link" href="#">Productos</a>
          </Link>
        </li>
        <li class="nav-item">
          <Link to={"/Contacto"}> 
          { <a  class="nav-link" href="#">Contacto</a>} 
          </Link>
          
        </li>

      </ul>
      <Link to={"/cart"}>
        <CartWiget/>
      </Link>
    </div>
  </div>
</nav>

    </div>
  )
}

export default NavBar;