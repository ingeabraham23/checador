import { Link } from 'react-router-dom';
import "./Navbar.css"
import {
    faClock,
    faDollar,
    faReceipt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const navigationItems = [
  { path: '/', icon: faClock, label: 'Tiempos' },
  { path: '/datos', icon: faClock, label: 'Datos' },
  { path: '/reporte', icon: faReceipt, label: 'Reporte' },
  { path: '/comision', icon: faDollar, label: 'Comision' },

];

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        {navigationItems.map((item) => (
          <li className="nav-item" key={item.path}>
            <Link to={item.path} className="nav-link">
              <FontAwesomeIcon icon={item.icon} size="2x" style={{ fontSize: '24px' }}/> {/* Renderiza el icono de Font Awesome */}
              <span className="text-small">{item.label}</span> {/* Agrega el span para mostrar la etiqueta */}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;