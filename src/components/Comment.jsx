// Components
import LikeSection from "../layout/LikeSection";

// Images
import icon_reply from "../images/icon-reply.svg";

// Utils
import "./Comment.css";

function Comment({ user, avatar, timestamp, likes, text, replies = [] }) {
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

export default Comment;
