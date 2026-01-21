'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4936<T> = T extends (infer U)[]
  ? DeepReadonlyArray4936<U>
  : T extends object
  ? DeepReadonlyObject4936<T>
  : T;

interface DeepReadonlyArray4936<T> extends ReadonlyArray<DeepReadonly4936<T>> {}

type DeepReadonlyObject4936<T> = {
  readonly [P in keyof T]: DeepReadonly4936<T[P]>;
};

type UnionToIntersection4936<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4936<T> = UnionToIntersection4936<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4936<T extends unknown[], V> = [...T, V];

type TuplifyUnion4936<T, L = LastOf4936<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4936<TuplifyUnion4936<Exclude<T, L>>, L>;

type DeepPartial4936<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4936<T[P]> }
  : T;

type Paths4936<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4936<K, Paths4936<T[K], Prev4936[D]>> : never }[keyof T]
  : never;

type Prev4936 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4936<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4936 {
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

type ConfigPaths4936 = Paths4936<NestedConfig4936>;

interface HeavyProps4936 {
  config: DeepPartial4936<NestedConfig4936>;
  path?: ConfigPaths4936;
}

const HeavyComponent4936 = memo(function HeavyComponent4936({ config }: HeavyProps4936) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4936) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4936 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4936: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4936.displayName = 'HeavyComponent4936';
export default HeavyComponent4936;
