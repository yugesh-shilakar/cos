import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/home">
            <i className="fa-solid fa-house-user fa-2xl icon"></i>
          </Link>
        </li>
        <li>
          <Link to="/checkout">
            <i class="fa-solid fa-cart-shopping fa-2xl icon"></i>
          </Link>
        </li>
        <li>
          <Link to="/notification">
            <i class="fa-solid fa-bell fa-2xl icon"></i>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
