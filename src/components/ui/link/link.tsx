import React from 'react';
import './link.css';

interface LinkProps {
  children: React.ReactNode;
  href: string;
}

function Link(props: LinkProps) {
  return (
    <a
      className="link opacity-75 hover:opacity-100 transition-opacity duration-300 ease-in-out uppercase w-fit"
      href={props.href}
    >
      {props.children}
    </a>
  )
}

export default Link;