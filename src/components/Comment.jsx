// Utils
import "./Comment.css";

// Components
import CommentLayout from "../layout/CommentLayout";

function Comment({ user, avatar, timestamp, likes, text, replies}) {
  return (
    <div className="comment_wrapper">
      <CommentLayout
        user={user}
        avatar={avatar}
        timestamp={timestamp}
        likes={likes}
        text={text}
      />
      {replies.length <= 0 &&
        replies.map((reply) => {
          <div className="reply_wrapper">
            <div className="reply_identifier"></div>
            <CommentLayout user={reply.user} />
          </div>;
        })}
    </div>
  );
}

export default Comment;
