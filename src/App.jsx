import { useState, useEffect } from "react";
import "./App.css";

// Images
import user_img from "../public/avatars/image-juliusomo.png";

// Components
import Comment from "./components/Comment";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => {
        if (!response.ok) throw new Error("Response ERROR");
        return response.json();
      })
      .then((json) => setData(json))
      .catch((error) => console.error("Erro ao carregar JSON:", error));
  }, []);

  return (
    <main>
      {data ? (
        data.comments.map((comment) => (
          <Comment
            key={comment.id}
            user={comment.user.username}
            avatar={comment.user.image["png"]}
            timestamp={comment.createdAt}
            likes={comment.score}
            text={comment.content}
            replies={comment.replies}
          />
        ))
      ) : (
        <p>Carregando...</p>
      )}
      <form className="add_comment_wrapper">
        <img src={user_img} alt="User" />
        <textarea name="add_comment" placeholder="Add a comment..."></textarea>
        <button type="submit">SEND</button>
      </form>
    </main>
  );
}

export default App;
