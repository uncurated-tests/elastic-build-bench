'use client';
import React, { memo } from 'react';

interface Props {
  id: string;
  value: number;
  label?: string;
}

const SharedComponent2 = memo(function SharedComponent2({ id, value, label }: Props) {
  const computed = Math.sin(value * 3) * Math.cos(value);
  
  
  return (
    <div className="p-2 border border-zinc-200 dark:border-zinc-700 rounded">
      <span className="font-medium">{label || 'Item'} {id}</span>
      <span className="ml-2 text-zinc-500">{computed.toFixed(2)}</span>
    </div>
  );
});

SharedComponent2.displayName = 'SharedComponent2';
export default SharedComponent2;
