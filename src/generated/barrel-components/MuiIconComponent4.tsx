'use client';
import React, { memo } from 'react';
import * as MuiIcons from '@mui/icons-material';

// This component forces the bundler to parse all MUI icons
const iconNames = Object.keys(MuiIcons);
const IconComponent = (MuiIcons as Record<string, React.ComponentType>)[iconNames[4 % iconNames.length]];

interface Props {
  size?: number;
  color?: string;
}

const MuiIconComponent4 = memo(function MuiIconComponent4({ size = 24, color }: Props) {
  const selectedIconName = iconNames[4 % iconNames.length];
  const randomIndex = (4 * 17 + 13) % iconNames.length;
  const SecondIcon = (MuiIcons as Record<string, React.ComponentType>)[iconNames[randomIndex]];
  
  return (
    <div className="flex items-center gap-2 p-2">
      <span className="text-sm text-zinc-500">#{4}</span>
      {IconComponent && <IconComponent style={{ fontSize: size, color }} />}
      {SecondIcon && <SecondIcon style={{ fontSize: size * 0.8, color }} />}
      <span className="text-xs">{selectedIconName}</span>
    </div>
  );
});

MuiIconComponent4.displayName = 'MuiIconComponent4';
export default MuiIconComponent4;
