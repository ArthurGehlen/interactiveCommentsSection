// Utils
import "./CommentLayout.css";

// Components
import LikeSection from "./LikeSection";

// Images
import icon_reply from "../images/icon-reply.svg";

function CommentLayout({
  user,
  replying_to,
  avatar,
  timestamp,
  likes = 0,
  text,
  is_you = false
}) {
  return (
    <div className="comment">
      <LikeSection likes={likes} />
      <div className="user_wrapper">
        <header>
          <div className="user_info">
            <img src={avatar} alt="Avatar" />
            <p>{user}</p>
            {user == "juliusomo" && (
              <span className="is_you">you</span>
            )}
            <p className="timestamp">{timestamp}</p>
          </div>
          <button>
            <img src={icon_reply} alt="Reply" />
            <span>Reply</span>
          </button>
        </header>
        <div className="text_wrapper">
          <p>
            {replying_to && <span className="replying_to">@{replying_to}</span>}
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CommentLayout;
