import React from "react";
import "./MenuBarRow.css";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";

const MenuBarRow = ({ isSelected, Icon, src, title, name }) => {
  return (
    <div className={`menuBarRow ${isSelected && "isSelected"}`}>
      <span className="menuBarRow__icons">
        {Icon && (
          <IconButton className="menuBarRow__iconButton">
            <Icon
              className={`menuBarRow__icon--icon ${
                isSelected && "isSelectedIcon"
              }`}
            />
          </IconButton>
        )}
        {src && <Avatar src={src} className="menuBarRow__icon--avatar" />}
      </span>
      <span className=" menuBarRow__title">
        {title && title}
        {name && name}
      </span>
    </div>
  );
};

export default MenuBarRow;
