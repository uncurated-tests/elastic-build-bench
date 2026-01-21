'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7965<T> = T extends (infer U)[]
  ? DeepReadonlyArray7965<U>
  : T extends object
  ? DeepReadonlyObject7965<T>
  : T;

interface DeepReadonlyArray7965<T> extends ReadonlyArray<DeepReadonly7965<T>> {}

type DeepReadonlyObject7965<T> = {
  readonly [P in keyof T]: DeepReadonly7965<T[P]>;
};

type UnionToIntersection7965<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7965<T> = UnionToIntersection7965<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7965<T extends unknown[], V> = [...T, V];

type TuplifyUnion7965<T, L = LastOf7965<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7965<TuplifyUnion7965<Exclude<T, L>>, L>;

type DeepPartial7965<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7965<T[P]> }
  : T;

type Paths7965<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7965<K, Paths7965<T[K], Prev7965[D]>> : never }[keyof T]
  : never;

type Prev7965 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7965<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7965 {
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

type ConfigPaths7965 = Paths7965<NestedConfig7965>;

interface HeavyProps7965 {
  config: DeepPartial7965<NestedConfig7965>;
  path?: ConfigPaths7965;
}

const HeavyComponent7965 = memo(function HeavyComponent7965({ config }: HeavyProps7965) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7965) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7965 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7965: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7965.displayName = 'HeavyComponent7965';
export default HeavyComponent7965;
