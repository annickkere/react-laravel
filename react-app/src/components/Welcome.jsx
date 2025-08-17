// Importation de React
import React from 'react';

// Composant Welcome affiché après une Inscription Réussie
function Welcome() {
  return (
    <div className="container mt-5 text-center">
      {/* Titre principal*/}
      <h1 className="text-center">Bienvenue Chez <span className="text-primary">CUSTOMERS</span></h1>
      {/* Message de Confirmation */}
      <p className="lead">Votre Inscription a été réalisée avec Succès.</p>
    </div>
  );
}

// Exportation du Composant
export default Welcome;
