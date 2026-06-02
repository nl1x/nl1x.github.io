import './tag.css'
import React from 'react';

import Dot from "../dot/dot";

interface TagProps {
  status: "success" | "warning" | "error";
  children: React.ReactNode;
}

function Tag(props: TagProps) {
  return (
    <div className={"tag whitespace-nowrap " + props.status}>
      <Dot color={props.status}/>
      {props.children}
    </div>
  )
}

export default Tag;