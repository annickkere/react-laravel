import React from 'react';
import ClientList from './components/ClientList';
import ClientForm from './components/ClientForm';

function App() {
  const [reload, setReload] = React.useState(false);

  return (
    <div>
      <h1>Bienvenue Chez CUSTOMERS !</h1>
      <ClientForm onSuccess={() => setReload(!reload)} />
      <ClientList key={reload} />
    </div>
  );
}

export default App;

