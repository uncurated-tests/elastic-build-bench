'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7486<T> = T extends (infer U)[]
  ? DeepReadonlyArray7486<U>
  : T extends object
  ? DeepReadonlyObject7486<T>
  : T;

interface DeepReadonlyArray7486<T> extends ReadonlyArray<DeepReadonly7486<T>> {}

type DeepReadonlyObject7486<T> = {
  readonly [P in keyof T]: DeepReadonly7486<T[P]>;
};

type UnionToIntersection7486<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7486<T> = UnionToIntersection7486<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7486<T extends unknown[], V> = [...T, V];

type TuplifyUnion7486<T, L = LastOf7486<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7486<TuplifyUnion7486<Exclude<T, L>>, L>;

type DeepPartial7486<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7486<T[P]> }
  : T;

type Paths7486<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7486<K, Paths7486<T[K], Prev7486[D]>> : never }[keyof T]
  : never;

type Prev7486 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7486<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7486 {
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

type ConfigPaths7486 = Paths7486<NestedConfig7486>;

interface HeavyProps7486 {
  config: DeepPartial7486<NestedConfig7486>;
  path?: ConfigPaths7486;
}

const HeavyComponent7486 = memo(function HeavyComponent7486({ config }: HeavyProps7486) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7486) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7486 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7486: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7486.displayName = 'HeavyComponent7486';
export default HeavyComponent7486;
