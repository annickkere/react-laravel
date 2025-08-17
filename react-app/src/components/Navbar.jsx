// Import de React pour créer le composant
import React from 'react'; 
// Import de NavLink pour gérer les liens avec style actif
import { NavLink } from 'react-router-dom'; 

function Navbar() {
  return (
    // Barre de navigation responsive avec Bootstrap
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
      <div className="container">
        {/* Logo de l'application cliquable qui ramène à la page d'accueil */}
        <NavLink className="navbar-brand fw-bold text-primary" to="/">
          CUSTOMERS
        </NavLink>

        {/* Bouton hamburger pour basculer la navigation sur petits écrans */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          {/* Icône du bouton hamburger */}
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu déroulant qui s'affiche ou se cache selon la taille de l'écran */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              {/* Lien vers la page de formulaire, style actif quand la route est active */}
              <NavLink
                to="/"
                className={({ isActive }) =>
                  'nav-link' + (isActive ? ' active fw-bold text-primary' : '')
                }
              >
                Ajouter un client
              </NavLink>
            </li>
            <li className="nav-item">
              {/* Lien vers la liste des clients, style actif quand la route est active */}
              <NavLink
                to="/clients"
                className={({ isActive }) =>
                  'nav-link' + (isActive ? ' active fw-bold text-primary' : '')
                }
              >
                Liste des clients
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

// Exportation du Composant
export default Navbar;
