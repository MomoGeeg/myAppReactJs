import { Link, useParams } from "react-router-dom";

export default function OrderPage() {
  const { userName } = useParams();
  return (
    <div>
      <h1>Bonjour {userName} !</h1>

      <p>Voici votre espace de commande.</p>

      <p>Vous pouvez y passer vos commandes et suivre leur statut.</p>
      <Link to="/">
        <button>Deconnexion</button>
      </Link>
    </div>
  );
}
