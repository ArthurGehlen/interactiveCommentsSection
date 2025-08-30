// Utils
import "./CommentLayout.css";

// Components
import LikeSection from "./LikeSection";

// Images
import icon_reply from "../images/icon-reply.svg";

function CommentLayout({ user, avatar, timestamp, likes = 0, text }) {
  return (
    <div className="comment">
      <LikeSection likes={likes} />
      <div className="user_wrapper">
        <header>
          <div className="user_info">
            <img src={avatar} alt="Avatar" />
            <p>{user}</p>
            <p className="timestamp">{timestamp}</p>
          </div>
          <button>
            <img src={icon_reply} alt="Reply" />
            <span>Reply</span>
          </button>
        </header>
        <div className="text_wrapper">
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}

export default CommentLayout;
