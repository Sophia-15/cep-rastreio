import React from 'react';
import './styles.scss';
import location from '../../assets/img/location.svg';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <nav>
        <ul className="navbar">
          <div className="logo">
            <li>
              <img src={location} alt="Location icon" />
            </li>
          </div>
          <div className="pages">
            <li>
              <Link to="/" style={{ textDecoration: 'none', color: '#e0e0e0' }}>
                Consultar Cep
              </Link>
            </li>
            <li>
              <Link
                to="/rastrear"
                style={{ textDecoration: 'none', color: '#e0e0e0' }}
              >
                Rastrear encomenda
              </Link>
            </li>
          </div>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
