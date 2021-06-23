import Avatar from "@material-ui/core/Avatar";
import "./VideosCard.css";

const VideosCard = ({
  thumbnail,
  title,
  src,
  username,
  isApproved,
  views,
  timestamp,
}) => {
  return (
    <div className="videosCard">
      <section className="videosCard__thumbnail">
        <img src={thumbnail} alt="" />
      </section>
      <section className="videosCard__main">
        <div className="videosCardMain__avatar">
          <Avatar src={src} />
        </div>
        <div className="videosCardMain__contents">
          <h4 className="crop">{title} </h4>
          <h4 className="videosCardMain__contents--username">{username}</h4>
          <p>
            {views} views . {timestamp} ago
          </p>
        </div>
      </section>
    </div>
  );
};

export default VideosCard;
