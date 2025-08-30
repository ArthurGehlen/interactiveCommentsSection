// Images
import minus_icon from "../images/icon-minus.svg";
import plus_icon from "../images/icon-plus.svg";

// Utils
import "./LikeSection.css";

function LikeSection({ likes = 0 }) {
  return (
    <div className="likes_section">
      <div className="likes_wrapper">
        <button>
          <img src={plus_icon} alt="Plus" />
        </button>
        <span>{likes}</span>
        <button>
          <img src={minus_icon} alt="Minus" />
        </button>
      </div>
    </div>
  );
}

export default LikeSection;
