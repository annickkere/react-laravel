// Importation des composants de routing depuis react-router-dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importation des Composants de l'application
import ClientForm from './components/ClientForm';
import ClientList from './components/ClientList';
import Welcome from './components/Welcome';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';

function App() {
  return (
    // Fournit le contexte de navigation à l'application 
    <Router>
      {/* Barre de navigation visible sur toutes les pages */}
      <Navbar/>
      {/* Conteneur des routes de l'application */}
      <Routes>
        {/* Route pour Ajouter un client */}
        <Route path="/" element={<ClientForm />} />
        {/* Route vers la Liste des clients */}
        <Route path="/clients" element={<ClientList />} />
        {/* Route vers la page de Bienvenue */}
        <Route path="/welcome" element={<Welcome />} />
        {/* Route de secours si l'URL ne correspond à rien */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

// Exportation du Composant
export default App;
