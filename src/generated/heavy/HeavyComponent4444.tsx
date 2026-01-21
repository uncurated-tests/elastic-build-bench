'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4444<T> = T extends (infer U)[]
  ? DeepReadonlyArray4444<U>
  : T extends object
  ? DeepReadonlyObject4444<T>
  : T;

interface DeepReadonlyArray4444<T> extends ReadonlyArray<DeepReadonly4444<T>> {}

type DeepReadonlyObject4444<T> = {
  readonly [P in keyof T]: DeepReadonly4444<T[P]>;
};

type UnionToIntersection4444<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4444<T> = UnionToIntersection4444<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4444<T extends unknown[], V> = [...T, V];

type TuplifyUnion4444<T, L = LastOf4444<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4444<TuplifyUnion4444<Exclude<T, L>>, L>;

type DeepPartial4444<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4444<T[P]> }
  : T;

type Paths4444<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4444<K, Paths4444<T[K], Prev4444[D]>> : never }[keyof T]
  : never;

type Prev4444 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4444<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4444 {
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

type ConfigPaths4444 = Paths4444<NestedConfig4444>;

interface HeavyProps4444 {
  config: DeepPartial4444<NestedConfig4444>;
  path?: ConfigPaths4444;
}

const HeavyComponent4444 = memo(function HeavyComponent4444({ config }: HeavyProps4444) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4444) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4444 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4444: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4444.displayName = 'HeavyComponent4444';
export default HeavyComponent4444;
