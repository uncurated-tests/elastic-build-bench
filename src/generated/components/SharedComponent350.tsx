'use client';
import React, { memo } from 'react';
import * as MuiIcons from '@mui/icons-material';

interface Props {
  id: string;
  value: number;
  label?: string;
}

const SharedComponent350 = memo(function SharedComponent350({ id, value, label }: Props) {
  const computed = Math.sin(value * 351) * Math.cos(value);
  
      const IconComponent = Object.values(MuiIcons)[350 % Object.keys(MuiIcons).length] as React.ComponentType;
  
  return (
    <div className="p-2 border border-zinc-200 dark:border-zinc-700 rounded">
      <span className="font-medium">{label || 'Item'} {id}</span>
      <span className="ml-2 text-zinc-500">{computed.toFixed(2)}</span>
    </div>
  );
});

SharedComponent350.displayName = 'SharedComponent350';
export default SharedComponent350;
