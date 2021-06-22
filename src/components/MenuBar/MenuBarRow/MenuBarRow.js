import React from 'react'
import "./MenuBarRow.css";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";

const MenuBarRow = ({ Icon, src, title, name }) => {
  return (
    <div className="menuBarRow">
      <span className="menuBarRow__icons">
        {Icon && <IconButton className="menuBarRow__iconButton"> <Icon  className="menuBarRow__icon--icon" /> </IconButton>}
        {src && <Avatar className="menuBarRow__icon--avatar" />}
      </span>
      <span className=" menuBarRow__title">
        {title && title}
        {name && name}
      </span>
    </div>
  );
};

export default MenuBarRow;
