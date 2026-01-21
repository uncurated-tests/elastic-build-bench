'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12965<T> = T extends (infer U)[]
  ? DeepReadonlyArray12965<U>
  : T extends object
  ? DeepReadonlyObject12965<T>
  : T;

interface DeepReadonlyArray12965<T> extends ReadonlyArray<DeepReadonly12965<T>> {}

type DeepReadonlyObject12965<T> = {
  readonly [P in keyof T]: DeepReadonly12965<T[P]>;
};

type UnionToIntersection12965<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12965<T> = UnionToIntersection12965<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12965<T extends unknown[], V> = [...T, V];

type TuplifyUnion12965<T, L = LastOf12965<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12965<TuplifyUnion12965<Exclude<T, L>>, L>;

type DeepPartial12965<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12965<T[P]> }
  : T;

type Paths12965<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12965<K, Paths12965<T[K], Prev12965[D]>> : never }[keyof T]
  : never;

type Prev12965 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12965<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12965 {
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

type ConfigPaths12965 = Paths12965<NestedConfig12965>;

interface HeavyProps12965 {
  config: DeepPartial12965<NestedConfig12965>;
  path?: ConfigPaths12965;
}

const HeavyComponent12965 = memo(function HeavyComponent12965({ config }: HeavyProps12965) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12965) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12965 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12965: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12965.displayName = 'HeavyComponent12965';
export default HeavyComponent12965;
