'use client';
import React, { memo } from 'react';

interface Props {
  id: string;
  value: number;
  label?: string;
}

const SharedComponent6 = memo(function SharedComponent6({ id, value, label }: Props) {
  const computed = Math.sin(value * 7) * Math.cos(value);
  
  return (
    <div className="p-2 border border-zinc-200 dark:border-zinc-700 rounded">
      <span className="font-medium">{label || 'Item'} {id}</span>
      <span className="ml-2 text-zinc-500">{computed.toFixed(2)}</span>
    </div>
  );
});

SharedComponent6.displayName = 'SharedComponent6';
export default SharedComponent6;
