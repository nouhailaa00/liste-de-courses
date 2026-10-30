import { useState } from "react";
import "./App.css";
function App() {
  const [texte, setTexte] = useState("");
  const [articles, setArticles] = useState([]);
  const ajouterArticle = () => {
    const nom = texte.trim();
    if (nom === "") return; // on ignore les champs vides
    setArticles([...articles, { id: Date.now(), nom }]);
    setTexte("");
  };
  const supprimerArticle = (id) => {
    setArticles(articles.filter((article) => article.id !== id));
  };
  return (
    <div className="app">
      <h1>Liste de courses</h1>
      <div className="saisie">
        <input
          type="text"
          placeholder="Ex : Lait, pain..."
          value={texte}
          onChange={(e) => setTexte(e.target.value)}
        />
        <button className="btn-ajouter" onClick={ajouterArticle}>
          ➕ Ajouter
        </button>
      </div>
      {articles.length === 0 ? (
        <p className="vide">Ta liste est vide. Ajoute un article !</p>
      ) : (
        <ul>
          {articles.map((article) => (
            <li key={article.id}>
              <span>{article.nom}</span>
              <button
                className="btn-supprimer"
                onClick={() => supprimerArticle(article.id)}
              >
                🗑️
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default App;