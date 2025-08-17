import axios from 'axios'; // Importation de la bibliothèque axios pour faire des requêtes HTTP

// Création d'une instance axios configurée pour interagir avec l'API backend
export default axios.create({
  baseURL: 'http://localhost:8000/api', // URL de base pour toutes les requêtes API
  headers: {
    'Accept': 'application/json',       // On indique qu'on attend des réponses au format JSON
    'Content-Type': 'application/json'  // On envoie les données au format JSON
  }
});
