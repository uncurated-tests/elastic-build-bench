'use client';
import React, { memo } from 'react';

interface Props {
  id: string;
  value: number;
  label?: string;
}

const SharedComponent87 = memo(function SharedComponent87({ id, value, label }: Props) {
  const computed = Math.sin(value * 88) * Math.cos(value);
  
  
  return (
    <div className="p-2 border border-zinc-200 dark:border-zinc-700 rounded">
      <span className="font-medium">{label || 'Item'} {id}</span>
      <span className="ml-2 text-zinc-500">{computed.toFixed(2)}</span>
    </div>
  );
});

SharedComponent87.displayName = 'SharedComponent87';
export default SharedComponent87;
