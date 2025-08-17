// Import React et hooks useEffect, useState
import React, { useEffect, useState } from 'react'; 
// Import de l'instance axios configurée pour les appels API
import api from '../api/ClientApi'; 

function ClientList() {
  // État pour stocker la liste des clients
  const [clients, setClients] = useState([]);
  // État pour indiquer si les données sont en cours de chargement
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Requête GET vers /clients pour récupérer les clients
    api
      .get('/clients')
      .then((res) => {
        // Met à jour la liste des clients avec la réponse
        setClients(res.data);
        // Arrête le chargement 
        setLoading(false);    
      })
      .catch((err) => {
        // Affiche l'erreur dans la console
        console.error(err);   
        // Arrête le chargement même en cas d'erreur
        setLoading(false);    
      });
  }, []);

  return (
    // Conteneur principal 
    <div className="container mt-5">
      {/* Titre centré */}
      <h2 className="mb-4 text-center">Liste des Clients</h2>

      {loading ? (
        // Affiche un spinner Bootstrap pendant le chargement
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Chargement...</span>
          </div>
        </div>
      ) : (
        // Tableau affichant les clients
        <div className="table-responsive">
          <table className="table table-bordered table-hover shadow-sm">
            <thead className="table-dark">
              <tr>
                <th>Nom</th>
                <th>Email</th>
                <th>Téléphone</th>
              </tr>
            </thead>
            <tbody>
              {clients.length > 0 ? (
                // Parcours et affichage des clients
                clients.map((client) => (
                  <tr key={client.id}>
                    <td>{client.name}</td>
                    <td>{client.email}</td>
                    {/* Affiche '-' si le téléphone est vide */}
                    <td>{client.phone || '-'}</td>
                  </tr>
                ))
              ) : (
                // Message affiché si aucun client n'est trouvé
                <tr>
                  <td colSpan="4" className="text-center text-muted">
                    Aucun client trouvé.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

// Exportation du Composant
export default ClientList;
