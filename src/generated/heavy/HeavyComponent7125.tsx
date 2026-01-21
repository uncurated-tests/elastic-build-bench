'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7125<T> = T extends (infer U)[]
  ? DeepReadonlyArray7125<U>
  : T extends object
  ? DeepReadonlyObject7125<T>
  : T;

interface DeepReadonlyArray7125<T> extends ReadonlyArray<DeepReadonly7125<T>> {}

type DeepReadonlyObject7125<T> = {
  readonly [P in keyof T]: DeepReadonly7125<T[P]>;
};

type UnionToIntersection7125<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7125<T> = UnionToIntersection7125<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7125<T extends unknown[], V> = [...T, V];

type TuplifyUnion7125<T, L = LastOf7125<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7125<TuplifyUnion7125<Exclude<T, L>>, L>;

type DeepPartial7125<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7125<T[P]> }
  : T;

type Paths7125<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7125<K, Paths7125<T[K], Prev7125[D]>> : never }[keyof T]
  : never;

type Prev7125 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7125<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7125 {
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

type ConfigPaths7125 = Paths7125<NestedConfig7125>;

interface HeavyProps7125 {
  config: DeepPartial7125<NestedConfig7125>;
  path?: ConfigPaths7125;
}

const HeavyComponent7125 = memo(function HeavyComponent7125({ config }: HeavyProps7125) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7125) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7125 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7125: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7125.displayName = 'HeavyComponent7125';
export default HeavyComponent7125;
