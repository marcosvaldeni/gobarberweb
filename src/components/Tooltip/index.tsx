import React from 'react';

import { Comtainer } from './styles';

interface TooltipProps {
  title: string;
  className?: string;
}

const Tooltip: React.FC<TooltipProps> = ({
  title,
  className = '',
  children,
}) => {
  return (
    <Comtainer className={className}>
      {children}
      <span>{title}</span>
    </Comtainer>
  );
};

export default Tooltip;
