import './tag.css'
import React from 'react';

import Dot from "../dot/dot";

interface TagProps {
  children: React.ReactNode;
}

function Tag(props: TagProps) {
  return (
    <div className="tag">
      <Dot/>
      {props.children}
    </div>
  )
}

export default Tag;