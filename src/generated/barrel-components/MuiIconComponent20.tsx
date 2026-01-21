'use client';
import React, { memo } from 'react';
import * as MuiIcons from '@mui/icons-material';

// This component forces the bundler to parse all MUI icons
const iconNames = Object.keys(MuiIcons);
const IconComponent = (MuiIcons as Record<string, React.ComponentType>)[iconNames[20 % iconNames.length]];

interface Props {
  size?: number;
  color?: string;
}

const MuiIconComponent20 = memo(function MuiIconComponent20({ size = 24, color }: Props) {
  const selectedIconName = iconNames[20 % iconNames.length];
  const randomIndex = (20 * 17 + 13) % iconNames.length;
  const SecondIcon = (MuiIcons as Record<string, React.ComponentType>)[iconNames[randomIndex]];
  
  return (
    <div className="flex items-center gap-2 p-2">
      <span className="text-sm text-zinc-500">#{20}</span>
      {IconComponent && <IconComponent style={{ fontSize: size, color }} />}
      {SecondIcon && <SecondIcon style={{ fontSize: size * 0.8, color }} />}
      <span className="text-xs">{selectedIconName}</span>
    </div>
  );
});

MuiIconComponent20.displayName = 'MuiIconComponent20';
export default MuiIconComponent20;
