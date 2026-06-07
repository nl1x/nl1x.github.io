import './emphasis.pcss';
import React from 'react';

interface EmphasisProps {
  children: React.ReactNode;
  textCase?: 'capitalize' | 'uppercase' | 'lowercase' | undefined;
  textStyle?: 'black' | 'extrabold' | 'bold' | 'semibold' | 'medium' | 'normal' | 'extralight' | 'light' | 'thin' | undefined;
  italic?: boolean | undefined;
}

function Emphasis(props: EmphasisProps) {
  return (
    <em className={`emphasis text-(--color-fg-emphasis) ${props.italic ? '' : 'not-'}italic ${props.textCase ?? 'capitalize'} font-${props.textStyle ?? 'black'}`}>
      {props.children}
    </em>
  )
}

export default Emphasis;