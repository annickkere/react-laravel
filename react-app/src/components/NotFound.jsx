// Import de React et du Composant Link pour la navigation entre les pages
import React from 'react';
import { Link } from 'react-router-dom'; 

function NotFound() {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <div className="text-center">
        {/* Code d'erreur en grand */}
        <h1 className="display-1 fw-bold text-primary">404</h1> 
        {/* Message principal */}
        <p className="fs-3"> <span className="text-danger">Oups !</span> Page Introuvable.</p> 
        <p className="lead">
          La page que vous cherchez n'existe pas ou a été déplacée.
        </p>
        {/* Lien vers la page d'accueil */}
        <Link to="/" className="btn btn-outline-primary">
          Retour à l'Accueil
        </Link> 
      </div>
    </div>
  );
}

// Exportation du Composant
export default NotFound;
