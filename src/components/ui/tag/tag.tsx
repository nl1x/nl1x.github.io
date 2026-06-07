import './tag.css'
import React from 'react';

import Dot from "../dot/dot";

interface TagProps {
  status: "success" | "warning" | "error";
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
}

function Tag(props: TagProps) {
  return (
    <div onClick={props.onClick} className={"tag select-none whitespace-nowrap " + props.status}>
      <Dot color={props.status}/>
      {props.children}
    </div>
  )
}

export default Tag;