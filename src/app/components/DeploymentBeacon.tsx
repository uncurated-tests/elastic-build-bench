'use client';

import { useEffect } from 'react';
import { buildRunId } from '@/generated/run-id';

export default function DeploymentBeacon() {
  useEffect(() => {
    if (!buildRunId) return;

    const key = `deployment-recorded:${buildRunId}`;
    if (typeof window !== 'undefined') {
      const existing = window.sessionStorage.getItem(key);
      if (existing) return;
      window.sessionStorage.setItem(key, 'true');
    }

    fetch('/api/record-deploy', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        runId: buildRunId,
        deploymentTime: new Date().toISOString(),
        source: 'client',
      }),
      keepalive: true,
    }).catch(() => undefined);
  }, []);

  return null;
}
