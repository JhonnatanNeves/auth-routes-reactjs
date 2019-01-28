import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header>
    <nav>
      <ul>
        <li>
          <Link to="/">Página inicial</Link>
        </li>
        <li>
          <Link to="/private">Rota privada</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
