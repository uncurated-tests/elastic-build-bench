'use client';
import React, { memo } from 'react';
import * as MuiIcons from '@mui/icons-material';

interface Props {
  id: string;
  value: number;
  label?: string;
}

const SharedComponent0 = memo(function SharedComponent0({ id, value, label }: Props) {
  const computed = Math.sin(value * 1) * Math.cos(value);
  
      const IconComponent = Object.values(MuiIcons)[0 % Object.keys(MuiIcons).length] as React.ComponentType;
  
  return (
    <div className="p-2 border border-zinc-200 dark:border-zinc-700 rounded">
      <span className="font-medium">{label || 'Item'} {id}</span>
      <span className="ml-2 text-zinc-500">{computed.toFixed(2)}</span>
    </div>
  );
});

SharedComponent0.displayName = 'SharedComponent0';
export default SharedComponent0;
