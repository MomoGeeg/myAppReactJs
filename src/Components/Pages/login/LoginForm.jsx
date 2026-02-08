import { useState } from "react";

export default function LoginForm() {
  // state (l'état, les données de l'application)
  const [inputValue, setName] = useState("");

  // fonctions (les comportements de l'application)
  const handleSubit = (event) => {
    event.preventDefault();
    alert(`Bienvenue ${inputValue} !`);
    setName("");
  };
  const handleChange = (event) => {
    setName(event.target.value);
  };
  // affichage (le rendu de l'application)
  return (
    <div>
      <form action="submit" onSubmit={handleSubit}>
        <h1>Bienvenue chez nous !</h1>
        <h3>Conectez-vous</h3>
        <input
          type="text"
          placeholder="Veuillez entrer votre prénom"
          required
          value={inputValue}
          onChange={handleChange}
        />
        <button>Accédez à votre espace</button>
      </form>
    </div>
  );
}
