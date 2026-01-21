'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4438<T> = T extends (infer U)[]
  ? DeepReadonlyArray4438<U>
  : T extends object
  ? DeepReadonlyObject4438<T>
  : T;

interface DeepReadonlyArray4438<T> extends ReadonlyArray<DeepReadonly4438<T>> {}

type DeepReadonlyObject4438<T> = {
  readonly [P in keyof T]: DeepReadonly4438<T[P]>;
};

type UnionToIntersection4438<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4438<T> = UnionToIntersection4438<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4438<T extends unknown[], V> = [...T, V];

type TuplifyUnion4438<T, L = LastOf4438<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4438<TuplifyUnion4438<Exclude<T, L>>, L>;

type DeepPartial4438<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4438<T[P]> }
  : T;

type Paths4438<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4438<K, Paths4438<T[K], Prev4438[D]>> : never }[keyof T]
  : never;

type Prev4438 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4438<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4438 {
  level1: {
    level2: {
      level3: {
        value: string;
        count: number;
        enabled: boolean;
        items: Array<{ id: number; name: string }>;
      };
    };
  };
}

type ConfigPaths4438 = Paths4438<NestedConfig4438>;

interface HeavyProps4438 {
  config: DeepPartial4438<NestedConfig4438>;
  path?: ConfigPaths4438;
}

const HeavyComponent4438 = memo(function HeavyComponent4438({ config }: HeavyProps4438) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4438) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4438 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4438: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4438.displayName = 'HeavyComponent4438';
export default HeavyComponent4438;
