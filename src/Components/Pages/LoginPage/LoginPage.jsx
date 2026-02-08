import { useState } from "react";

export default function LoginPage() {
  // State (état, données)
  // const [name, setName] = useState("");
  const [inputValue, setInputValue] = useState(" ");

  // Comportement (fonction, logique)
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Bienvenue ${inputValue} !`);
    setInputValue("");
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <h1>Bien venu chez Nous !</h1>
      <h3>Connectez-Vous</h3>
      <form action="submit" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Entrez votre prénom..."
          required
          value={inputValue}
          onChange={handleChange}
        />
        <button type="submit">Entrez votre prénom</button>
      </form>
    </div>
  );
}
