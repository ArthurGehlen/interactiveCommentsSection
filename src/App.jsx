import { useState, useEffect } from "react";
import "./App.css";

// Components
import Comment from "./components/Comment"

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.json();
      })
      .then((json) => setData(json))
      .catch((error) => console.error("Erro ao carregar JSON:", error));
  }, []);

  return (
    <main>
      {data ? (
        data.comments.map((comment) => (
          <p key={comment.id}>{comment.user.username}</p>
        ))
      ) : (
        <p>Carregando...</p>
      )}
    </main>
  );
}

export default App;
