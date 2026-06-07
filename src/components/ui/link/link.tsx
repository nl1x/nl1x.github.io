import React from 'react';
import './link.pcss';

interface LinkProps {
  children: React.ReactNode;
  href?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement> | undefined;
}

function Link(props: LinkProps) {
  return (
    <a
      className="link"
      href={props.href}
      onClick={props.onClick}
    >
      {props.children}
    </a>
  )
}

export default Link;