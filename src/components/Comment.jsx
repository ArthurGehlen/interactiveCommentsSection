// Components
import "../layout/LikeSection";

// Utils
import "./Comment.css";

function Comment({ user, avatar, timestamp, likes, text }) {
  return (
    <div className="comment">
      <LikeSection />
      <div className="user_wrapper">
        <header>
          <div className="user_info">
            <img src={avatar} alt="Avatar" />
            <p>{user}</p>
            <p className="timestamp">{timestamp}</p>
          </div>
          <button>
            <img src={reply_icon} alt="Reply" />
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
