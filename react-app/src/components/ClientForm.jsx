// Import React et hook useState pour gérer l'état local
import React, { useState } from 'react'; 
// Import du hook useNavigate pour la navigation programmée
import { useNavigate } from 'react-router-dom'; 
// Import de l'instance axios configurée pour appeler l'API
import api from '../api/ClientApi'; 

function ClientForm({ onSuccess }) {
  // État local pour stocker les données du formulaire client
  const [client, setClient] = useState({
    name: '',
    email: '',
    phone: ''
  });

  // Hook pour naviguer vers une autre route après soumission réussie
  const navigate = useNavigate();

  // Fonction qui gère les changements dans les champs du formulaire
  const handleChange = (e) => {
    // Récupère le nom et la valeur du champ modifié
    const { name, value } = e.target; 
    setClient((prevState) => ({
      // Copie l'état précédent
      ...prevState,       
      // Met à jour la valeur du champ modifié
      [name]: value       
    }));
  };

  // Fonction appelée à la soumission du formulaire
  const handleSubmit = (e) => {
    // Empêche le comportement par défaut (rechargement de la page)
    e.preventDefault(); 
    // Envoi des données client à l'API via POST
    api.post('/clients', client) 
      .then((response) => {
        // Log la réponse pour debug
        console.log('Réponse du serveur:', response); 
        // Réinitialise le formulaire
        setClient({ name: '', email: '', phone: '' }); 
        // Redirige vers la page de bienvenue après succès
        navigate('/welcome'); 
      })
      .catch((err) => {
        // Affiche l'erreur dans la console, avec gestion des erreurs venant du serveur
        console.error("Erreur:", err.response?.data || err.message);
      });
  };

  return (
    // Conteneur principal avec marge haute
    <div className="container mt-5">
      {/* Centrage horizontal de la ligne */}
      <div className="row justify-content-center">
        {/* Colonne responsive de taille moyenne */}
        <div className="col-md-6">
          {/* Carte Bootstrap avec ombre */}
          <div className="card shadow">
            <div className="card-body">
              {/* Titre principal */}
              <h1 className="card-title text-center mb-4 fs-2">
                Bienvenue Chez <span className="text-primary">CUSTOMERS</span>
              </h1>
              {/* Formulaire avec gestion de la soumission */}
              <form onSubmit={handleSubmit}>
                {/* Champ Nom */}
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Nom</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={client.name}         // Valeur liée à l'état client.name
                    onChange={handleChange}     // Mise à jour de l'état au changement
                    placeholder="Entrez le nom"
                    required                    // Champ obligatoire
                  />
                </div>
                {/* Champ Email */}
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={client.email}
                    onChange={handleChange}
                    placeholder="Entrez l'email"
                    required
                  />
                </div>
                {/* Champ Téléphone */}
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">Téléphone</label>
                  <input
                    type="tel"
                    className="form-control"
                    name="phone"
                    value={client.phone}
                    onChange={handleChange}
                    placeholder="Entrez le téléphone"
                  />
                </div>
                {/* Bouton de soumission */}
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary">Ajouter Un Client</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Exportation du Composant
export default ClientForm;