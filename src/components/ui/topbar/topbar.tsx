import './topbar.pcss';
import React from "react";

interface TopBarProps {
  left?: React.ReactNode;
  center?: React.ReactNode;
  right?: React.ReactNode;
  className?: string;
}

function TopBar(props: TopBarProps) {
  return (
    <div className={`topbar ${props.className ?? ''}`}>
      <div className="topbar-left">{props.left}</div>
      {/*<div className="topbar-center">{props.center}</div>*/}
      <div className="topbar-right">{props.right}</div>
    </div>
  )
}

export default TopBar;
