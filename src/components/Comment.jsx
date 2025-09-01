import "./Comment.css";
import CommentLayout from "../layout/CommentLayout";

function Comment({ user, avatar, timestamp, likes, text, replies }) {
  return (
    <div className="comment_wrapper">
      <CommentLayout
        user={user}
        avatar={avatar}
        timestamp={timestamp}
        likes={likes}
        text={text}
      />

      {replies && replies.length > 0 && (
        <>
          {replies.map((reply) => (
            <div className="reply_wrapper">
              <div className="reply_identifier">
                <div className="division"></div>
              </div>
              <CommentLayout
                key={reply.id}
                user={reply.user.username}
                avatar={reply.user.image.png}
                timestamp={reply.createdAt}
                likes={reply.score}
                replying_to={reply.replyingTo}
                text={reply.content}
              />
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default Comment;
