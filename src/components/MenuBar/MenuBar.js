import React from "react";
import "./MenuBar.css";
import MenuBarRow from "./MenuBarRow/MenuBarRow";

import HomeIcon from "@material-ui/icons/Home";
import ExploreIcon from "@material-ui/icons/Explore";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpAltOutLinedIcon from "@material-ui/icons/ThumbUpAlt";
import ExpandMoreOutLinedIcon from "@material-ui/icons/ExpandMore";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import SettingsIcon from "@material-ui/icons/Settings";
import FlagIcon from "@material-ui/icons/Flag";
import FeedbackIcon from "@material-ui/icons/Feedback";
import HelpIcon from "@material-ui/icons/Help";
import LiveTvIcon from "@material-ui/icons/LiveTv";

const MenuBar = () => {
  return (
    <div className="menuBar">
      <MenuBarRow Icon={HomeIcon} title="Home" />
      <MenuBarRow Icon={ExploreIcon} title="Explore" />
      <MenuBarRow Icon={SubscriptionsIcon} title="Subscription" />
      <hr />
      <MenuBarRow Icon={VideoLibraryIcon} title="Library" />
      <MenuBarRow Icon={HistoryIcon} title="History" />
      <MenuBarRow Icon={WatchLaterIcon} title="Watch Later" />
      <MenuBarRow Icon={ThumbUpAltOutLinedIcon} title="Liked Videos" />
      <MenuBarRow Icon={OndemandVideoIcon} title="Your Videos" />
      <hr />
      <h4>SUBSCRIPTIONS</h4>
      <MenuBarRow
        src={`https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 50)}`}
        name="John peter"
      />
      <MenuBarRow
        src={`https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 50)}`}
        name="John peter"
      />{" "}
      <MenuBarRow
        src={`https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 50)}`}
        name="John peter "
      />
      <MenuBarRow
        src={`https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 50)}`}
        name="John peter "
      />
      <MenuBarRow
        src={`https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 50)}`}
        name="John peter"
      />
      <MenuBarRow
        src={`https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 50)}`}
        name="John peter"
      />
      <MenuBarRow
        src={`https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 50)}`}
        name="John peter"
      />
      <MenuBarRow Icon={ExpandMoreOutLinedIcon} title="Show more" />
      <hr />
      <h4>MORE FROM YOUTUBE</h4>
      <MenuBarRow Icon={VideoLibraryIcon} title="Gaming" />
      <MenuBarRow Icon={LiveTvIcon} title="Live" />
      <MenuBarRow Icon={SportsEsportsIcon} title="Sports" />
      <hr />
      <MenuBarRow Icon={SettingsIcon} title="Settings" />
      <MenuBarRow Icon={FlagIcon} title="Report history" />
      <MenuBarRow Icon={HelpIcon} title="Help" />
      <MenuBarRow Icon={FeedbackIcon} title="Send feedback" />
      <hr />
      <p>
        <span>About</span>
        <span>Press</span>
        <span>Copyright</span>
        <span>Contact us</span>
        <span>Creators</span>
        <span>Advertise</span>
        <span>Developers</span>
        <br />
        <span>Terms</span>
        <span>Privacy</span>
        <span>Policy Safety</span>
        <span>How Youtube works</span>
        <span>Test new features</span>
        <br />
        <span>&copy;2021 Google LLC</span>
      </p>
    </div>
  );
};

export default MenuBar;
