'use client';
import React, { memo } from 'react';
import * as MuiIcons from '@mui/icons-material';

// This component forces the bundler to parse all MUI icons
const iconNames = Object.keys(MuiIcons);
const IconComponent = (MuiIcons as Record<string, React.ComponentType>)[iconNames[26 % iconNames.length]];

interface Props {
  size?: number;
  color?: string;
}

const MuiIconComponent26 = memo(function MuiIconComponent26({ size = 24, color }: Props) {
  const selectedIconName = iconNames[26 % iconNames.length];
  const randomIndex = (26 * 17 + 13) % iconNames.length;
  const SecondIcon = (MuiIcons as Record<string, React.ComponentType>)[iconNames[randomIndex]];
  
  return (
    <div className="flex items-center gap-2 p-2">
      <span className="text-sm text-zinc-500">#{26}</span>
      {IconComponent && <IconComponent style={{ fontSize: size, color }} />}
      {SecondIcon && <SecondIcon style={{ fontSize: size * 0.8, color }} />}
      <span className="text-xs">{selectedIconName}</span>
    </div>
  );
});

MuiIconComponent26.displayName = 'MuiIconComponent26';
export default MuiIconComponent26;
