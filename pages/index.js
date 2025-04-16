import { useEffect, useState } from 'react';

export default function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (window.Pi) {
      window.Pi.init({ version: "2.0" });

      window.Pi.authenticate(['username', 'payment'], function (auth) {
        setUser(auth.user);
      }, function (error) {
        console.error(error);
      });
    }
  }, []);

  return (
    <div>
      <h1>Bienvenue sur Vente Automobile en Pi</h1>
      {user ? (
        <p>Connecté en tant que : {user.username}</p>
      ) : (
        <p>Connexion en cours...</p>
      )}
    </div>
  );
}
