import { Link } from "react-router-dom";

export default function OrderPage() {
  return (
    <div>
      <h1>Bonjour !</h1>

      <p>Voici votre espace de commande.</p>

      <p>Vous pouvez y passer vos commandes et suivre leur statut.</p>
      <Link to="/">
        <button>Deconnexion</button>
      </Link>
    </div>
  );
}
