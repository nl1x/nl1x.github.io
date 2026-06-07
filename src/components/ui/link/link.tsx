import React from 'react';
import './link.css';

interface LinkProps {
  children: React.ReactNode;
  href?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement> | undefined;
}

function Link(props: LinkProps) {
  return (
    <a
      className="link opacity-75 select-none cursor-pointer hover:opacity-100 transition-opacity duration-300 ease-in-out uppercase w-fit"
      href={props.href}
      onClick={props.onClick}
    >
      {props.children}
    </a>
  )
}

export default Link;