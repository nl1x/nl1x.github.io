import './topbar.css';
import React from "react";

interface TopBarProps {
  left?: React.ReactNode;
  center?: React.ReactNode;
  right?: React.ReactNode;
}

function TopBar(props: TopBarProps) {
  return (
    <div className="top-bar">
      <div className="left">{props.left}</div>
      <div className="center">{props.center}</div>
      <div className="right">{props.right}</div>
    </div>
  )
}

export default TopBar;
