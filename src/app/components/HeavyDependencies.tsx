'use client';

/**
 * This component imports heavy dependencies to increase:
 * 1. Bundle size (affects deployment upload time)
 * 2. Compilation time (more code to process)
 * 
 * These are real dependencies that real-world apps use.
 */

// Cloud SDKs
import { S3Client } from '@aws-sdk/client-s3';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';

// UI Libraries
import { Button, Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

// State Management
import { create } from 'zustand';

// Data Visualization
import { Chart, registerables } from 'chart.js';
import * as d3 from 'd3';

// Utilities
import _ from 'lodash';
import dayjs from 'dayjs';
import { v4 as uuidv4 } from 'uuid';

// Register Chart.js components
if (typeof window !== 'undefined') {
  Chart.register(...registerables);
}

// Create a simple Zustand store
const useStore = create<{ count: number; increment: () => void }>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}));

interface HeavyDependenciesProps {
  showContent?: boolean;
}

export default function HeavyDependencies({ showContent = false }: HeavyDependenciesProps) {
  const { count, increment } = useStore();

  // Use d3 for some calculations
  const data = d3.range(10).map((i) => i * i);
  const sum = d3.sum(data);

  // Use lodash for transformations
  const shuffled = _.shuffle([1, 2, 3, 4, 5]);

  // Use dayjs for date formatting
  const now = dayjs().format('YYYY-MM-DD HH:mm:ss');

  // Generate a UUID
  const id = uuidv4();

  if (!showContent) {
    // Still render something minimal to ensure imports are not tree-shaken
    return (
      <div data-id={id} data-sum={sum} data-shuffled={shuffled.join(',')} data-now={now}>
        {/* Dependencies loaded */}
      </div>
    );
  }

  return (
    <Box sx={{ p: 2, border: '1px solid #ccc', borderRadius: 2, m: 2 }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h6" gutterBottom>
          Heavy Dependencies Demo
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ID: {id}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Time: {now}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          D3 Sum: {sum}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Shuffled: {shuffled.join(', ')}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Count: {count}
        </Typography>
        <Button variant="contained" onClick={increment} sx={{ mt: 1 }}>
          Increment
        </Button>
      </motion.div>
    </Box>
  );
}

// Export cloud SDK constructors so they're not tree-shaken
// (In a real app, these would be used for actual API calls)
export const cloudSDKs = {
  s3: S3Client,
  dynamodb: DynamoDBClient,
};
