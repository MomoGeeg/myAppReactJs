import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div>
      <h1>Oups ! La page que vous cherchez n'existe pas.</h1>
      <Link to="/">
        <button>Retournez à l'accueil</button>
      </Link>
    </div>
  );
}
