'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7118<T> = T extends (infer U)[]
  ? DeepReadonlyArray7118<U>
  : T extends object
  ? DeepReadonlyObject7118<T>
  : T;

interface DeepReadonlyArray7118<T> extends ReadonlyArray<DeepReadonly7118<T>> {}

type DeepReadonlyObject7118<T> = {
  readonly [P in keyof T]: DeepReadonly7118<T[P]>;
};

type UnionToIntersection7118<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7118<T> = UnionToIntersection7118<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7118<T extends unknown[], V> = [...T, V];

type TuplifyUnion7118<T, L = LastOf7118<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7118<TuplifyUnion7118<Exclude<T, L>>, L>;

type DeepPartial7118<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7118<T[P]> }
  : T;

type Paths7118<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7118<K, Paths7118<T[K], Prev7118[D]>> : never }[keyof T]
  : never;

type Prev7118 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7118<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7118 {
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

type ConfigPaths7118 = Paths7118<NestedConfig7118>;

interface HeavyProps7118 {
  config: DeepPartial7118<NestedConfig7118>;
  path?: ConfigPaths7118;
}

const HeavyComponent7118 = memo(function HeavyComponent7118({ config }: HeavyProps7118) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7118) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7118 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7118: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7118.displayName = 'HeavyComponent7118';
export default HeavyComponent7118;
