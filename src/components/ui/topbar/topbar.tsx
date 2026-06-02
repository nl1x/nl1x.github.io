import './topbar.css';
import React from "react";

interface TopBarProps {
  left?: React.ReactNode;
  center?: React.ReactNode;
  right?: React.ReactNode;
  className?: string;
}

function TopBar(props: TopBarProps) {
  return (
    <div className={props.className + " grid grid-cols-3 gap-4 bg-blue border-b text-center items-center h-[100px] border-b-white top-bar"}>
      <div className="left ml-10">{props.left}</div>
      <div className="center ml-10 mr-10">{props.center}</div>
      <div className="right right-0 mr-10">{props.right}</div>
    </div>
  )
}

export default TopBar;
