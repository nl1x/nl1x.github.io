import './tag.pcss'
import React from 'react';

import Dot from "../dot/dot";

interface TagProps {
  variant: "success" | "warning" | "error";
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
}

function Tag(props: TagProps) {
  return (
    <div onClick={props.onClick} className={"tag " + props.variant}>
      <Dot variant={props.variant}/>
      {props.children}
    </div>
  )
}

export default Tag;