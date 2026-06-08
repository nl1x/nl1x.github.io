import './button.pcss';
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
      className={`button ${props.style ?? 'primary'}`}
    >
      {props.icon && <div className="button-icon">{props.icon}</div>}
      <p className="button-text">
        {props.children}
      </p>
    </a>
  )
}

export default Button;