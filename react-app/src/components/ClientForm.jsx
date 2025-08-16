import React, { useState } from 'react';
import api from '../api/clientApi';

function ClientForm({ onSuccess }) {
  const [client, setClient] = useState({ name: '', email: '', phone: '' });

  const handleChange = e => {
    setClient({ ...client, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    api.post('/clients', client)
      .then(() => {
        onSuccess(); // pour rafraîchir la liste
        setClient({ name: '', email: '', phone: '' });
      })
      .catch(err => console.error(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={client.name} onChange={handleChange} placeholder="Nom" required />
      <input name="email" value={client.email} onChange={handleChange} placeholder="Email" required />
      <input name="phone" value={client.phone} onChange={handleChange} placeholder="Téléphone" />
      <button type="submit">Ajouter</button>
    </form>
  );
}

export default ClientForm;
