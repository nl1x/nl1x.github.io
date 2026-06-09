import React from 'react';
import './link.pcss';

interface LinkProps {
  children: React.ReactNode;
  href?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement> | undefined;
}

function Link(props: LinkProps) {
  return (
    <a className="link" href={props.href} onClick={props.onClick}>
      <span className="link-dollar">$</span>
      <span className="link-text">{props.children}</span>
    </a>
  )
}

export default Link;