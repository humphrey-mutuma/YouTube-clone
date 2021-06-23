import Avatar from "@material-ui/core/Avatar";
import "./VideosCard.css";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";

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
        {/* <span>
          <span>
            <WatchLaterIcon className="thumbnail__icon" />
          </span>
          <span>
            <PlaylistPlayIcon className="thumbnail__icon" />
          </span>
        </span> */}
        <img src={thumbnail} alt="" />
      </section>
      <section className="videosCard__main">
        <div className="videosCardMain__avatar">
          <Avatar src={src} />
        </div>
        <div className="videosCardMain__contents">
          <h4 className="crop">
            {title} <MoreVertIcon className="MoreVertIcon__icon" />{" "}
          </h4>
          <h4 className="videosCardMain__contents--username">
            {username}{" "}
            {isApproved && <CheckCircleIcon className="isApproved__icon" />}
          </h4>
          <p>
            {views} views . {timestamp} ago
          </p>
        </div>
      </section>
    </div>
  );
};

export default VideosCard;
