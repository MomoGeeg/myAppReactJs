import { useState } from "react";
import LoginPage from "./Components/Pages/LoginPage/LoginPage";

function App() {
  // state (l'état, les données de l'application)
  const [name, setName] = useState("");

  // fonctions (les comportements de l'application)
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   alert(`Bienvenue ${name} !`);
  //   setName("");
  // };
  // const addName = (e) => {
  //   setName(e.target.value);
  // };

  // affichage (le rendu de l'application)
  return (
    <>
      {/* <div>
        <h3>Contactez-vous</h3>
        <form action="submit" onSubmit={handleSubmit}>
          <input
            value={name}
            onChange={addName}
            type="text"
            placeholder="entrez votre prénom"
          />
          <button>Accédez à votre espace</button>
        </form>
      </div> */}
      <LoginPage />
    </>
  );
}

export default App;
