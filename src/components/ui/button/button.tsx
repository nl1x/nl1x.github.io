import './button.css';
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  style?: 'primary' | 'secondary' | undefined;
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
  href?: string;
  download?: string;
  noredirect?: boolean;
  icon?: React.ReactNode;
}

function Button(props: ButtonProps) {
  return (
    <a
      href={props.href}
      target={props.noredirect ? '_blank' : ''}
      rel={props.noredirect ? 'noopener noreferrer' : ''}
      download={props.download}
      className={`button flex flex-row gap-4 items-center cursor-pointer select-none ${props.style ?? 'primary'}`}
    >
      {props.icon && <div className="icon shrink-0">{props.icon}</div>}
      <p className="button-text text-center flex-1 min-w-0">
        {props.children}
      </p>
    </a>
  )
}

export default Button;